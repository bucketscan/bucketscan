data "aws_iam_policy_document" "guardduty_assume" {
  version = "2012-10-17"

  statement {
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["malware-protection-plan.guardduty.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "guardduty" {
  name               = "bucketscan-guardduty-scan-files"
  assume_role_policy = data.aws_iam_policy_document.guardduty_assume.json
}

data "aws_iam_policy_document" "guardduty_permissions" {
  version = "2012-10-17"

  statement {
    sid = "AllowManagedRuleToSendS3EventsToGuardDuty"
    actions = [
      "events:PutRule",
      "events:DeleteRule",
      "events:PutTargets",
      "events:RemoveTargets"
    ]

    resources = [
      "arn:aws:events:${local.region}:${local.account_id}:rule/DO-NOT-DELETE-AmazonGuardDutyMalwareProtectionS3*"
    ]

    condition {
      test     = "StringLike"
      variable = "events:ManagedBy"
      values   = ["malware-protection-plan.guardduty.amazonaws.com"]
    }
  }

  statement {
    sid = "AllowGuardDutyToMonitorEventBridgeManagedRule"
    actions = [
      "events:DescribeRule",
      "events:ListTargetsByRule"
    ]

    resources = [
      "arn:aws:events:${local.region}:${local.account_id}:rule/DO-NOT-DELETE-AmazonGuardDutyMalwareProtectionS3*"
    ]
  }

  statement {
    sid = "AllowPostScanTag"
    actions = [
      "s3:PutObjectTagging",
      "s3:GetObjectTagging",
      "s3:PutObjectVersionTagging",
      "s3:GetObjectVersionTagging"
    ]
    resources = [
      "arn:aws:s3:::${aws_s3_bucket.scan_files.bucket}"
    ]
  }

  statement {
    sid = "AllowEnableS3EventBridgeEvents"
    actions = [
      "s3:PutBucketNotification",
      "s3:GetBucketNotification"
    ]
    resources = [
      "arn:aws:s3:::${aws_s3_bucket.scan_files.bucket}"
    ]
  }

  statement {
    sid = "AllowPutValidationObject"
    actions = [
      "s3:PutObject"
    ]
    resources = [
      "arn:aws:s3:::${aws_s3_bucket.scan_files.bucket}/malware-protection-resource-validation-object"
    ]
  }

  statement {
    sid = "ListBucketContents"
    actions = [
      "s3:ListBucket"
    ]
    resources = ["arn:aws:s3:::${aws_s3_bucket.scan_files.bucket}"]
  }

  statement {
    sid = "AllowMalwareScan"
    actions = [
      "s3:GetObject",
      "s3:GetObjectVersion"
    ]
    resources = [
      "arn:aws:s3:::${aws_s3_bucket.scan_files.bucket}/*"
    ]
  }

  # statement {
  #   sid = "AllowDecryptForMalwareScan"
  #   actions = [
  #     "kms:GenerateDataKey",
  #     "kms:Decrypt"
  #   ]
  #   resources = [
  #     aws_kms_key.scan_files.arn
  #   ]
  #   condition {
  #     test     = "StringLike"
  #     variable = "kms:ViaService"
  #     values   = ["s3.*.amazonaws.com"]
  #   }
  # }
}

resource "aws_iam_role_policy" "guardduty_permissions" {
  role   = aws_iam_role.guardduty.id
  name   = "bucketscan-guardduty-scan-files-permissions"
  policy = data.aws_iam_policy_document.guardduty_permissions.json
}

resource "aws_guardduty_malware_protection_plan" "scan_files" {
  role = aws_iam_role.guardduty.arn

  protected_resource {
    s3_bucket {
      bucket_name     = aws_s3_bucket.scan_files.id
      object_prefixes = ["files"]
    }
  }

  actions {
    tagging {
      status = "ENABLED"
    }
  }
}
