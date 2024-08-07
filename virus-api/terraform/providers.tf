terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.54"
    }
  }

  required_version = ">= 1.7"
}

provider "aws" {
  region = "eu-west-2"

  default_tags {
    tags = {
      Product     = "BucketScan"
      Environment = "PRODUCTION"
    }
  }
}
