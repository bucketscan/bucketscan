resource "aws_s3_bucket" "scan_files" {
  bucket = "bucketscan-scan-files"
}

#################################################
# Encryption
#################################################
# resource "aws_kms_key" "scan_files" {
#   description             = "Encrypts objects uploaded to the Scan Files bucket"
#   deletion_window_in_days = 10

#   enable_key_rotation = true
# }

# resource "aws_kms_alias" "scan_files" {
#   target_key_id = aws_kms_key.scan_files.id
#   name          = "alias/bucketscan-scan-files"
# }

# Deliberately not using a customer-managed key as this generates a cost
# for the project, which we are trying to avoid for now. This still uses
# server-side encryption, just using an AWS-managed key
# tfsec:ignore:aws-s3-encryption-customer-key
resource "aws_s3_bucket_server_side_encryption_configuration" "scan_files" {
  bucket = aws_s3_bucket.scan_files.bucket

  rule {
    bucket_key_enabled = true

    apply_server_side_encryption_by_default {
      # kms_master_key_id = aws_kms_key.scan_files.arn
      sse_algorithm = "aws:kms"
    }
  }
}

#################################################
# Access
#################################################
resource "aws_s3_bucket_public_access_block" "scan_files" {
  bucket = aws_s3_bucket.scan_files.bucket

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

#################################################
# Versioning
#################################################
resource "aws_s3_bucket_versioning" "scan_files" {
  bucket = aws_s3_bucket.scan_files.bucket

  versioning_configuration {
    status = "Enabled"
  }
}

#################################################
# Logging
#################################################
resource "aws_s3_bucket_logging" "safe_files" {
  bucket = aws_s3_bucket.scan_files.bucket

  target_bucket = aws_s3_bucket.logging.bucket
  target_prefix = "${aws_s3_bucket.scan_files.bucket}/"
}
