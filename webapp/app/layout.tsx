import "../styles/globals.css";
import Layout from "@/components/Layout";
import { Providers } from "./providers";
import type { Metadata } from "next";
import Script from "next/script";

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
        <Script
          id="umami"
          strategy="afterInteractive"
          src="https://analytics.eu.umami.is/script.js"
          data-website-id="2a210cba-0a3f-4d08-851e-51cfd9a47fb3"
        ></Script>
      </head>
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
        <Script id="crisp-chat" strategy="afterInteractive">
          {`window.$crisp=[];window.CRISP_WEBSITE_ID="aeec63d4-3cb6-4e20-b0a4-76cfabe7a4f6";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`}
        </Script>
      </body>
    </html>
  );
}
