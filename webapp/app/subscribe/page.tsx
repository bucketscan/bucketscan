import { memo } from "react"
import { createSupabaseClient } from "@/utils/supabaseClient"

const validEmailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

const isValidEmail = (email: string): boolean =>
  !!email && validEmailRegex.test(email)

const supabase = createSupabaseClient()

const doesEntryExistAlready = async (email: string): Promise<boolean> => {
  const { data: existingEntry } = await supabase.from("mailinglist")
    .select()
    .filter("email", "eq", email)
    .single()

  return !!existingEntry
}

const createNewEntry = async (email: string): Promise<boolean> => {
  const { error, status } = await supabase.from("mailinglist")
    .insert({
      email
    })
    .single()

  if (error) {
    console.error(error)

    return false
  }

  if (status < 200 || status > 299) {
    console.error("Failed to insert the email with status code", status)

    return false
  }

  return true
}

type SearchParams = {
  [key: string]: string | string[] | undefined
}

type Props = {
  searchParams: SearchParams
}

const Page = async ({ searchParams }: Props) => {
  const email = searchParams.email as string || ""

  if (!isValidEmail(email)) {
    return <p>Email is invalid!</p>
  }

  if (!await doesEntryExistAlready(email)) {
    if (!await createNewEntry(email)) {
      return <p>Sorry, something went wrong!</p>
    }
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
