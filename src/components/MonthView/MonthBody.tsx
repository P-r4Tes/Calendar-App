"use client";

import { generateCalendar } from "@/lib/functions/calendar";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import MonthUnit from "../CalendarUnits/MonthUnit";
import { EmptyLayout } from "./EmptyLayout";
import { MONTH_BODY } from "@/constants/testId";

type MonthBodyProps = {
  year: string | undefined;
  month: string | undefined;
};

function MonthBody(props: MonthBodyProps) {
  const [date, setDate] = useState<Date>(new Date());
  const month = props.month ?? new Date().getMonth().toString();
  const year = props.year ?? new Date().getFullYear().toString();
  const [randerRange, setRanderRange] = useState<string[][] | null>(null);
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
  }, [month, year]);

  useEffect(() => {
    setRanderRange(generateCalendar(date));
  }, [date]);

  return (
    <section data-testid={MONTH_BODY} onWheel={handleScroll} className="flex-1">
      {randerRange === null && <EmptyLayout />}
      {randerRange && (
        <div className="flex flex-col h-full divide-y-[1px]">
          {randerRange.map((week, index) => (
            <div key={index} className="flex flex-1 divide-x-[1px] ">
              {week.map((day, index) => (
                <div key={index} className="flex flex-col flex-1">
                  <MonthUnit day={day} />
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default MonthBody;
