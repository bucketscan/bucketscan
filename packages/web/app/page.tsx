import GreenCheck from "@/components/GreenCheck";

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
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
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
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800">
                AWS? GCP? Azure? No Problem.
              </h3>
              <p className="text-md mt-4 text-gray-600">
                BucketScan natively supports a variety of cloud platforms.
                Providing a consistent approach to security whereever your data
                is.
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

      {/* Expanded features section - link off to individual pages like bucketav.com */}

      {/* Reviews / Testimonials */}

      {/* Legal section */}

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
                  for="name"
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
                  for="email"
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
                  for="message"
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
