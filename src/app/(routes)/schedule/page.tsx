import { ScheduleCallWizard } from "@/services/ScheduleCallModal/ScheduleCallModal";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Schedule | Adventiq Labs",
  description: "Adventiq Labs is a global software company",
};

const Schedule = () => {
  return (
    <div>
      <ScheduleCallWizard />
    </div>
  );
};

export default Schedule;
