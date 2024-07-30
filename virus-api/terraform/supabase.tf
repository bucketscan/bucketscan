resource "aws_ssm_parameter" "supabase_url" {
  name        = "/bucketscan/supabase/url"
  description = "The URL for the Supabase project API found in Project Settings"
  type        = "SecureString"
  value       = "THIS-IS-A-DUMMY-VALUE-THAT-WILL-BE-SET-IN-THE-CONSOLE-DIRECTLY"

  lifecycle {
    # Stop Terraform overwriting the value set in the console
    ignore_changes = [value]
  }
}

resource "aws_ssm_parameter" "supabase_anon_key" {
  name        = "/bucketscan/supabase/anon-key"
  description = "The public anon API key for the Supabase project API found in Project Settings"
  type        = "SecureString"
  value       = "THIS-IS-A-DUMMY-VALUE-THAT-WILL-BE-SET-IN-THE-CONSOLE-DIRECTLY"

  lifecycle {
    # Stop Terraform overwriting the value set in the console
    ignore_changes = [value]
  }
}
