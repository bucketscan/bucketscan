import { ManageBillingButton } from "@/components/ManageBillingButton";
import { SubscribeToPlanButton } from "@/components/SubscribeToPlanButton";
import { LabelWithCopy } from "@/components/label-with-copy";
import { createClient } from "@/utils/supabase/server";
import {
  Card,
  CardBody,
  CardHeader,
  Progress,
  Button,
} from "@nextui-org/react";
import { redirect } from "next/navigation";

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

  const credits = personalAccount.private_metadata.credits ?? 100;
  const subscriptionActive = subscriptionData?.subscription_active;

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
          <p>You have {credits} credits remaining</p>
          <Progress
            aria-label="API Credits"
            value={credits}
            className="max-w-md"
            showValueLabel={true}
            formatOptions={{}}
            maxValue={100} // Assuming 100 is the max for free trial
          />
          {subscriptionActive ? (
            <>
              <p className="text-green-600">You have a subscription</p>
              <ManageBillingButton accountId={personalAccount.account_id} />
            </>
          ) : (
            <div className="mt-4">
              <p className="text-red-600">You don't have a subscription</p>
              <SubscribeToPlanButton accountId={personalAccount.account_id} />
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
