import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3"

// TODO: Determine if we can bin off the access keys approach.
// See: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_non-aws.html
const client = new S3Client({
  region: process.env.AWS_REGION ?? "",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? ""
  }
})

export default async (file: File, objectKey: string): Promise<boolean> => {

  // TODO: Consider using the Upload command from the @aws-sdk/lib-storage package
  // to stream the file upload directly into S3.
  // See: https://stackoverflow.com/a/70159394/308012
  const response = await client.send(new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME ?? "",
    Key: objectKey,
    Body: (await file.arrayBuffer()) as Buffer
  }))

  if (response.$metadata.httpStatusCode !== 200) {
    console.error(`Uploading to S3 returned error code ${response.$metadata.httpStatusCode}`)

    return false
  }

  return true
}
