import { ManageBillingButton } from "@/components/ManageBillingButton";
import { LabelWithCopy } from "@/components/label-with-copy";
import { createClient } from "@/utils/supabase/server";
import {
  Card,
  CardBody,
  CardHeader,
  Progress,
} from "@nextui-org/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default async function Dashboard() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/sign-in");
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
    }
  );
  console.log(subscriptionData);
  return (
    <div className="container mx-auto p-6 space-y-6">
      <Card>
        <CardHeader className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">API Key</h2>
        </CardHeader>
        <CardBody className="bg-gray-50">
          <LabelWithCopy text={personalAccount.private_metadata.api_key} />
        </CardBody>
      </Card>
      <Card>
        <CardHeader className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">API Credits</h2>
        </CardHeader>
        <CardBody className="bg-gray-50">
          {subscriptionData && subscriptionData.subscription_active ? (
            <div className="space-y-4">
              <p className="text-green-600">You have a subscription</p>
              <p>
                You have {personalAccount.private_metadata.credits} credits
                remaining
              </p>
              <Progress
                aria-label="API Credits"
                value={personalAccount.private_metadata.credits}
                className="max-w-md"
                showValueLabel={true}
                formatOptions={{}}
                // maxValue={} // TODO: Add this with the max allowed for the plan
              />
              <ManageBillingButton accountId={personalAccount.account_id} />
            </div>
          ) : (
            <p className="text-red-600">You don't have a subscription</p>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
