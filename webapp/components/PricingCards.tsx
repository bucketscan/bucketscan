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
import { useRouter } from "next/navigation";
import { manageSubscription, startSubscription } from "@/app/pricing/actions";

const PricingCardsContent = ({
  plans,
  accountId,
  subscriptionActive,
}: {
  plans: any;
  accountId: string;
  subscriptionActive: boolean;
}) => {
  const router = useRouter();
  return (
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
                  if (subscriptionActive && accountId) {
                    await manageSubscription(accountId);
                  } else if (accountId) {
                    await startSubscription(accountId, id); // Call the server action
                  } else {
                    router.push("/sign-in");
                  }
                }}
              >
                {subscriptionActive && accountId
                  ? "Manage Subscription"
                  : "Subscribe"}
              </Button>
            </CardBody>
          </Card>
        )
      )}
    </>
  );
};

export const PricingCards = ({
  pricingPlans,
  accountId,
  subscriptionActive,
}: {
  pricingPlans: Array<any>;
  accountId: string;
  subscriptionActive: boolean;
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
                  subscriptionActive={subscriptionActive}
                />
              )}
            </Tab>
            <Tab key="yearly" title="Yearly">
              {selectedTab === "yearly" && (
                <PricingCardsContent
                  plans={yearlyPlans}
                  accountId={accountId}
                  subscriptionActive={subscriptionActive}
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
