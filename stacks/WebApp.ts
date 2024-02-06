import type { SSTConfig } from "sst"
import { StackContext, NextjsSite, App } from "sst/constructs"

export function WebApp({ stack }: StackContext) {
  const site = new NextjsSite(stack, "site", {
    path: "packages/web",
  })
  stack.addOutputs({
    SiteUrl: site.url,
  })
}
