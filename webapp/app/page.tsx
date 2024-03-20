import { Features } from "@/components/Features";
import GreenCheck from "@/components/GreenCheck";
import LogoCloud from "@/components/LogoCloud";
import Newsletter from "@/components/Newsletter";
import { Link } from "@nextui-org/react";

const content = {
  cloudproviders: [
    {
      name: "Amazon S3",
      logo: "/images/icons/aws-s3.png",
      link: "/virus-scanning-for-s3",
    },
    {
      name: "Azure Blob Storage",
      logo: "/images/icons/azure-blob.png",
      link: "/virus-scanning-for-azure",
    },
    {
      name: "Google Cloud Storage",
      logo: "/images/icons/google-cloud-storage.png",
      link: "/virus-scanning-for-google-cloud-storage",
    },
    {
      name: "Cloudflare R2",
      logo: "/images/icons/cloudflare.png",
      link: "/virus-scanning-for-cloudflare-r2",
    },
  ],
  features: {
    scanInformation: {
      title: "Accept Customer content with no risk",
      subtitle:
        "User content uploads always carry risk. Bucketscan removes that by providing instant anti-virus scanning on a schedule that suits you. Our virus databases are always up to date and powered by ClamAV.",
      links: [
        {
          name: "Real-Time Scan",
          link: "",
        },
        {
          name: "On-Demand Scan",
          link: "",
        },
        {
          name: "Scheduled Scan",
          link: "",
        },
        {
          name: "On Access Scan",
          link: "",
        },
        {
          name: "ClamAV Anti Virus Engine",
          link: "",
        },
      ],
    },
    integrationInfo: {
      title: "Integrate in just 20 minutes",
      subtitle:
        "Start scanning multiple buckets, across multiple accounts on multiple cloud providers. You can integrate with as many as you like on any plan. Then have all the data show up in our powerful platform.",
      links: [
        {
          name: "Multiple Clouds (AWS, Azure, GCP, Cloudflare)",
          link: "",
        },
        {
          name: "Multiple Account",
          link: "",
        },
        {
          name: "Multiple Buckets",
          link: "",
        },
        {
          name: "Powerful Reporting",
          link: "",
        },
        {
          name: "Custom Integration",
          link: "",
        },
      ],
    },
    dataInfo: {
      title: "Notifications where you team works",
      subtitle:
        "Empower your security team to be notified on new scans and threats.Provide rich reports to your data analytics team.You can configure how and when your team is notified to suit your needs.",
      links: [
        {
          name: "Slack Integration",
          link: "",
        },
        {
          name: "Teams Integration",
          link: "",
        },
        {
          name: "Data Warehouse Integration",
          link: "",
        },
        {
          name: "Powerful Reporting",
          link: "",
        },
        {
          name: "Custom Integration",
          link: "",
        },
      ],
    },
  },
};

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <div className="-z-[100] bg-gray-900">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full bg-indigo-500/15 px-3 py-1 text-sm leading-6 text-indigo-200 ring-1 ring-indigo-600/25 transition-all hover:ring-indigo-600/50">
                We need your help to shape our product{" "}
                <a
                  href="https://forms.gle/nCLxarU95hm2cqGd8"
                  target="_blank"
                  className="font-semibold text-indigo-500"
                >
                  <span className="absolute inset-0" aria-hidden="true"></span>
                  Fill out the customer feedback form
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Antivirus Protection for Your Cloud Storage
              </h1>
              <p className="mt-6 text-lg leading-8 text-white">
                Automatically scan for viruses and ensure compliance across all
                user uploads with our seamless, integrated solution.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="flex-auto rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 transition-all focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get Early Access
                </a>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-[100] transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] -z-[100] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Pain points */}
      <section className="z-[100] mx-auto bg-gray-900">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-semibold text-white">
              Constant Security Threats Slowing You Down?
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="rounded-md bg-white px-6 py-8">
              <h3 className="mb-4 text-center text-2xl font-medium">
                Is this you?
              </h3>
              <p className="leading-relaxed">
                You're spending countless hours every week reviewing and
                managing security measures to protect against malware in user
                uploads. Despite your best efforts, the threat of a breach is
                never far away, and the manual processes are cumbersome,
                error-prone, and inefficient.
              </p>
            </div>
            <div className="rounded-md bg-white px-6 py-8">
              <h3 className="mb-4 text-center text-2xl font-medium">
                Facing Compliance Headaches?
              </h3>
              <p className="leading-relaxed">
                Navigating the maze of compliance regulations is a nightmare.
                GDPR, HIPAA, SOC-2 – the list goes on. Every upload could be a
                potential compliance violation, leading to hefty fines and a
                tarnished brand reputation. You're caught in a constant battle
                to stay ahead, yet always feel one step behind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews / Testimonials */}

      {/* Thin CTA */}

      {/* Expanded features section - link off to individual pages like bucketav.com */}
      <section id="expanded-features">
        <Features />
      </section>

      {/* Get the fact sheet section - enter email, and get sent a product fact sheet + newsletter sign up */}
      <section id="contact">
        <Newsletter />
      </section>
    </>
  );
}
