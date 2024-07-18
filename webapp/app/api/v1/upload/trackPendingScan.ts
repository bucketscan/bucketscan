import { createSupabaseClient } from "@/utils/supabaseClient"
import { v4 as uuid } from "uuid"
import { Result } from "../../Result"

const supabase = createSupabaseClient()

export type ScanId = string

export default async (accountId: string, objectKey: string): Promise<Result<ScanId>> => {
  const scanId = uuid()

  const { error } = await supabase
    .from('scans')
    .insert({
      id: scanId,
      accountId: accountId,
      fileReference: objectKey,
      status: "pending"
    })
    .single();

  if (error) {
    return new Error(error.message)
  }

  return scanId
}
