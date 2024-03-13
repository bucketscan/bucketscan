#!/bin/bash

set -e

for dir in $(find ./ -type d ! -path "*/node_modules*" ! -path "*/.next*")
do
  if [ -f "$dir/package.json" ];
  then
    echo "Installing dependencies for $dir..."
    (cd "$dir"; yarn install)
  fi
done
