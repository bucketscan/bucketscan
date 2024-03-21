remote_state {
  backend  = "s3"

  generate = {
    path      = "backend.tf"
    if_exists = "overwrite_terragrunt"
  }

  config = {
    bucket  = "slade-personal-terraform-state"
    region  = "eu-west-2"
    key     = "bucketscan/terraform.tfstate"
    encrypt = true
    dynamodb_table = "terraform-state-lock"
  }
}
