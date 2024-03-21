[![Deploy](https://github.com/bucketscan/bucketscan/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/bucketscan/bucketscan/actions/workflows/deploy.yml)

# BucketScan

An API-driven, SaaS-based platform for running virus scans on files.

## Prerequisites

The following tools are required to build and run this project.

1. [Node.js](https://nodejs.org/en/download)
1. An IDE such as [VSCode](https://code.visualstudio.com/download)
1. [AWS CLI v2](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
1. [Terraform](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli)
1. [Terragrunt](https://terragrunt.gruntwork.io/docs/getting-started/install/)
1. [Docker](https://docs.docker.com/desktop)

## Build and run the project

Run the following command from the terminal to build and run the project.

```shell
# This runs the initialization step and builds the code
$ make setup

# Now you can run locally using the following
$ make start
```

## Cleanup

To clean up all build outputs, run the following command in the terminal:

```shell
$ make teardown
```

## Working with Supabase

<!-- TODO: This step needs updating. We also need to consider how we are going to handle migrations. -->

To create a new migration run

```shell
$ cd packages/web # change into the web package
$ npx supabase migration new <NAME>
```

Afterward, create your migration in a transaction. When happy, you can apply it to the local DB with `npx supabase migration up`. Finally, when you're ready to push that change to prod, run `npx supabase db push`.

To create migrations please see this [documentation](https://supabase.com/docs/guides/cli/local-development#database-migrations)

## Concepts

### Hierarchy
There is a heirarchy of various concepts that have implications on the business logic of the system.

1. Teams - created automatically on login. Controls billing and access to the account.
2. API keys - Teams can have multiple API keys. These are used to authenticate with the system. They can have names and be rotated.
2. Users - created automatically on login. Can be invited to join a team and can be part of multiple teams.
3. Files - the files that are uploaded to the system. Automatically triggers at least 1 scan.
4. Scans - files can have multiple scans. Each scan has a status and a result.

Other notes: We will likely want the concept of a sandbox environment. This is where customers can integrate and we will just pass the file through the system, or deliberately fail it. In this way, API keys are assigned a livemode, true or false to determine this fact.

**Initially however, we will just focus on creating users (who will be automatically assigned a team in the background).**
