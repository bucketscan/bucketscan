import { ReactNode } from "react"

type Props = {
  id: string
  children: ReactNode
}

const Section = ({ id, children }: Props) => (
  <section id={id} className="z-[100] mx-auto bg-gray-900">
    <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="mx-auto px-6 lg:px-8">
        {children}
      </div>
    </div>
  </section>
)

export default Section
