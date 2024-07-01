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
    },
  );

  return <PricingCards pricingPlans={pricingPlans || []} />;
}
