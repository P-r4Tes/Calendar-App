"use client";

import React from "react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const MonthHeader = () => {
  return (
    <ol className="flex w-full">
      {days.map((day, index) => (
        <li key={index} className="flex-1">
          {day}
        </li>
      ))}
    </ol>
  );
};

export default MonthHeader;
