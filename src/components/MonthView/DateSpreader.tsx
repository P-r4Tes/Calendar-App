import MonthUnit from "../CalendarUnits/MonthUnit";

type DataSpreaderProps = {
  renderRange: string[][];
};

export function DataSpreader({ renderRange }: DataSpreaderProps) {
  return (
    <div className="flex flex-col h-full divide-y-[1px]">
      {renderRange.map((week: string[], index: number) => (
        <div key={index} className="flex flex-1 divide-x-[1px] ">
          {week.map((day: string, index: number) => (
            <div key={index} className="flex flex-col flex-1">
              <MonthUnit day={day} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
