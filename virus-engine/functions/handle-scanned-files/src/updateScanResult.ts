import { createSupabaseClient, ScanResult } from "@bucketscan/supabase"
import { isError, Result } from "@bucketscan/utils"
import getClientConfig from "./getClientConfig"

// Possible values taken from docs
// See: https://docs.aws.amazon.com/guardduty/latest/ug/how-malware-protection-for-s3-gdu-works.html#enable-optional-tagging-malware-protection-s3
const scanResultMap: { [key: string]: ScanResult } = {
  "NO_THREATS_FOUND": "complete_clean",
  "THREATS_FOUND": "complete_infected",

  // TODO: Expand failure types to cover the different scenarios.
  "UNSUPPORTED": "failed",
  "ACCESS_DENIED": "failed",
  "FAILED": "failed"
}

const convertScanResult = (scanResult: string): ScanResult => {
  const result = scanResultMap[scanResult]

  console.log(`Received scan result of ${scanResult}. Converted to ${result}`)

  return result
}

export default async (reference: string, scanResult: string): Promise<Result<void>> => {
  const actualScanResult = convertScanResult(scanResult)

  const config = await getClientConfig()
  if (isError(config)) {
    console.error(JSON.stringify(config))
    return config
  }

  console.log("Creating Supabase client...")
  const client = createSupabaseClient(config)

  console.log(`Updating scan result with reference ${reference}...`)
  const { error } = await client
    .from("scans")
    .update({
      result: actualScanResult
    })
    .eq("file_reference", reference)

  if (error) {
    console.error(JSON.stringify(error))
    return new Error(error.message)
  }
}
