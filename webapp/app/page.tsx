import GreenCheck from "@/components/GreenCheck";
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
      <section className="mx-auto mt-10 max-w-7xl px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 md:text-5xl">
            Antivirus Protection for Your Cloud Storage
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Enterprise-grade Virus Scanning Solution that supports Amazon S3,
            Cloudflare R2 and Google Cloud Storage to secure your business
            platform.
          </p>
          <a
            href="#demo"
            className="mt-8 inline-block rounded-lg bg-blue-500 px-6 py-3 text-white hover:bg-blue-400"
          >
            Get Started for Free
          </a>
          <div className="flex justify-center pt-5">
            <div className="inline-flex items-center">
              <GreenCheck />
              <span className="ml-1 text-lg">
                Free Trial — No Credit Card Required
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* We support section */}
      <section id="supported-providers" className="mx-auto my-20 max-w-7xl">
        <div className="text-center">
          <h2 className="text-4xl font-semibold">
            Protect all your Cloud Storage Buckets
          </h2>
          <p className="text-xl font-light text-gray-500">
            BucketScan supports all major cloud providers.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {content.cloudproviders.map(({ name, logo, link }) => (
              <Link href={link}>
                <button className="flex h-full w-full flex-col items-center justify-center rounded border-0 bg-white px-6 py-4 text-xl text-black shadow-[5px_5px_0px_0px_rgba(0,0,0)] shadow-black outline transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-gray-100 hover:shadow-none">
                  <img
                    src={logo}
                    alt=""
                    className="mb-2 block"
                    height="100"
                    width="100"
                  />
                  <p className="mb-1 font-bold">{name}</p>
                </button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded features section - link off to individual pages like bucketav.com */}
      <section id="expanded-features" className="my-20 max-w-7xl">
        <div>
          <div className="">
            <h2 className="text-3xl font-semibold">
              {content.features.scanInformation.title}
            </h2>
            <p className="text-xl text-gray-500">
              {content.features.scanInformation.subtitle}
            </p>
          </div>
          <ul>
            {content.features.dataInfo.links.map(({ name, link }) => {
              return (
                <li>
                  <Link href={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <div className="">
            <h2 className="text-3xl font-semibold">
              {content.features.integrationInfo.title}
            </h2>
            <p className="text-xl text-gray-500">
              {content.features.integrationInfo.subtitle}
            </p>
          </div>
          <ul>
            {content.features.dataInfo.links.map(({ name, link }) => {
              return (
                <li>
                  <Link href={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <div className="">
            <h2 className="text-3xl font-semibold">
              {content.features.dataInfo.title}
            </h2>
            <p className="text-xl text-gray-500">
              {content.features.dataInfo.subtitle}
            </p>
          </div>
          <ul>
            {content.features.dataInfo.links.map(({ name, link }) => {
              return (
                <li>
                  <Link href={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="features" className="mt-20">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800">
              Why Bucketscan?
            </h2>
            <p className="text-lg text-gray-600">
              Designed for solutions architects, engineering leads, and CTOs
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">
                Rapid Integration
              </h3>
              <p className="text-md mt-4 text-gray-600">
                Easily integrate with existing systems through our robust API,
                compatible with various business software and platforms.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">
                Enhanced Security
              </h3>
              <p className="text-md mt-4 text-gray-600">
                Provide real-time virus scanning to secure user uploads and
                protect your data from threats.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">
                Scan when you want.
              </h3>
              <p className="text-md mt-4 text-gray-600">
                Detect malware in real-time, periodically or on-demand. All
                accessible with our easy-to-use API.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">
                No Self-Hosting Required
              </h3>
              <p className="text-md mt-4 text-gray-600">
                Save on infrastructure and maintenance costs with our
                cloud-based solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product GIF Video of a Demo - can use icons etc. */}
      {/* How it works section */}

      {/* Thin CTA */}

      {/* Legal section */}
      <section id="compliance" className="mt-20 bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Compliance and Regulations
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Meet essential compliance requirements effortlessly.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800">GDPR</h3>
              <p className="text-md mt-2 text-gray-600">
                Ensure user data protection and privacy in accordance with GDPR
                standards.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800">HIPAA</h3>
              <p className="text-md mt-2 text-gray-600">
                Protect sensitive health information with compliance to HIPAA
                guidelines.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800">SOC 2</h3>
              <p className="text-md mt-2 text-gray-600">
                Adhere to high standards for security, availability, processing
                integrity, confidentiality, and privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews / Testimonials */}

      {/* Get the fact sheet section - enter email, and get sent a product fact sheet + newsletter sign up */}
      <section id="contact" className="mt-20">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Get In Touch</h2>
            <p className="text-lg text-gray-600">
              Ready to enhance your platform's security? Let's connect.
            </p>
          </div>
          <div className="flex justify-center">
            <form
              action="#"
              method="post"
              className="w-full max-w-xl rounded-lg bg-white p-8 shadow-md"
            >
              <div className="mb-4">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  id="message"
                  rows={3}
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-400 focus:outline-none"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Pricing */}

      {/* Big CTA */}
    </>
  );
}