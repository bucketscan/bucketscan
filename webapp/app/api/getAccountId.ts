import { NextRequest } from "next/server";
import { Result } from "@bucketscan/utils";
import { badRequest } from "./responses";
import { createClient } from "@/utils/supabase/server";

export default async (request: NextRequest): Promise<string> => {
  const apiKey = request.headers.get("X-Api-Key");

  if (!apiKey) {
    throw new Error("X-Api-Key header not set");
  }

  const supabase = createClient();

  const { data, error: queryError } = await supabase.rpc(
    "get_account_by_api_key",
    { api_key: apiKey }
  );

  if (queryError) {
    console.error("Error querying account by API key:", queryError);
    throw new Error("Invalid API key");
  }

  if (!data) {
    throw new Error("Invalid API key");
  }

  return data;
};
