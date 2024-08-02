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

resource "aws_cloudwatch_event_target" "handle_scanned_files" {
  rule = aws_cloudwatch_event_rule.scan_results.name
  arn  = aws_lambda_function.handle_scanned_files.arn
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
      identifiers = ["lambda.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "handle_scanned_files" {
  name               = "bucketscan-handle-scanned-files"
  assume_role_policy = data.aws_iam_policy_document.handle_scanned_files.json
}

# IAM: Delete Scanned Files
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

# IAM: Get Supabase Credentials
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

# IAM: Logging
# data "aws_iam_policy_document" "handle_scanned_files_logging" {
#   version = "2012-10-17"

#   statement {
#     sid = "LogEvents"

#     actions = [
#       "logs:CreateLogStream",
#       "logs:PutLogEvents"
#     ]

#     resources = [
#       "arn:aws:logs:${local.region}:${local.account_id}:log-group:/aws/lambda/bucketscan-handle-scanned-files:*:log-stream:*"
#     ]
#   }
# }

# resource "aws_iam_role_policy" "handle_scanned_files_logging" {
#   name   = "bucketscan-handle-scanned-files-logging"
#   role   = aws_iam_role.handle_scanned_files.id
#   policy = data.aws_iam_policy_document.handle_scanned_files_logging.json
# }

resource "aws_iam_role_policy_attachment" "handle_scanned_files_basic_execution_role" {
  role       = aws_iam_role.handle_scanned_files.id
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

#################################################################################
# Lambda Function
#################################################################################
# resource "aws_cloudwatch_log_group" "handle_scanned_files" {
#   name = "/aws/lambda/bucketscan-handle-scanned-files"
# }

data "archive_file" "lambda_zip" {
  type        = "zip"
  source_dir  = "${path.module}/../functions/handle-scanned-files/dist"
  output_path = "${path.module}/handle-scanned-files.zip"
}

resource "aws_lambda_function" "handle_scanned_files" {
  function_name    = "bucketscan-handle-scanned-files"
  role             = aws_iam_role.handle_scanned_files.arn
  handler          = "index.default"
  filename         = data.archive_file.lambda_zip.output_path
  source_code_hash = data.archive_file.lambda_zip.output_base64sha256
  timeout          = 30
  runtime          = "nodejs20.x"

  logging_config {
    # log_group  = aws_cloudwatch_log_group.handle_scanned_files.arn
    log_format = "JSON"
  }

  tracing_config {
    mode = "Active"
  }
}
