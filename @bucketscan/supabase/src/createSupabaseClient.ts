import { createClient } from "@supabase/supabase-js"
import { Database } from "./types"

export type ClientConfig = {
  supabaseUrl: string
  supabaseAnonKey: string
}

export const createSupabaseClient = ({ supabaseUrl, supabaseAnonKey }: ClientConfig) =>
  createClient<Database>(supabaseUrl, supabaseAnonKey)
