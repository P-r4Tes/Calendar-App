import Calendar from "@/container/Calendar";
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
  return (
    <main className="flex flex-col flex-1" data-testid="root-layout">
      <Calendar searchParams={searchParams} />
    </main>
  );
}
