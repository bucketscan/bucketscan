import { createSupabaseClient } from "@/utils/supabaseClient"
import { Result } from "../../Result"

const supabase = createSupabaseClient()

export type ScanId = string

export default async (accountId: string, objectKey: string): Promise<Result<ScanId>> => {
  const { data, error } = await supabase
    .from('scans')
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
