#!/bin/bash

set -e

for dir in $(find ./ -type d ! -path "*/node_modules*" ! -path "*/.next*")
do
  if [ -f "$dir/package.json" ];
  then
    echo "Building $dir..."
    (cd "$dir"; yarn build)
  fi
done
