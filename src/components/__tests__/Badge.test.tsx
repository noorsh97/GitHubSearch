import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Badge } from "@/components";

describe("Badge Component", () => {
  test("renders with the correct text", () => {
    render(<Badge text="JavaScript" color="#f1e05a" />);
    expect(screen.getByText("JavaScript")).toBeInTheDocument();
  });

  test("applies the correct background color", () => {
    render(<Badge text="JavaScript" color="#f1e05a" />);
    const badge = screen.getByText("JavaScript");
    expect(badge).toHaveStyle("background-color: #f1e05a");
  });
});
