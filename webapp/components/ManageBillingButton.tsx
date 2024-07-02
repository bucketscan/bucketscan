"use client";
import { manageSubscription } from "@/app/pricing/page";
import { Button } from "@nextui-org/react";
export const ManageBillingButton = ({ accountId }: { accountId: string }) => {
  return (
    <Button
      onClick={async () => {
        if (accountId) {
          await manageSubscription(accountId);
        }
      }}
    >
      Manage Subscription
    </Button>
  );
};
