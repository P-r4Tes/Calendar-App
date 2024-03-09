import MonthBody from "@/components/MonthView/MonthBody";
import { MONTH_BODY } from "@/constants/testId";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe("Monthview", () => {
  it("연월 정보가 없는 경우에도 MonthBody는 정상적으로 렌더링된다", () => {
    render(<MonthBody year={undefined} month={undefined} />);

    const Element = screen.getByTestId(MONTH_BODY);
    expect(Element).toBeInTheDocument();
  });

  it("연월 정보가 있는 경우에도 MonthBody는 정상적으로 렌더링된다", () => {
    render(<MonthBody year={"2021"} month={"1"} />);

    const Element = screen.getByTestId(MONTH_BODY);
    expect(Element).toBeInTheDocument();
  });

  it("올바르지 않은 연월 정보가 기입되는 경우에도 MonthBody는 정상적으로 렌더링된다", () => {
    render(<MonthBody year={"2021"} month={"13"} />);

    const Element = screen.getByTestId(MONTH_BODY);
    expect(Element).toBeInTheDocument();
  });
});
