resource "aws_s3_bucket" "logging" {
  bucket = "bucketscan-bucket-logging"
}

#################################################
# Encryption
#################################################
resource "aws_kms_key" "logging" {
  description             = "Encrypts objects uploaded to the Logging bucket"
  deletion_window_in_days = 10

  enable_key_rotation     = true
  rotation_period_in_days = 10
}

resource "aws_s3_bucket_server_side_encryption_configuration" "logging" {
  bucket = aws_s3_bucket.logging.bucket

  rule {
    bucket_key_enabled = true

    apply_server_side_encryption_by_default {
      kms_master_key_id = aws_kms_key.logging.arn
      sse_algorithm     = "aws:kms"
    }
  }
}

#################################################
# Access
#################################################
resource "aws_s3_bucket_public_access_block" "logging" {
  bucket = aws_s3_bucket.logging.bucket

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

#################################################
# Versioning
#################################################
resource "aws_s3_bucket_versioning" "logging" {
  bucket = aws_s3_bucket.logging.bucket

  versioning_configuration {
    status     = "Enabled"
    mfa_delete = "Enabled"
  }
}

#################################################
# Logging
#################################################
resource "aws_s3_bucket_logging" "logging" {
  bucket = aws_s3_bucket.logging.bucket

  target_bucket = aws_s3_bucket.logging.bucket
  target_prefix = "${aws_s3_bucket.logging.bucket}/"
}

