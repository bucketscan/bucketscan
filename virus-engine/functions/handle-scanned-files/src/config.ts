const getConfigValue = (environmentVariableName: string): string => {
  const value = process.env[environmentVariableName]
  if (!value) {
    throw new Error(`Missing environment variable ${environmentVariableName}`)
  }

  return value
}

type Config = {
  region: string
  accessKeyId: string
  secretAccessKey: string
  sessionToken: string
}

export const config: Config = {
  region: getConfigValue("AWS_REGION"),
  accessKeyId: getConfigValue("AWS_ACCESS_KEY_ID"),
  secretAccessKey: getConfigValue("AWS_SECRET_ACCESS_KEY"),
  sessionToken: getConfigValue("AWS_SESSION_TOKEN")
}
