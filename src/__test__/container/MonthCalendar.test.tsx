import { MONTH_BODY, MONTH_HEADER } from "@/constants/testId";
import MonthCalendar from "@/container/MonthCalendar";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe("Container - MonthCalendar", () => {
  it("연월 정보가 없는 경우에도 MonthCalendar는 정상적으로 렌더링된다", () => {
    render(<MonthCalendar searchParams={{}} />);
    const monthBody = screen.getByTestId(MONTH_BODY);
    const monthHeader = screen.getByTestId(MONTH_HEADER);
    expect(monthBody).toBeInTheDocument();
    expect(monthHeader).toBeInTheDocument();
  });

  it("윤년의 정보가 주어져도 2월 29일은 정상적으로 렌더링 된다", () => {
    render(<MonthCalendar searchParams={{ year: "2024", month: "2" }} />);
    const monthBody = screen.getByTestId(MONTH_BODY);
    const monthHeader = screen.getByTestId(MONTH_HEADER);
    expect(monthBody).toBeInTheDocument();
    expect(monthHeader).toBeInTheDocument();
    const feb29 = screen.getByText("2/29");
    expect(feb29).toBeInTheDocument();
  });
});
