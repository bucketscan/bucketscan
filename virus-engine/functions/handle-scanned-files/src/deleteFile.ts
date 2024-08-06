import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3"
import { isResponseMetadataSuccess, Result } from "@bucketscan/utils"
import { config } from "./config"

const client = new S3Client({
  region: config.region,
  credentials: {
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.secretAccessKey,
    sessionToken: config.sessionToken
  }
})

export default async (bucketName: string, objectKey: string): Promise<Result<void>> => {
  const command = new DeleteObjectCommand({
    Bucket: bucketName,
    Key: objectKey
  })

  console.log("Deleting object...")
  const { $metadata } = await client.send(command)
  if (!isResponseMetadataSuccess($metadata)) {
    return new Error(`Failed to delete object ${objectKey}`)
  }
}
