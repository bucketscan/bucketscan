#!/bin/bash

set -e

for dir in $(find packages/ -type d ! -path "*/node_modules*")
do
  if [ -f "$dir/package.json" ];
  then
    echo "Building $dir..."
    (cd "$dir"; yarn build)
  fi
done
