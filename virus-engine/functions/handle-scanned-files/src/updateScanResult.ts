import { createSupabaseClient, ScanResult } from "@bucketscan/supabase"
import { Result } from "@bucketscan/utils"

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

const client = createSupabaseClient({
  supabaseUrl: "TODO: Get from param store",
  supabaseAnonKey: "TODO: Get from param store"
})

export default async (scanId: string, scanResult: string): Promise<Result<void>> => {
  const actualScanResult = convertScanResult(scanResult)

  const { error } = await client
    .from('scans')
    .update({
      result: actualScanResult
    })
    .eq("id", scanId)
    .single()

  if (error) {
    console.error(JSON.stringify(error))
    return new Error(error.message)
  }
}
