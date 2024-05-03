import "../styles/globals.css";
import Layout from "@/components/Layout";
import { Providers } from "./providers";
import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";

export const metadata: Metadata = {
  title: "Bucketscan",
  description: "...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider
          enabled={process.env.NEXT_PUBLIC_APP_ENV === "production"}
          domain="bucketscan.com"
          trackOutboundLinks
          scriptProps={{
            src: "https://analytics.bucketscan.com/js",
            "data-api": "/api/event",
          }}
        />
      </head>
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
