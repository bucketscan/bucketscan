import { NextRequest } from "next/server"
import { badRequest, internalServerError, ok } from "@/app/api/responses"
import trackPendingScan from "./trackPendingScan"
import uploadFile from "./uploadFile"
import getAccountId from "./getAccountId"
import { isError } from "@/app/api/Result"
import generateFileReference from "./generateFileReference"

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

  const fileReference = generateFileReference(accountId, file.name)
  const trackPendingScanResult = await trackPendingScan(accountId, fileReference)
  if (isError(trackPendingScanResult)) {
    return internalServerError("Failed to start the scan: " + trackPendingScanResult.message)
  }

  const uploadFileResult = await uploadFile(file, fileReference)
  if (isError(uploadFileResult)) {
    return internalServerError("Upload failed: " + uploadFileResult.message)
  }

  return ok(`Successfully uploaded ${file.name}!`, {
    scanId: trackPendingScanResult
  })
}
