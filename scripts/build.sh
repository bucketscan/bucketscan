#!/bin/bash

set -e

if [ -n "$FILTER" ];
then
  npx pnpm --filter "$FILTER" build
else
  echo "To filter what you build, set the FILTER environment variable"

  npx pnpm build
fi
