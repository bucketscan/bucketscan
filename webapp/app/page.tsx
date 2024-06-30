import Features from "@/components/Features";
import GetEarlyAccess from "@/components/GetEarlyAccess";
import Newsletter from "@/components/Newsletter";
import PainPoints from "@/components/pages/home/PainPoints";
import ProductSurvey from "@/components/pages/home/ProductSurvey";

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <div className="-z-[100] bg-gray-900">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          {/* <div
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
          </div> */}
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <ProductSurvey />

            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Antivirus Protection for Your Cloud Storage
              </h1>
              <p className="mt-6 text-lg leading-8 text-white">
                Automatically scan for viruses and ensure compliance across all
                user uploads with our seamless, integrated solution.
              </p>
              <GetEarlyAccess />
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
      <PainPoints />

      {/* Reviews / Testimonials */}

      {/* Thin CTA */}

      {/* Expanded features section - link off to individual pages like bucketav.com */}
      <section id="expanded-features">
        <Features />
      </section>

      {/* Get the fact sheet section - enter email, and get sent a product fact sheet + newsletter sign up */}
      <Newsletter />
    </>
  );
}
