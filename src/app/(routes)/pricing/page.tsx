import PricingSection from "@/services/pricing-section/pricing";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Pricing | Adventiq Labs",
  description: "Adventiq Labs is a global software company",
};

const PricingPage = () => {
  return (
    <div>
      <PricingSection />
    </div>
  );
};

export default PricingPage;
