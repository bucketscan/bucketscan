-- Drop the existing function if it exists
drop function if exists get_account_by_api_key(uuid);

-- Create the function with the correct type casting
create or replace function get_account_by_api_key(api_key uuid)
returns uuid
language plpgsql
SECURITY DEFINER -- this allows execution as the creator of the function. Be mindful of what is returned here.
as $$
declare
  account_id uuid;
begin
  select id
  into account_id
  from basejump.accounts
  where private_metadata ->> 'api_key' = api_key::text;

  return account_id;
end;
$$;

-- Grant execute permissions to the necessary roles
grant execute on function public.get_account_by_api_key(uuid) to anon, authenticated;
