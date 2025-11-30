import AppDevelopmentPage from "@/services/app-development/app-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "App Development | Adventiq Labs",
  description: "Adventiq Labs is a global software company",
};

const AppPage = () => {
  return (
    <div>
      <AppDevelopmentPage />
    </div>
  );
};

export default AppPage;
