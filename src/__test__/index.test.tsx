import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";
import { ROOT_ID } from "@/constants/testId";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Page searchParams={{}} />);

    const Element = screen.getByTestId(ROOT_ID);
    expect(Element).toBeInTheDocument();
  });
});
