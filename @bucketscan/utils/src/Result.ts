export type Result<T> = Error | T

export const isError = <T>(result: Result<T>): result is Error => {
  const error = result as Error

  return !!error && !!error.stack && !!error.message
}
