import { NextRequest } from "next/server"
import { Result } from "@bucketscan/utils"

// TODO: We should be accepting an API Key, which will be used
// to authenticate the caller, but also to lookup their account Id.
// For now, this is just hardcoded to test the mechanism, until
// the account setup is complete.
const ACCOUNT_ID = "af07c9e7-b7d5-407e-a46d-40be2022e18f"

export default (request: NextRequest): Result<string> => {
  const apiKey = request.headers.get("X-Api-Key")

  if (!apiKey) {
    // TODO: Handle this scenario more gracefully.
    return new Error("X-Api-Key header not set")
  }

  // TODO: Validate the API Key and look up the account Id.

  return ACCOUNT_ID
}
