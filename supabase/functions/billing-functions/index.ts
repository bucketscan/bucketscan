// SS 09/02/2024: Commented out for now to resolve the build. These will have to be built out properly when we're ready.
// /***
//  * THESE FUNCTIONS ARE FOR TESTING PURPOSES ONLY.
//  * TO SETUP ON YOUR OWN, HEAD TO https://usebasejump.com
//  */
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import {
  billingFunctionsWrapper,
  stripeFunctionHandler,
} from "https://raw.githubusercontent.com/joshghent/basejump-deno-packages/fix/account-id-optional/billing-functions/mod.ts";
// from "https://deno.land/x/basejump@v2.0.3/billing-functions/mod.ts";

import Stripe from "https://esm.sh/stripe@11.1.0?target=deno";

const stripeClient = new Stripe(Deno.env.get("STRIPE_API_KEY") as string, {
  // This is needed to use the Fetch API rather than relying on the Node http
  // package.
  apiVersion: "2022-11-15",
  httpClient: Stripe.createFetchHttpClient(),
});

const stripeHandler = stripeFunctionHandler({
  stripeClient,
  defaultPlanId: Deno.env.get("STRIPE_DEFAULT_PLAN_ID") as string,
  defaultTrialDays: Deno.env.get("STRIPE_DEFAULT_TRIAL_DAYS")
    ? Number(Deno.env.get("STRIPE_DEFAULT_TRIAL_DAYS"))
    : undefined,
});

const billingEndpoint = billingFunctionsWrapper(stripeHandler, {
  allowedURLs: ["http://localhost:3000", "http://localhost:3000/dashboard"],
});

serve(async (req) => {
  const requestClone = req.clone();
  const b = await requestClone.json();
  console.log(b);

  const response = await billingEndpoint(req);

  const responseClone = response.clone();
  const r = await responseClone.json();
  console.log(r);

  return response;
});
