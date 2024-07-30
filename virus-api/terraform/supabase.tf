resource "aws_ssm_parameter" "supabase_url" {
  name        = "/bucketscan/supabase/url"
  description = "The URL for the Supabase project API found in Project Settings"
  type        = "SecureString"
  value       = "THIS-IS-A-DUMMY-VALUE-THAT-WILL-BE-SET-IN-THE-CONSOLE-DIRECTLY"
}

resource "aws_ssm_parameter" "supabase_anon_key" {
  name        = "/bucketscan/supabase/anon-key"
  description = "The public anon API key for the Supabase project API found in Project Settings"
  type        = "SecureString"
  value       = "THIS-IS-A-DUMMY-VALUE-THAT-WILL-BE-SET-IN-THE-CONSOLE-DIRECTLY"
}
