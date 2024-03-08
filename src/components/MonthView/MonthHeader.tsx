"use client";

import React from "react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const MonthHeader = () => {
  return (
    <div className="flex w-full divide-x-[1px] border-b">
      {days.map((day, index) => (
        <div key={index} className="flex-1">
          {day}
        </div>
      ))}
    </div>
  );
};

export default React.memo(MonthHeader);
