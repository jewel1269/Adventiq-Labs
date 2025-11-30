import AIAgentDevelopmentPage from "@/services/ai-agent/ai-agent";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Ai Agent | Adventiq Labs",
  description: "Adventiq Labs is a global software company",
};

const AiAgent = () => {
  return (
    <div>
      <AIAgentDevelopmentPage />
    </div>
  );
};

export default AiAgent;
