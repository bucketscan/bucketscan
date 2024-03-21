terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~> 5.41"
    }
  }

  required_version = ">= 1.7"
}

provider "aws" {
  region = "eu-west-2"
}
