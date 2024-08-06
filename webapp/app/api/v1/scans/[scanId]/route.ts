import { NextRequest, NextResponse } from "next/server"
import { isError } from "@bucketscan/utils"
import { ScanResult } from "@bucketscan/supabase"
import {
  badRequest,
  HttpResponse,
  internalServerError,
  notFound,
  ok
} from "@/app/api/responses"
import getAccountId from "@/app/api/getAccountId"
import { supabaseClient } from "@/app/api/supabaseClient"

type GetScanByIdRequest = {
  params: {
    scanId: string;
  };
};

type GetScanByIdResult = {
  scanId: string;
  result: ScanResult;
};

export async function GET(
  request: NextRequest,
  { params }: GetScanByIdRequest
): Promise<NextResponse<HttpResponse | GetScanByIdResult>> {
  const accountId = getAccountId(request);
  if (isError(accountId)) {
    return badRequest(accountId.message);
  }

  const { scanId } = params;
  if (!scanId) {
    return badRequest("Missing scanId from URL");
  }

  const { data, error } = await supabaseClient
    .from("scans")
    .select()
    .eq("id", scanId)
    .single();

  if (error) {
    console.error(JSON.stringify(error));
    return internalServerError(error.message);
  }

  if (!data) {
    return notFound(`No scan record was found with Id ${scanId}`);
  }

  return ok("OK", {
    scanId,
    scanResult: data.result,
  });
}
