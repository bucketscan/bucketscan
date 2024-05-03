import "../styles/globals.css";
import Layout from "@/components/Layout";
import { Providers } from "./providers";
import type { Metadata } from "next";

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
        <script defer src="https://analytics.eu.umami.is/script.js" data-website-id="2a210cba-0a3f-4d08-851e-51cfd9a47fb3"></script>
      </head>
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
