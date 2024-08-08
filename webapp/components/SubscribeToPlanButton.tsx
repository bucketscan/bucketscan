"use client";
import { Button } from "@nextui-org/react";
import { redirect } from "next/navigation";
export const SubscribeToPlanButton = ({ accountId }: { accountId: string }) => {
  return (
    <Button
      onClick={() => {
        // Add logic to redirect to the subscription page
        redirect("/subscribe");
      }}
      className="mt-2"
    >
      Start a Plan / Free Trial
    </Button>
  );
};
