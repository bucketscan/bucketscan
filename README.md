[![Deploy](https://github.com/bucketscan/bucketscan/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/bucketscan/bucketscan/actions/workflows/deploy.yml)

# BucketScan

An API-driven, SaaS-based platform for running virus scans on files.

## Prerequisites

The following tools are required to build and run this project.

1. [Node.js](https://nodejs.org/en/download)
1. An IDE such as [VSCode](https://code.visualstudio.com/download)
1. [Docker](https://docs.docker.com/desktop)
1. _Recommended_ [AWS Vault](https://github.com/99designs/aws-vault?tab=readme-ov-file#installing)

> Note that when running any of the build commands, you must be running with valid AWS credentials in an account bootstrapped for CDK and SST.

## Build and run the project

Run the following command from the terminal to build and run the project.

```shell
$ make setup
```

## Cleanup

To clean up all build outputs, run the following command in the terminal:

```shell
$ make teardown
```

## Running Locally

To run the entire app run:

```shell
$ make run
```

To run just the web app run:

```shell
$ make web
```

## Working with Supabase

To develop locally, you can use the `supabase` CLI to start a local instance of the Supabase database. To do this, run the following command:

```shell
# Initialize the local database
$ make supabase-init

# Start the instance in Docker
$ make supabase-start
```

This will create a local instance of the Supabase database in Docker.

To create migrations please see this [documentation](https://supabase.com/docs/guides/cli/local-development#database-migrations)
