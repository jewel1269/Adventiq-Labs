import DemoProject from "@/services/demo-project/demo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo Project | Adventiq Labs",
  description: "Adventiq Labs is a global software company",
};

const AboutPage = () => {
  return (
    <div>
      <DemoProject />
    </div>
  );
};

export default AboutPage;
