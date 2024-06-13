"use client"

import { memo } from "react"
import Script from "next/script"

const ContactUs = () => (
  <>
    <Script
      src="//js-eu1.hsforms.net/forms/embed/v2.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            region: "eu1",
            portalId: "144708812",
            formId: "db977c8a-83e9-4eba-b405-a36595100d82",
          });
        }
      }}
    />
  </>
);

export default memo(ContactUs)
