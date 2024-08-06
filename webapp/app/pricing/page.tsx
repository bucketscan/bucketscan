import { PricingCards } from "@/components/PricingCards";
import { createClient } from "@/utils/supabase/server";

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
    }
  );

  const { data: subscriptionData } = await supabase.functions.invoke(
    "billing-functions",
    {
      body: {
        action: "get_billing_status",
        args: {
          account_id: personalAccount.account_id,
        },
      },
    }
  );

  const subscriptionActive: boolean = subscriptionData?.subscription_active;

  return (
    <PricingCards
      pricingPlans={pricingPlans || []}
      accountId={personalAccount?.account_id || null}
      subscriptionActive={subscriptionActive}
    />
  );
}
