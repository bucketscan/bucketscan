const MAX_REFERENCE_LENGTH = 256

export default (accountId: string, fileName: string): string => {
  const datePart = new Date().toISOString()
  const extension = fileName.split(".").pop() ?? ""
  const fileNameWithoutExtension = fileName.substring(0, fileName.length - extension.length)

  const referenceWithoutExtension = `files/${accountId}/${fileNameWithoutExtension}`
  const truncatedReference = referenceWithoutExtension
    .substring(0, MAX_REFERENCE_LENGTH - datePart.length - extension.length - 2)

  return `${truncatedReference}-${datePart}.${extension}`
}
