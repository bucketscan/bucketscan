import { Result } from "@bucketscan/utils"
import { supabaseClient } from "@/app/api/supabaseClient"

export type ScanId = string

export default async (accountId: string, objectKey: string): Promise<Result<ScanId>> => {
  const { data, error } = await supabaseClient
    .from("scans")
    .insert({
      account_id: accountId,
      file_reference: objectKey,
      result: "pending"
    })
    .select()
    .single()

  if (error) {
    return new Error(error.message)
  }

  return data.id
}
