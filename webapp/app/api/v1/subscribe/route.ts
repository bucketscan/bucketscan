import { createSupabaseClient } from "@/utils/supabaseClient"
import { NextRequest, NextResponse } from "next/server"

const ok = (): Response => new Response()
const notOk = (): Response => new Response()

const supabase = createSupabaseClient()

const doesEntryExistAlready = async (email: string): Promise<boolean> => {
  const { data: existingEntry } = await supabase.from("mailinglist")
    .select()
    .filter("email", "eq", email)
    .single()

  return !!existingEntry
}

const createNewEntry = async (email: string): Promise<void> => {
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
}

export async function GET(request: NextRequest, _: NextResponse): Promise<Response> {
  const email = request.nextUrl.searchParams.get("email")
  console.log("New email submitted for mailing list", email)

  if (!email) {
    console.error("No email value provided")

    return notOk()
  }

  if (!await doesEntryExistAlready(email)) {
    await createNewEntry(email)
  }

  return ok()
}
