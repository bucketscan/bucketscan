"use client"

import { memo, useState } from "react"

const validEmailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

const isValidEmail = (email: string): boolean =>
  !!email && validEmailRegex.test(email)

const SubmissionSuccessful = () => (
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

const GetEarlyAccess = () => {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const submit = async () => {
    setLoading(true)

    await fetch("/api/v1/subscribe?" + new URLSearchParams({
      email
    }))

    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return <SubmissionSuccessful />
  }

  return (
    <div className="mt-10 flex items-center justify-center gap-x-6">
      <form
        onSubmit={e => {
          e.preventDefault()
          submit()
        }}
      >
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="flex-auto rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 transition-all focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={loading}
        />

        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={e => {
            e.preventDefault()
            submit()
          }}
          disabled={loading || !isValidEmail(email)}
        >
          Get Early Access
        </button>
      </form>
    </div>
  )
}

export default memo(GetEarlyAccess)
