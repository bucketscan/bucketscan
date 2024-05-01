import { memo } from "react"

const GetEarlyAccess = () => (
  <form
    className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6"
    action="/subscribe"
    method="get"
  >
    <input
      id="email-address"
      className="flex-auto w-full rounded-md border-0 md:px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 transition-all focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
      name="email"
      type="email"
      autoComplete="email"
      required
      placeholder="Enter your email"
    />

    <button
      type="submit"
      className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 mt-5 sm:mt-0 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Get Early Access
    </button>
  </form>
)

export default memo(GetEarlyAccess)
