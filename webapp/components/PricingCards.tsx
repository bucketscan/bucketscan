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
import { startSubscription } from "@/utils/billing";
import { redirect } from "next/navigation";

const PricingCardsContent = ({ plans, accountId }) => (
  <>
    {plans.map(({ currency, id, interval, price, product_name }) => (
      <Card key={id}>
        <CardHeader>{product_name}</CardHeader>
        <CardBody>
          £{price / 100} {currency.toUpperCase()}
          <Button
            onClick={async () => {
              if (accountId) {
                await startSubscription(accountId, id); // Call the server action
              } else {
                redirect("/login");
              }
            }}
          >
            Subscribe
          </Button>
        </CardBody>
      </Card>
    ))}
  </>
);

export const PricingCards = ({ pricingPlans, accountId }) => {
  const [selectedTab, setSelectedTab] = useState("monthly");

  const monthlyPlans = pricingPlans?.filter(
    (plan) => plan.interval === "month",
  );
  const yearlyPlans = pricingPlans?.filter((plan) => plan.interval === "year");

  return (
    <>
      {pricingPlans?.length > 0 ? (
        <>
          <Tabs
            aria-label="Pricing Plans"
            defaultValue="monthly"
            onSelectionChange={(key) => setSelectedTab(key)}
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
