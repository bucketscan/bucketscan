import { ResponseMetadata } from "@smithy/types";

export const isResponseMetadataSuccess = (metadata: ResponseMetadata): boolean =>
  metadata.httpStatusCode >= 200 && metadata.httpStatusCode < 300
