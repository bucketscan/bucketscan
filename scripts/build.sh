#!/bin/bash

set -e

for dir in $(find packages/ -type d ! -path "*/node_modules*")
do
  [ -e "$dir/package.json" ] && {
    echo "Building $dir..."
    (cd "$dir"; yarn build)
  }
done
