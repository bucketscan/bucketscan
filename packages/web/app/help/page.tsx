import { Button } from "@nextui-org/react";

export default function Page() {
  return (
    <>
      <main>
        <section>
          <h1>BucketScan Knowledge Base</h1>
          <p>Get help with common Bucketscan topics.</p>
        </section>

        {/* Add in dynamically built sections for help articles.
          Catagories -
            1. Getting started
            2. API
            3. Virus scanning
            4. Account

          Ideally have this fed by markdown files and define the section in the frontmatter. */}
      </main>
    </>
  )
}
