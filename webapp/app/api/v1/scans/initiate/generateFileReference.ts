const MAX_REFERENCE_LENGTH = 256

export default (accountId: string, fileName: string): string => {
  const datePart = new Date().toISOString()
  const extension = fileName.split(".").pop() ?? ""

  // -1 to remove the . as well
  const fileNameWithoutExtension = fileName.substring(0, fileName.length - extension.length - 1)
  const referenceWithoutExtension = `files/${accountId}/${fileNameWithoutExtension}`

  // -2 to include the file extension . and the - separator
  const truncatedReference = referenceWithoutExtension
    .substring(0, MAX_REFERENCE_LENGTH - datePart.length - extension.length - 2)

  return `${truncatedReference}-${datePart}.${extension}`
}
