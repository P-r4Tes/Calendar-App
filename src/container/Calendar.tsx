// "use client";

import React from "react";
import MonthView from "@/components/MonthView/MonthView";
import { viewType } from "@/types/Calendar";

type CalendarPageProps = {
  searchParams: {
    view?: viewType;
    month?: string;
    year?: string;
    day?: string;
  };
};
const Calendar = ({ searchParams }: CalendarPageProps) => {
  // const view = useSearchParams().get("view") as viewType;
  const { view } = searchParams;

  return <div className="h-full">{view === "month" && <MonthView />}</div>;
};

export default Calendar;
