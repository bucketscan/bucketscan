import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3"
import { NextConfig } from "next"
import { NextRequest, NextResponse } from "next/server"

export const config: NextConfig = {
  api: {
    bodyParser: false
  }
}

// TODO: We should be accepting an API Key, which will be used
// to authenticate the caller, but also to lookup their account Id.
// For now, this is just hardcoded to test the mechanism, until
// the account setup is complete.
const ACCOUNT_ID = "slade-local-test"

// TODO: Determine if we can bin off the access keys approach.
// See: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_non-aws.html
const client = new S3Client({
  region: process.env.AWS_REGION ?? "",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? ""
  }
})

const uploadFile = async (file: File): Promise<boolean> => {

  // TODO: Consider using the Upload command from the @aws-sdk/lib-storage package
  // to stream the file upload directly into S3.
  // See: https://stackoverflow.com/a/70159394/308012
  const objectKey = `files/${ACCOUNT_ID}/${file.name}`
  const response = await client.send(new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME ?? "",
    Key: objectKey,
    Body: (await file.arrayBuffer()) as Buffer
  }))

  return response.$metadata.httpStatusCode === 200
}

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const file = formData.get("file") as File

  if (!file) {
    return NextResponse.json({
      status: 400,
      statusText: "No file field in the form data"
    })
  }

  // TODO: Insert entry into scan table to track the pending operation.

  if (!await uploadFile(file)) {
    return NextResponse.json({
      status: 500,
      statusText: "Upload failed"
    })
  }

  return NextResponse.json({
    status: 200,
    statusText: `Successfully uploaded ${file.name}!`
  })
}
