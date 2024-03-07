"use client";

import React from "react";
import MonthHeader from "./MonthHeader";
import MonthBody from "./MonthBody";

const MonthView = () => {
  return (
    <section className="flex flex-col flex-1">
      <MonthHeader />
      <MonthBody />
    </section>
  );
};

export default MonthView;
