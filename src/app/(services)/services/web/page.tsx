import WebDevelopmentPage from "@/services/web-development/web-page";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Web Development | Adventiq Labs",
  description: "Adventiq Labs is a global software company",
};

const WebPage = () => {
  return <WebDevelopmentPage />;
};

export default WebPage;
