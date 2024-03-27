#!/bin/bash

if ! command -v docker;
then
  echo "To run the Lambda locally, you must have Docker installed"
  exit 1
fi

echo "Building Lambda image..."
docker build \
  --platform linux/amd64 \
  -t virus-api-update-virus-database \
  .

echo "Running Lambda locally..."
docker run -d \
  --rm \
  --platform linux/amd64 \
  -p 9000:8080 \
  --name update-virus-database \
  virus-api-update-virus-database

echo "Invoking Lambda..."
curl "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{}'

echo ""
echo ""
echo "---------------------------------------------------------------"
docker logs update-virus-database
echo "---------------------------------------------------------------"
echo ""

echo "Cleaning up..."
docker stop update-virus-database
