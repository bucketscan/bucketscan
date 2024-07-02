"use server";

import { memo, ReactNode } from "react";
import {
  ShieldCheckIcon,
  CodeBracketIcon,
  BellAlertIcon,
} from "@heroicons/react/24/outline";
import Section from "@/components/pages/home/Section";

const Feature = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) => (
  <div key={title}>
    <dt className="flex items-center justify-center align-middle text-base font-semibold leading-7 text-white">
      <div className="inline-block rounded-md bg-indigo-600 p-2 ring-1 ring-white">
        {icon}
      </div>
      <span className="pl-2">{title}</span>
    </dt>
    <dd className="mt-2 text-base leading-7 text-gray-300">{description}</dd>
  </div>
);

const Features = () => (
  <Section id="expanded-features">
    <div className="mx-auto max-w-4xl">
      <header className="text-center">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full bg-indigo-500/15 px-3 py-1 text-sm leading-6 text-indigo-200 ring-1 ring-indigo-600/25 transition-all hover:ring-indigo-600/50">
            Secure your business
          </div>
        </div>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Integrate with our simple cloud-based antivirus solution
        </h2>
        <h3 className="mt-6 text-lg leading-8 text-gray-300">
          We have all the features (and more) you need to secure your platform.
        </h3>
      </header>
      <div className="mx-auto mt-16">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
          <Feature
            title="Accept Customer content with no risk"
            description="User content uploads always carry risk. Bucketscan removes that by providing instant anti-virus scanning on a schedule that suits you. Our virus databases are always up to date and powered by ClamAV."
            icon={
              <ShieldCheckIcon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            }
          />
          <Feature
            title="Integrate in just 20 minutes"
            description="Start scanning multiple buckets, across multiple accounts on multiple cloud providers. You can integrate with as many as you like on any plan. Then have all the data show up in our powerful platform."
            icon={
              <CodeBracketIcon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            }
          />
          <Feature
            title="Notifications where your team works"
            description="Empower your security team to be notified on new scans and threats.Provide rich reports to your data analytics team.You can configure how and when your team is notified to suit your needs."
            icon={
              <BellAlertIcon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            }
          />
        </dl>
      </div>
    </div>
  </Section>
);

export default memo(Features);
