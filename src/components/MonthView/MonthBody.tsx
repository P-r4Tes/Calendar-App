"use client";

import { generateCalendar } from "@/lib/functions/calendar";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { EmptyLayout } from "./EmptyLayout";
import { MONTH_BODY } from "@/constants/testId";
import { DataSpreader } from "./DateSpreader";

type MonthBodyProps = {
  year?: string;
  month?: string;
};

function MonthBody(props: MonthBodyProps) {
  const [date, setDate] = useState<Date>(new Date());
  const month = props.month ?? new Date().getMonth().toString();
  const year = props.year ?? new Date().getFullYear().toString();
  const [renderRange, setRenderRange] = useState<string[][] | null>(null);
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

  useEffect(() => {
    const YEAR = Number(year);
    const MONTH = Number(month);
    const invalidDate = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      router.push(`/?view=month&year=${year}&month=${month}`);
    };

    if (YEAR >= 2100 || YEAR <= 2000 || MONTH >= 13 || MONTH <= 0) return invalidDate();

    const newData = new Date(parseInt(year), parseInt(month) - 1, 1);
    setDate(newData);

    // eslint-disable-next-line
  }, [month, year]);

  useEffect(() => {
    setRenderRange(generateCalendar(date));
  }, [date]);

  return (
    <section data-testid={MONTH_BODY} onWheel={handleScroll} className="flex-1">
      {renderRange ? <DataSpreader renderRange={renderRange} /> : <EmptyLayout />}
    </section>
  );
}

export default MonthBody;
