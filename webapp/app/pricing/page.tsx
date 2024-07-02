"use server";

import { PricingCards } from "@/components/PricingCards";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export const startSubscription = async (accountId: string, planId: string) => {
  const supabase = createClient();
  const { data } = await supabase.functions.invoke("billing-functions", {
    body: {
      action: "get_new_subscription_url",
      args: {
        account_id: accountId,
        plan_id: planId,
        success_url: "http://localhost:3000/dashboard?subscribe=true",
        cancel_url: "http://localhost:3000/dashboard?subscribe=false",
      },
    },
  });

  redirect(data.url);
};

export const manageSubscription = async (accountId: string) => {
  const supabase = createClient();
  const { data } = await supabase.functions.invoke("billing-functions", {
    body: {
      action: "get_billing_portal_url",
      args: {
        account_id: accountId,
        return_url: "http://localhost:3000/dashboard",
      },
    },
  });

  redirect(data.url);
};

export default async function Pricing() {
  const supabase = createClient();
  const { data: personalAccount } = await supabase.rpc("get_personal_account");

  const { data: pricingPlans } = await supabase.functions.invoke(
    "billing-functions",
    {
      body: {
        action: "get_plans",
        args: {
          account_id: personalAccount?.account_id ?? null,
        },
      },
    },
  );

  return (
    <PricingCards
      pricingPlans={pricingPlans || []}
      accountId={personalAccount?.account_id || null}
    />
  );
}
