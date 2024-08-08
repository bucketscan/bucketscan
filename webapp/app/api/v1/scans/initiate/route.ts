import { NextRequest, NextResponse } from "next/server";
import { isError, HttpResponse } from "@bucketscan/utils";
import { badRequest, internalServerError, ok } from "@/app/api/responses";
import trackPendingScan from "./trackPendingScan";
import uploadFile from "./uploadFile";
import getAccountId from "@/app/api/getAccountId";
import generateFileReference from "./generateFileReference";

type InitiateScanResult = {
  scanId: string;
  status: number;
  statusText: string;
};

export async function POST(
  request: NextRequest
): Promise<NextResponse<HttpResponse | InitiateScanResult>> {
  let accountId;
  try {
    accountId = await getAccountId(request);
  } catch (err) {
    if (isError(err)) {
      return badRequest(err.message);
    }
  }

  if (!accountId) return badRequest("Invalid API key");

  const formData = await request.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return badRequest("No file field in the form data");
  }

  const fileReference = generateFileReference(accountId, file.name);
  const trackPendingScanResult = await trackPendingScan(
    accountId,
    fileReference
  );
  if (isError(trackPendingScanResult)) {
    return internalServerError(
      "Failed to start the scan: " + trackPendingScanResult.message
    );
  }

  const uploadFileResult = await uploadFile(file, fileReference);
  if (isError(uploadFileResult)) {
    return internalServerError("Upload failed: " + uploadFileResult.message);
  }

  return ok(`Successfully uploaded ${file.name}!`, {
    scanId: trackPendingScanResult,
  });
}
