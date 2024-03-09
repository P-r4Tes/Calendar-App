"use client";

import { MONTH_HEADER } from "@/constants/testId";
import React from "react";

const days = ["일", "월", "화", "수", "목", "금", "토"];

const MonthHeader = () => {
  return (
    <div data-testid={MONTH_HEADER} className="flex w-full divide-x-[1px] border-b">
      {days.map((day, index) => (
        <div key={index} className="flex flex-1 justify-end">
          {day}
        </div>
      ))}
    </div>
  );
};

export default React.memo(MonthHeader);
