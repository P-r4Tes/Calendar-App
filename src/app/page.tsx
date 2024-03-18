import LoginForm from "@/components/Auth/LoginForm";
import { ROOT_ID } from "@/constants/testId";
import MonthCalendar from "@/container/MonthCalendar";
import { viewType } from "@/types/Calendar";
import { authType } from "@/types/Auth";
import SignupForm from "@/components/Auth/SignupForm";

type CalendarPageProps = {
  searchParams: {
    view?: viewType;
    month?: string;
    year?: string;
    day?: string;
    auth?: authType;
  };
};
export default function Home({ searchParams }: CalendarPageProps) {
  const { view, auth } = searchParams;
  return (
    <main className="flex flex-col flex-1" data-testid={ROOT_ID}>
      {view && view === "month" && <MonthCalendar searchParams={searchParams} />}
      {auth && auth === "login" && <LoginForm />}
      {auth && auth === "signup" && <SignupForm />}
    </main>
  );
}
