"use client";

import { useState } from "react";
import { Card, CardBody, CardHeader, Tabs, Tab } from "@nextui-org/react";

const PricingCardsContent = ({ plans }) => (
  <>
    {plans.map(({ currency, id, interval, price, product_name }) => (
      <Card key={id}>
        <CardHeader>{product_name}</CardHeader>
        <CardBody>
          £{price / 100} {currency.toUpperCase()}
        </CardBody>
      </Card>
    ))}
  </>
);

export const PricingCards = ({ pricingPlans }) => {
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
                <PricingCardsContent plans={monthlyPlans} />
              )}
            </Tab>
            <Tab key="yearly" title="Yearly">
              {selectedTab === "yearly" && (
                <PricingCardsContent plans={yearlyPlans} />
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
