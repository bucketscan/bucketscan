import { NextjsSite, StackContext } from "sst/constructs";

export function WebApp({ stack }: StackContext) {
  const site = new NextjsSite(stack, "site", {
    path: "packages/web",
    environment: {
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL!,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    }
  })

  stack.addOutputs({
    SiteUrl: site.url,
  })
}
