import React, { useState } from "react";
import { viewType } from "./types";
import MonthView from "./Content/MonthView";

const BUTTON_STYLE = "bg-blue-500 text-white rounded-md p-2";

const Calendar = () => {
  // 이 부분은 상당히 React스러운데 나중에 라우팅으로 돌리고 Next스럽게 리팩터링해도 좋을 것 같습니다.
  const [viewType, setViewType] = useState<viewType>("month");

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLButtonElement;
    const value = target.value as viewType;
    setViewType(value);
  };

  return (
    <div>
      <section onClick={handleClick} className="flex gap-2">
        <button className={BUTTON_STYLE} value={"month"}>
          MONTH
        </button>
        <button className={BUTTON_STYLE} value={"week"}>
          WEEK
        </button>
        <button className={BUTTON_STYLE} value={"day"}>
          DAY
        </button>
      </section>
      {viewType === "month" && <MonthView />}
    </div>
  );
};

export default Calendar;
