import React from "react";
import { viewType } from "@/types/Calendar";
import MonthHeader from "@/components/MonthView/MonthHeader";
import MonthBody from "@/components/MonthView/MonthBody";

type CalendarPageProps = {
  searchParams: {
    view?: viewType;
    month?: string;
    year?: string;
    day?: string;
  };
};
const MonthCalendar = ({ searchParams }: CalendarPageProps) => {
  const { year, month } = searchParams;
  return (
    <div className="flex flex-col flex-1 h-full">
      <MonthHeader />
      <MonthBody year={year} month={month} />
    </div>
  );
};

export default MonthCalendar;
