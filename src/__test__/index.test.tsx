import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Page searchParams={{}} />);

    const Element = screen.getByTestId("root-layout");
    expect(Element).toBeInTheDocument();
  });
});
