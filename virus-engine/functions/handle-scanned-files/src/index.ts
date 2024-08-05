import { isError } from "@bucketscan/utils"
import deleteFile from "./deleteFile"
import updateScanResult from "./updateScanResult"

/**
 * Sample payload:
 *
 *
 *  {
 *    "version": "0",
 *    "id": "af93f050-ee86-3db9-a262-4f8aefc49cec",
 *    "detail-type": "GuardDuty Malware Protection Object Scan Result",
 *    "source": "aws.guardduty",
 *    "account": "622473043539",
 *    "time": "2024-07-19T05:10:28Z",
 *    "region": "eu-west-2",
 *    "resources": [
 *      "arn:aws:guardduty:eu-west-2:622473043539:malware-protection-plan/d0c83069652b41501198"
 *    ],
 *    "detail": {
 *      "schemaVersion": "1.0",
 *      "scanStatus": "COMPLETED",
 *      "resourceType": "S3_OBJECT",
 *      "s3ObjectDetails": {
 *        "bucketName": "bucketscan-scan-files",
 *        "objectKey": "files/8e0d7c9c-6cbb-4f1a-a42e-74a4d9f63220/dummy-file.-2024-07-19T05:10:26.392Z.txt",
 *        "eTag": "37ec9b74a382221e088f1810af06121a",
 *        "versionId": "nhx8mmhMlzi1NA7ePJ4EHXpJQ.rBK.16"
 *      },
 *      "scanResultDetails": {
 *        "scanResultStatus": "NO_THREATS_FOUND",
 *        "threats": null
 *      }
 *    }
 *  }
 */
type GuardDutyMalwareProtectionObjectScanResultEvent = {
  detail: {
    scanStatus: string
    s3ObjectDetails: {
      bucketName: string
      objectKey: string
    }
    scanResultDetails: {
      scanResultStatus: string
      threats: any
    }
  }
}

export default async function (
  event: GuardDutyMalwareProtectionObjectScanResultEvent
) {
  console.log(event)

  const { bucketName, objectKey } = event.detail.s3ObjectDetails
  const { scanResultStatus } = event.detail.scanResultDetails

  const updateScanResultResult = await updateScanResult(objectKey, scanResultStatus)
  if (isError(updateScanResultResult)) {
    console.error(JSON.stringify(updateScanResultResult))

    throw updateScanResultResult
  }

  const deleteFileResult = await deleteFile(bucketName, objectKey)
  if (isError(deleteFileResult)) {
    console.error(JSON.stringify(deleteFileResult))

    throw deleteFileResult
  }
}
