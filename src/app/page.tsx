import { ROOT_ID } from "@/constants/testId";
import MonthCalendar from "@/container/MonthCalendar";
import { viewType } from "@/types/Calendar";

type CalendarPageProps = {
  searchParams: {
    view?: viewType;
    month?: string;
    year?: string;
    day?: string;
  };
};
export default function Home({ searchParams }: CalendarPageProps) {
  const { view } = searchParams;
  return (
    <main className="flex flex-col flex-1" data-testid={ROOT_ID}>
      {view && view === "month" && <MonthCalendar searchParams={searchParams} />}
    </main>
  );
}
