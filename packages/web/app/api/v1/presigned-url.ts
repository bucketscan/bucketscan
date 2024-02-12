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
    const accountId = ''
    const key = `${accountId}/my-file-name`; // TODO: Get the key from the file
    const client = new S3Client({ region: process.env.AWS_REGION || 'eu-west-1' });
    const command = new PutObjectCommand({ Bucket: bucket, Key: key });
    const presignedUrl = await getSignedUrl(client, command, { expiresIn: 3600 });

    const { data: fileData, error: fileError } = await supabase
      .from('files')
      .insert([{
        name: key,
        accountId: '', // hopefully we can attach this in the middleware
      }])
      .single();

    if (fileError) throw fileError;

    // Create the new scan record in Supabase
    const { data, error } = await supabase
      .from('scans')
      .insert([
        {
          fileId: fileData.id,
          accountId: '',
        }
      ]);

    if (error) throw error;

    // Return the scan response
    return res.status(200).json({ presignedUrl, fileId: fileData.id, scanId: data.scanId });
  } catch (error) {
    console.error('Error fetching presigned URL or inserting to Supabase:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
