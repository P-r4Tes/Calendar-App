"use client";

import React from "react";
import MonthHeader from "./MonthHeader";
import MonthBody from "./MonthBody";
import { useRouter, useSearchParams } from "next/navigation";

const MonthView = () => {
  const month = useSearchParams().get("month") as string;
  const year = useSearchParams().get("year") as string;
  const router = useRouter();
  function handleScroll(e: React.WheelEvent<HTMLElement>) {
    let NEW_MONTH = Number(month);
    let NEW_YEAR = Number(year);
    if (e.deltaY > 0) {
      NEW_MONTH += 1;
      if (NEW_MONTH > 12) {
        NEW_MONTH = 1;
        NEW_YEAR += 1;
      }
      return router.push(`/?view=month&year=${NEW_YEAR}&month=${NEW_MONTH}`);
    }
    NEW_MONTH -= 1;
    if (NEW_MONTH < 1) {
      NEW_MONTH = 12;
      NEW_YEAR -= 1;
    }
    router.push(`/?view=month&year=${NEW_YEAR}&month=${NEW_MONTH}`);
  }
  return (
    <section onWheel={handleScroll} className="flex flex-col flex-1 h-full">
      <MonthHeader />
      <MonthBody />
    </section>
  );
};

export default MonthView;
