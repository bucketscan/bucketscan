import { LabelWithCopy } from "@/components/label-with-copy";
import { createClient } from "@/utils/supabase/server";

import {
  Card,
  CardBody,
  CardHeader,
  Progress,
} from "@nextui-org/react";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }
  const { data: personalAccount } = await supabase.rpc("get_personal_account");
  const { data: subscriptionData } = await supabase.functions.invoke(
    "billing-functions",
    {
      body: {
        action: "get_billing_status",
        args: {
          account_id: personalAccount.account_id,
        },
      },
    },
  );
  return (
    <>
      <Card>
        <CardHeader>
          <h2>API Key</h2>
        </CardHeader>
        <CardBody>
          <LabelWithCopy text={personalAccount.private_metadata.api_key} />
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <h2>API Credits</h2>
        </CardHeader>
        <CardBody>
          {subscriptionData && subscriptionData.subscription_active ? (
            <p>You have a subscription</p>
          ) : (
            <p>You don't have a subscription</p>
          )}
        </CardBody>
      </Card>
    </>
  );
}
