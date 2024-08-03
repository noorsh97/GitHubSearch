import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Loader } from "@/components";

describe("Loading Component", () => {
  test("renders without crashing", () => {
    render(<Loader />);
    const loader = screen.getByRole("presentation");
    expect(loader).toBeInTheDocument();
  });
});
