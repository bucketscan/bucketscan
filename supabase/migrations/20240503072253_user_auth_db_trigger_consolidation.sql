-- This trigger automatically creates a Sandbox and Production API key for new users when they sign up
-- See https://supabase.com/docs/guides/auth/managing-user-data#using-triggers for more details.
create function public.handle_new_user_api_keys()
returns trigger as $$
begin
  insert into public.api_keys (accountId, type, api_key)
  values (new.id, "sandbox", "sk_test_");

  insert into public.api_keys (accountId, type, api_key)
  values (new.id, "production", "sk_live");
end;
$$ language plpgsql security definer;


create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user()
  for each row execute procedure basejump.run_new_user_setup()
