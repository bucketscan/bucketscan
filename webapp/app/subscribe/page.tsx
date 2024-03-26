import { memo } from "react"
import { createSupabaseClient } from "@/utils/supabaseClient"

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
}

type SearchParams = {
  [key: string]: string | string[] | undefined
}

type Props = {
  searchParams: SearchParams
}

const Page = async ({ searchParams }: Props) => {
  const email = searchParams.email as string || ""

  // TODO: Handle invalid email?

  if (!await doesEntryExistAlready(email)) {
    await createNewEntry(email)
  }

  return (
    <section className="z-[100] mx-auto bg-gray-900 mt-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold text-white">
            Thank you for joining our mailing list!
          </h2>
        </div>
      </div>
    </section>
  )
}

export default memo(Page)
