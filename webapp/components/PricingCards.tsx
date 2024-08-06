"use client";

import { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Tabs,
  Tab,
  Button,
} from "@nextui-org/react";
import { redirect } from "next/navigation";
import { startSubscription } from "@/app/pricing/page";

const PricingCardsContent = ({
  plans,
  accountId,
}: {
  plans: any;
  accountId: string;
}) => (
  <>
    {plans.map(
      ({
        currency,
        id,
        price,
        product_name,
      }: {
        currency: string;
        id: any;
        price: number;
        product_name: string;
      }) => (
        <Card key={id}>
          <CardHeader>{product_name}</CardHeader>
          <CardBody>
            £{price / 100} {currency.toUpperCase()}
            <Button
              onClick={async () => {
                if (accountId) {
                  await startSubscription(accountId, id); // Call the server action
                } else {
                  redirect("/sign-in");
                }
              }}
            >
              Subscribe
            </Button>
          </CardBody>
        </Card>
      )
    )}
  </>
);

export const PricingCards = ({
  pricingPlans,
  accountId,
}: {
  pricingPlans: Array<any>;
  accountId: string;
}) => {
  const [selectedTab, setSelectedTab] = useState("monthly");

  const monthlyPlans = pricingPlans?.filter(
    (plan) => plan.interval === "month"
  );
  const yearlyPlans = pricingPlans?.filter((plan) => plan.interval === "year");

  return (
    <>
      {pricingPlans?.length > 0 ? (
        <>
          <Tabs
            aria-label="Pricing Plans"
            defaultSelectedKey="monthly"
            onSelectionChange={(key: React.Key) =>
              setSelectedTab(key.toString())
            }
          >
            <Tab key="monthly" title="Monthly">
              {selectedTab === "monthly" && (
                <PricingCardsContent
                  plans={monthlyPlans}
                  accountId={accountId}
                />
              )}
            </Tab>
            <Tab key="yearly" title="Yearly">
              {selectedTab === "yearly" && (
                <PricingCardsContent
                  plans={yearlyPlans}
                  accountId={accountId}
                />
              )}
            </Tab>
          </Tabs>
        </>
      ) : (
        <h2>No Pricing plans found</h2>
      )}
    </>
  );
};
