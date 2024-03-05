import { Bucket, Function, StackContext } from "sst/constructs";

export function VirusDatabase({ stack }: StackContext) {
  new Bucket(stack, "VirusDatabaseBucket", {
    blockPublicACLs: true,
    cors: false
  })

  new Function(stack, "UpdateVirusDatabase", {
    handler: "packages/functions/update-virus-database/src/index.default"
  })
}
