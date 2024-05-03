import { Database } from "@/types/supabase";
import { createClient } from "@supabase/supabase-js";

export async function GET(
  req: Request,
  { params }: { params: { scanId: string } },
) {
  const { headers } = req;

  // Check the API key isn't empty
  const apiKey = headers.get("x-api-key");
  if (!apiKey)
    return Response.json({ error: "Missing API key" }, { status: 401 });

  const { NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY } =
    process.env;
  if (!NEXT_PUBLIC_SUPABASE_URL || !NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return Response.json(
      { error: "Error when processing request" },
      { status: 500 },
    );
  }

  // Check the API key
  const supabase = createClient<Database>(
    NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );

  const { data: account } = await supabase
    .from("basejump.accounts")
    .select("*")
    .eq("api_key", headers.get("x-api-key"));

  if (!account || account.length === 0) {
    return Response.json({ error: "Invalid API key" }, { status: 401 });
  }

  // Fetch the scan based on the information associated with the API key and the scan ID
  const { data: scan } = await supabase
    .from("scans")
    .select("*")
    // @ts-expect-error
    .eq("accountId", account.id)
    .eq("id", params.scanId)
    .limit(1)
    .single();

  if (!scan) {
    return Response.json({ error: "Scan was not found" }, { status: 404 });
  }

  return Response.json({
    scanId: scan.id,
    status: scan.status,
    metadata: {
      fileId: "",
      result: "",
      details: "",
    },
  });
}
