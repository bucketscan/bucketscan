import { NextRequest } from "next/server"
import { badRequest, internalServerError, ok } from "@/app/api/responses"
import trackPendingScan from "./trackPendingScan"
import uploadFile from "./uploadFile"
import getAccountId from "./getAccountId"
import { isError } from "../../Result"

export async function POST(request: NextRequest) {

  const accountId = getAccountId(request)
  if (isError(accountId)) {
    return badRequest(accountId.message)
  }

  const formData = await request.formData()
  const file = formData.get("file") as File

  if (!file) {
    return badRequest("No file field in the form data")
  }

  const objectKey = `files/${accountId}/${file.name}`
  const trackPendingScanResult = await trackPendingScan(accountId, objectKey)
  if (isError(trackPendingScanResult)) {
    return internalServerError("Failed to start the scan")
  }

  const uploadFileResult = await uploadFile(file, objectKey)
  if (isError(uploadFileResult)) {
    return internalServerError("Upload failed")
  }

  return ok(`Successfully uploaded ${file.name}!`, {
    scanId: trackPendingScanResult
  })
}
