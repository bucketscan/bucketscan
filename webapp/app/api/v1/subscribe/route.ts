import { createSupabaseClient } from "@/utils/supabaseClient"
import { NextRequest, NextResponse } from "next/server"

const supabase = createSupabaseClient()

export async function GET(request: NextRequest, _: NextResponse): Promise<Response> {
  const email = request.nextUrl.searchParams.get("email")
  console.log("New email submitted for mailing list", email)

  // TODO: Lookup the email first so we're not trying to insert it twice.
  const { error, count, status } = await supabase.from("mailinglist")
    .insert({
      email
    })
    .single()

  if (error) {
    console.error(error)
    // TODO: How do we return the error?
  }

  if (status < 200 || status > 299) {
    console.warn("Failed to insert the email with status code", status)
  }

  if (count !== 1) {
    console.warn("Inserted the wrong number of records", count)
  }

  return new Response()
}
