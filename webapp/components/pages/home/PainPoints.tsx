import { memo } from "react"
import Section from "@/components/pages/home/Section"

const PainPoints = () => (
  <Section id="pain-points">
    <div className="mx-auto max-w-7xl">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-semibold text-white">
          Constant Security Threats Slowing You Down?
        </h2>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8">
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
  </Section>
)

export default memo(PainPoints)
