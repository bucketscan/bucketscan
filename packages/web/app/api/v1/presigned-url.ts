import { createSupabaseClient } from "@/utils/supabaseClient";
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'; // AWS SDK
import {
  getSignedUrl
} from "@aws-sdk/s3-request-presigner";
import { NextApiRequest, NextApiResponse } from "next";

// Initialize Supabase client
const supabase = createSupabaseClient()

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Fetch the presigned URL from S3
    const bucket = process.env.SCANNING_BUCKET;
    const accountId = '' // TODO: Get the accountId from the user, hopefully pass through from Middleware.
    const key = `${accountId}/my-file-name`; // TODO: Get the key from the file
    const client = new S3Client({ region: process.env.AWS_REGION || 'eu-west-1' });
    const command = new PutObjectCommand({ Bucket: bucket, Key: key });
    const presignedUrl = await getSignedUrl(client, command, { expiresIn: 3600 });

    const { data: fileData, error: fileError } = await supabase
      .from('files')
      .insert({
        name: key,
        accountid: '', // hopefully we can attach this in the middleware
        filesize: 0,
        status: "clean"
      })
      .single();

    if (fileError) throw fileError;

    // Create the new scan record in Supabase
    const fileId = "TODO: File Id" // TODO: This fails as fileData has "never" type - fileData.id,
    const { error } = await supabase
      .from('scans')
      .insert({
        fileid: fileId,
        accountid: '',
        result: "pending"
      })

    if (error) throw error;

    // Return the scan response
    const scanId = "TODO: Find the scan Id" // TODO: This fails as the data returned is always null
    return res.status(200).json({ presignedUrl, fileId, scanId });
  } catch (error) {
    console.error('Error fetching presigned URL or inserting to Supabase:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
