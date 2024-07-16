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

#################################################################################
# State Machine
#################################################################################
resource "aws_sfn_state_machine" "handle_scanned_files" {
  name       = "bucketscan-handle-scanned-files"
  definition = file("${path.module}/handle-scanned-files.json")
  role_arn   = aws_iam_role.handle_scanned_files.arn
}
