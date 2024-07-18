import { createSupabaseClient } from "@/utils/supabaseClient"
import { Result } from "../../Result"

const supabase = createSupabaseClient()

export type ScanId = string

export default async (accountId: string, objectKey: string): Promise<Result<ScanId>> => {
  const { data, error } = await supabase
    .from('scans')
    .insert({
      accountid: accountId,
      filereference: objectKey,
      result: "pending"
    })
    .single();

  if (error) {
    return new Error(error.message)
  }

  return data.id
}
