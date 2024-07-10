#################################################
# Monitor bucket with CloudTrail
#################################################
data "aws_iam_policy_document" "scan_files_bucket_cloudtrail" {
  version = "2012-10-17"

  statement {
    sid = "AWSCloudTrailAclCheck"

    principals {
      type        = "Service"
      identifiers = ["cloudtrail.amazonaws.com"]
    }

    actions   = ["s3:GetBucketAcl"]
    resources = [aws_s3_bucket.logging.arn]

    condition {
      test     = "StringEquals"
      variable = "aws:SourceArn"
      values   = ["arn:aws:cloudtrail:${local.region}:${local.account_id}:trail/bucketscan-scan-files"]
    }
  }

  statement {
    sid = "AWSCloudTrailWrite"

    principals {
      type        = "Service"
      identifiers = ["cloudtrail.amazonaws.com"]
    }

    actions   = ["s3:PutObject"]
    resources = ["${aws_s3_bucket.logging.arn}/ScanFiles/AWSLogs/${local.account_id}/*"]

    condition {
      test     = "StringEquals"
      variable = "s3:x-amz-acl"
      values   = ["bucket-owner-full-control"]
    }

    condition {
      test     = "StringEquals"
      variable = "aws:SourceArn"
      values   = ["arn:aws:cloudtrail:${local.region}:${local.account_id}:trail/bucketscan-scan-files"]
    }
  }
}

resource "aws_s3_bucket_policy" "scan_files_bucket_cloudtrail" {
  bucket = aws_s3_bucket.logging.id
  policy = data.aws_iam_policy_document.scan_files_bucket_cloudtrail.json
}

#################################################
# IAM: CloudTrail log to CloudWatch
#################################################
# tfsec:ignore:aws-cloudwatch-log-group-customer-key
resource "aws_cloudwatch_log_group" "scan_files_trail" {
  name = "bucketscan-scan-files-trail"
}

data "aws_iam_policy_document" "scan_files_trail" {
  version = "2012-10-17"

  statement {
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["cloudtrail.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "scan_files_trail" {
  name               = "bucketscan-scan-files-trail"
  assume_role_policy = data.aws_iam_policy_document.scan_files_trail.json
}

data "aws_iam_policy_document" "scan_files_trail_logs" {
  version = "2012-10-17"

  statement {
    actions = [
      "logs:CreateLogStream",
      "logs:PutLogEvents"
    ]
    resources = [
      "${aws_cloudwatch_log_group.scan_files_trail.arn}:*"
    ]
  }
}

resource "aws_iam_role_policy" "scan_files_trail_logs" {
  role   = aws_iam_role.scan_files_trail.id
  policy = data.aws_iam_policy_document.scan_files_trail_logs.json
}

#################################################
# CloudTrail
#################################################
# tfsec:ignore:aws-cloudtrail-enable-at-rest-encryption
resource "aws_cloudtrail" "scan_files_bucket" {
  depends_on = [aws_s3_bucket_policy.scan_files_bucket_cloudtrail]

  name                          = "bucketscan-scan-files"
  s3_bucket_name                = aws_s3_bucket.logging.id
  s3_key_prefix                 = "ScanFiles"
  include_global_service_events = true
  is_multi_region_trail         = true
  enable_log_file_validation    = true
  cloud_watch_logs_group_arn    = "${aws_cloudwatch_log_group.scan_files_trail.arn}:*"
  cloud_watch_logs_role_arn     = aws_iam_role.scan_files_trail.arn

  event_selector {
    read_write_type           = "WriteOnly"
    include_management_events = false

    data_resource {
      type   = "AWS::S3::Object"
      values = ["arn:aws:s3:::${aws_s3_bucket.scan_files.bucket}/files"]
    }
  }
}
