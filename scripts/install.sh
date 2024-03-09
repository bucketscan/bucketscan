#!/bin/bash

set -e

for dir in $(find packages/ -type d ! -path "*/node_modules*" ! -path "*/.next*")
do
  [ -e "$dir/package.json" ] && {
    echo "Installing dependencies for $dir..."
    (cd "$dir"; yarn install)
  }
done
