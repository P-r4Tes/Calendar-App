import React from "react";

const MonthView = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <section className="flex flex-col flex-1">
      <div className="flex w-full">
        {days.map((day, index) => (
          <div key={index} className="flex-1">
            {day}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MonthView;
