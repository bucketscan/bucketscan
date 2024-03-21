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
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
