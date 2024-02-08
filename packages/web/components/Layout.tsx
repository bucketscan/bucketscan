"use client";
import Navbar from './Navbar';
import { ReactNode } from 'react';
import { Metadata } from 'next'

export const meta: Metadata = {
  title: 'BucketScan - Malware Detection and Prevention for S3 Buckets',
  description:
    'BucketScan is a malware detection and prevention tool for S3 buckets. It scans your S3 buckets for malware and helps you prevent malware from being uploaded to your S3 buckets.',
};

export default function Layout({children}: {children: ReactNode}) {
  return (
    <>
      <Navbar />
      <main id="skip">{children}</main>
    </>
  );
}
