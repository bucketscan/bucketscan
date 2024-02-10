import { Bucket, StackContext } from "sst/constructs";

export function VirusDatabase({ stack }: StackContext) {
  new Bucket(stack, "VirusDatabaseBucket", {
    blockPublicACLs: true,
    cors: false
  })
}
