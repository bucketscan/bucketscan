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

Note that these commands wrap the use of [Yarn Workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/). This means that all interactions with each "workspace" is now done anywhere in the project. So long as you run `yarn install` initially at the root, that will wire up the use of workspaces. You can then interact with a single workspace using the command `yarn workspace <workspace-name> <command-name>` or all workspaces with something like `yarn workspaces foreach -A <command-name>`.

To see a list of all available workspaces, run `yarn workspaces list`. These workspace commands can be run from anywhere in the repository.

Using Yarn Workspaces enables us to share code between workspaces. For example, we have some shared packages under the [`@bucketscan/`](@bucketscan/) folder. These shared libraries can be referenced from other workspaces simply using their workspace name (see the `name` property within the `package.json` files).

## Cleanup

To clean up all build outputs, run the following command in the terminal:

```shell
$ make teardown
```

TODO: Make a note about migrations with Supabase.
