const cloudproviders = [
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
];

export default function LogoCloud() {
  return (
    <div className="bg-grey-700 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-white-900 text-center text-lg font-semibold leading-8">
          Protect all your Cloud Storage Buckets
        </h2>
        <p className="text-md text-white-500 text-center font-light leading-8">
          BucketScan supports all major cloud providers.
        </p>

        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {cloudproviders.map(({ name, logo }) => (
            <img
              key={name}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={logo}
              alt={name}
              width={158}
              height={48}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
