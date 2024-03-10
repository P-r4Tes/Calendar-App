import React from "react";

type MonthUnitProps = {
  day: string;
};

const MonthUnit = (props: MonthUnitProps) => {
  const { day } = props;

  return (
    <div>
      <div className="flex justify-end text-sm">{day}</div>
      <div>CONTENT AREA</div>
    </div>
  );
};

export default MonthUnit;
