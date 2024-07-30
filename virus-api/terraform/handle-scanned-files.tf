#################################################################################
# Event Rule
#################################################################################
resource "aws_cloudwatch_event_rule" "scan_results" {
  name        = "bucketscan-guardduty-malware-scan-result"
  description = "Handle scan results from GuardDuty Malware Protection for the S3 bucket: bucketscan-scan-files"

  event_pattern = jsonencode({
    detail-type = ["GuardDuty Malware Protection Object Scan Result"],
    source      = ["aws.guardduty"]
  })
}

data "aws_iam_policy_document" "trigger_handle_scanned_files_workflow" {
  version = "2012-10-17"

  statement {
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["events.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "trigger_handle_scanned_files_workflow" {
  name               = "bucketscan-trigger-handle-scanned-files-workflow"
  assume_role_policy = data.aws_iam_policy_document.trigger_handle_scanned_files_workflow.json
}

data "aws_iam_policy_document" "trigger_handle_scanned_files_workflow_permission" {
  version = "2012-10-17"

  statement {
    actions   = ["states:StartExecution"]
    resources = [aws_sfn_state_machine.handle_scanned_files.arn]
  }
}

resource "aws_iam_role_policy" "trigger_handle_scanned_files_workflow_permission" {
  name   = "bucketscan-trigger-handle-scanned-files-workflow"
  role   = aws_iam_role.trigger_handle_scanned_files_workflow.id
  policy = data.aws_iam_policy_document.trigger_handle_scanned_files_workflow_permission.json
}

resource "aws_cloudwatch_event_target" "handle_scanned_files" {
  rule     = aws_cloudwatch_event_rule.scan_results.name
  arn      = aws_sfn_state_machine.handle_scanned_files.arn
  role_arn = aws_iam_role.trigger_handle_scanned_files_workflow.arn
}

#################################################################################
# IAM Role
#################################################################################
data "aws_iam_policy_document" "handle_scanned_files" {
  version = "2012-10-17"

  statement {
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["states.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "handle_scanned_files" {
  name               = "bucketscan-handle-scanned-files"
  assume_role_policy = data.aws_iam_policy_document.handle_scanned_files.json
}

data "aws_iam_policy_document" "delete_scanned_files" {
  version = "2012-10-17"

  statement {
    actions = ["s3:DeleteObject"]
    # tfsec:ignore:aws-iam-no-policy-wildcards - we want to allow deletion of all files
    resources = ["${aws_s3_bucket.scan_files.arn}/files/*"]
  }
}

resource "aws_iam_role_policy" "delete_scanned_files" {
  name   = "bucketscan-delete-scanned-files"
  role   = aws_iam_role.handle_scanned_files.id
  policy = data.aws_iam_policy_document.delete_scanned_files.json
}

data "aws_iam_policy_document" "get_supabase_credentials" {
  version = "2012-10-17"

  statement {
    actions = ["ssm:GetParameters"]

    resources = [
      "arn:aws:ssm:${local.region}:${local.account_id}:parameter/bucketscan/supabase/url",
      "arn:aws:ssm:${local.region}:${local.account_id}:parameter/bucketscan/supabase/anon-key"
    ]
  }
}

resource "aws_iam_role_policy" "get_supabase_credentials" {
  name   = "bucketscan-get-supabase-credentials"
  role   = aws_iam_role.handle_scanned_files.id
  policy = data.aws_iam_policy_document.get_supabase_credentials.json
}

#################################################################################
# State Machine
#################################################################################
resource "aws_sfn_state_machine" "handle_scanned_files" {
  name       = "bucketscan-handle-scanned-files"
  definition = file("${path.module}/handle-scanned-files.json")
  role_arn   = aws_iam_role.handle_scanned_files.arn
}
