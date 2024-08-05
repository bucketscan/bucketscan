import { GetParametersCommand, SSMClient } from "@aws-sdk/client-ssm"
import { ClientConfig } from "@bucketscan/supabase"
import { isResponseMetadataSuccess, Result } from "@bucketscan/utils"
import { config } from "./config"

const {
  SUPABASE_URL_PARAMETER_NAME: supabaseUrlParameterName,
  SUPABASE_ANON_KEY_PARAMETER_NAME: supabaseAnonKeyParameterName
} = process.env

if (!supabaseUrlParameterName || !supabaseAnonKeyParameterName) {
  throw new Error("Missing one or both environment variables: SUPABASE_URL_PARAMETER_NAME, SUPABASE_ANON_KEY_PARAMETER_NAME")
}

const { region, accessKeyId, secretAccessKey, sessionToken } = config

const client = new SSMClient({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
    sessionToken
  }
})

export default async (): Promise<Result<ClientConfig>> => {
  console.log("Retrieving client credentials...")

  const {
    $metadata: metadata,
    InvalidParameters: invalidParameters,
    Parameters: parameters
  } = await client.send(new GetParametersCommand({
    Names: [
      supabaseUrlParameterName,
      supabaseAnonKeyParameterName
    ],
    WithDecryption: true
  }))

  if (!isResponseMetadataSuccess(metadata)) {
    if (invalidParameters && invalidParameters.length > 0) {
      const invalidDescription = invalidParameters.join(", ")
      console.error(`Found the following invalid parameters: ${invalidDescription}`)
    }

    return new Error("Failed to retrieve the database credentials")
  }

  const supabaseUrlParameter = parameters?.find(param => param.Name === supabaseUrlParameterName)
  const supabaseAnonKeyParameter = parameters?.find(param => param.Name === supabaseAnonKeyParameterName)

  if (!supabaseUrlParameter || !supabaseAnonKeyParameter
    || !supabaseUrlParameter.Value || !supabaseAnonKeyParameter.Value
  ) {
    console.error(`Found ${parameters?.length ?? 0} parameters, but failed one or more lookups, or values were null`, parameters)
    return new Error("Failed to lookup database credentials")
  }

  return await Promise.resolve({
    supabaseUrl: supabaseUrlParameter.Value,
    supabaseAnonKey: supabaseAnonKeyParameter.Value
  })
}
