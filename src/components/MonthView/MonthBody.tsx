import { generateCalendar } from "@/lib/functions/calendar";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import MonthUnit from "./MonthUnit";

function MonthBody() {
  const [date, setDate] = useState<Date>(new Date());
  const month = useSearchParams().get("month") as string;
  const year = useSearchParams().get("year") as string;
  const [randerRange, setRanderRange] = useState<string[][] | null>(null);
  const router = useRouter();

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
    <section className="flex-1">
      {randerRange === null && (
        <div className="flex flex-col h-full">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="flex flex-1">
                {Array(7)
                  .fill(0)
                  .map((_, index) => (
                    <div key={index} className="flex flex-1 border border-gray-200"></div>
                  ))}
              </div>
            ))}
        </div>
      )}
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
