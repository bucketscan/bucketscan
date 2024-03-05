import Link from "next/link";

export default function Footer() {
  return (
    <footer className="body-font bg-white text-gray-600">
      <div className="container mx-auto flex flex-col flex-wrap px-5 py-24 md:flex-row md:flex-nowrap md:items-center lg:items-start">
        <div className="mx-auto w-64 flex-shrink-0 text-center md:mx-0 md:text-left">
          <a className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start">
            <span className="text-xl">🪣 BucketScan</span>
          </a>
          <p className="mb-4 mt-2 text-sm text-gray-500">
            Made with ❤️ in the UK 🇬🇧. 100% independent and self-funded.
          </p>
        </div>
        <div className="-mb-10 mt-10 flex flex-grow flex-wrap text-center md:mt-0 md:pl-5 md:text-left">
          <div className="w-full px-4 md:w-1/2 lg:w-1/5">
            <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-gray-900">
              Pages
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="https://bucketscan.com/developers"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 hover:text-gray-800"
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-800" href="/faq">
                  FAQ
                </Link>
              </li>
              <li>
                <a
                  href="https://status.bucketscan.com"
                  className="text-gray-600 hover:text-gray-800"
                >
                  API Status
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800"
                  href="/sitemap.xml"
                >
                  Sitemap
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/5">
            <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-gray-900">
              Integrations
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <Link
                  href="/virus-scanning-for-s3"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Amazon S3
                </Link>
              </li>
              <li>
                <Link
                  href="/virus-scanning-for-google-cloud-storage"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Google Cloud Storage
                </Link>
              </li>
              <li>
                <Link
                  href="/virus-scanning-for-cloudflare-r2"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Cloudflare R2
                </Link>
              </li>
              <li>
                <Link
                  href="/virus-scanning-for-zapier"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Zapier
                </Link>
              </li>
              <li>
                <Link
                  href="/virus-scanning-for-wordpress"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Wordpress
                </Link>
              </li>
              <li>
                <Link
                  href="/opentelemetry"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Open Telemetry
                </Link>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/5">
            <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-gray-900">
              Company
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-800"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/product-updates"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Product Updates
                </Link>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/5">
            <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-gray-900">
              Keep in touch
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:hello@bucketscan.com"
                  className="text-gray-600 hover:text-gray-800"
                >
                  hello@bucketscan.com
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/bucketscan"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="" className="text-gray-600 hover:text-gray-800">
                  LinkedIn
                </Link>
              </li>
              <li>
                <a
                  href="https://www.producthunt.com/products/bucketscan"
                  className="text-gray-600 hover:text-gray-800"
                >
                  ProductHunt
                </a>
              </li>
              <li>
                <a href="" className="text-gray-600 hover:text-gray-800">
                  Discord
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/5">
            <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-gray-900">
              Features
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Real-time Scans
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-600 hover:text-gray-800"
                >
                  On-Demand Scans
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Scheduled Scans
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-600 hover:text-gray-800"
                >
                  On-Access Scans
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-600 hover:text-gray-800"
                >
                  ClamAV antivirus engine
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Multiple Cloud Storage Buckets
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Bespoke Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Slack and Teams Integration
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Email and Raw Data Reports
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Custom Integration (Webhook)
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-600 hover:text-gray-800"
                >
                  GraphQL and REST API
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto flex flex-col flex-wrap px-5 py-4 sm:flex-row">
          <p className="text-center text-sm text-gray-500 sm:text-left">
            © {new Date().getFullYear()} BucketScan
          </p>
        </div>
      </div>
    </footer>
  );
}
