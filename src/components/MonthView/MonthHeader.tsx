"use client";

import { DAYS } from "@/constants/calendar";
import { MONTH_HEADER } from "@/constants/testId";
import React from "react";

const MonthHeader = () => {
  return (
    <div data-testid={MONTH_HEADER} className="flex w-full divide-x-[1px] border-b">
      {DAYS.map((day, index) => (
        <div key={index} className="flex flex-1 justify-end">
          {day}
        </div>
      ))}
    </div>
  );
};

export default React.memo(MonthHeader);
