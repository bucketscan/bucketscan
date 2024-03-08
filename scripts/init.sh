#!/bin/bash

set -e

CONFIG=packages/web/.env.local

if [ ! -e "$CONFIG" ];
then
  touch "$CONFIG"
fi

set +a
. "$CONFIG"
set -a

if [ -z "$SUPABASE_PROJECT_URL" ];
then
  read -p "Supabase Project URL: " SUPABASE_PROJECT_URL
fi

if [ -z "$SUPABASE_API_KEY" ];
then
  read -p "Supabase API Key: " SUPABASE_API_KEY
fi

cat > "$CONFIG" <<EOL
NEXT_PUBLIC_SUPABASE_URL=$SUPABASE_PROJECT_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=$SUPABASE_API_KEY
EOL

echo "Supabase config file up to date!"
