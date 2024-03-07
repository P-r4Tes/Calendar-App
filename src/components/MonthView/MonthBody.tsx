import { generateCalendar } from "@/lib/functions/calendar";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

function MonthBody() {
  const [date, setDate] = useState<Date>(new Date());
  const month = useSearchParams().get("month") as string;
  const year = useSearchParams().get("year") as string;
  if (year !== null && month !== null) {
    const newData = new Date(parseInt(year), parseInt(month) - 1, 1);
    setDate(newData);
  }

  function getWeekCount(date: Date) {
    if (!date) throw new Error("날짜가 입력되지 않았습니다!");

    const { firstDay, lastDay } = getFirstAndLastDay(date);
    const lastDate = lastDay.getDate();
    const firstDayOfWeek = firstDay.getDay();

    if (lastDate === 28 && firstDayOfWeek === 0) return 4;
    else if (lastDate === 31 && (firstDayOfWeek === 5 || firstDayOfWeek === 6)) return 6;
    else if (lastDate === 30 && firstDayOfWeek === 6) return 6;
    else return 5;
  }
  function getFirstAndLastDay(date: Date) {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return { firstDay, lastDay };
  }

  function rangeGenerator() {
    // if (date === undefined) throw new Error("Date setting Logic Error !");
    const totalLine = getWeekCount(date);
    const alpha = generateCalendar(date, totalLine);
    console.log(alpha);
    return 2;
  }
  console.log(rangeGenerator());
  return (
    <div>
      <ul>
        <li>test</li>
      </ul>
    </div>
  );
}

export default MonthBody;
