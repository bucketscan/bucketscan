import { memo } from "react"

const ProductSurvey = () => (
  <div className="mb-8 flex justify-center text-center">
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
)

export default memo(ProductSurvey)
