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

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const file = formData.get("file") as File

  if (!file) {
    return NextResponse.json({
      status: 400,
      statusText: "No file field in the form data"
    })
  }

  return NextResponse.json({
    fileName: file.name
  })
}
