#!/bin/bash

set -e

CONFIG=./webapp/.env.local

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

if [ -z "$AWS_REGION" ];
then
  read -p "AWS Region: " AWS_REGION
fi

if [ -z "$AWS_ACCESS_KEY_ID" ];
then
  read -p "AWS Access Key ID: " AWS_ACCESS_KEY_ID
fi

if [ -z "$AWS_SECRET_ACCESS_KEY" ];
then
  read -p "AWS Secret Access Key: " AWS_SECRET_ACCESS_KEY
fi

if [ -z "$AWS_BUCKET_NAME" ];
then
  read -p "AWS Bucket Name: " AWS_BUCKET_NAME
fi

cat > "$CONFIG" <<EOL
NEXT_PUBLIC_SUPABASE_URL=$SUPABASE_PROJECT_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=$SUPABASE_API_KEY
AWS_REGION=$AWS_REGION
AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY
AWS_BUCKET_NAME=$AWS_BUCKET_NAME
EOL

echo "Webapp config file up to date!"
