import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

function MonthBody() {
  const [date, setDate] = useState<Date>();
  const month = useSearchParams().get("month") as string;
  const year = useSearchParams().get("year") as string;
  const now = new Date();

  if (year !== undefined && month !== undefined && now === undefined) {
    const newData = new Date(parseInt(year), parseInt(month) - 1, 1);
    setDate(newData);
  } else if (now === undefined) {
    const newData = new Date();
    setDate(newData);
  }

  console.log(date);
  return (
    <div>
      <ul>
        <li>test</li>
      </ul>
    </div>
  );
}

export default MonthBody;
