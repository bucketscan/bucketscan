import { NextRequest, NextResponse } from "next/server";
import {
  badRequest,
  HttpResponse,
  internalServerError,
  notFound,
  ok,
} from "@/app/api/responses";
import getAccountId from "@/app/api/getAccountId";
import { isError } from "@/app/api/Result";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

type ScanResult = "pending" | "complete_clean" | "complete_infected" | "failed";

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
  { params }: GetScanByIdRequest,
): Promise<NextResponse<HttpResponse | GetScanByIdResult>> {
  const accountId = getAccountId(request);
  if (isError(accountId)) {
    return badRequest(accountId.message);
  }

  const { scanId } = params;
  if (!scanId) {
    return badRequest("Missing scanId from URL");
  }

  const { data, error } = await supabase
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
