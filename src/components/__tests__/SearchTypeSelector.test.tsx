import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SearchTypeSelector } from "@/components";

describe("SearchTypeSelector Component", () => {
  test("renders with the correct initial type", () => {
    render(<SearchTypeSelector type="users" onSelectType={() => {}} />);
    const selectElement = screen.getByDisplayValue("Users");
    expect(selectElement).toBeInTheDocument();
  });

  test("calls onSelectType with the correct value when changed", () => {
    const mockOnSelectType = jest.fn();
    render(<SearchTypeSelector type="users" onSelectType={mockOnSelectType} />);
    const selectElement = screen.getByDisplayValue("Users");

    fireEvent.change(selectElement, { target: { value: "repositories" } });
    expect(mockOnSelectType).toHaveBeenCalledTimes(1);
    expect(mockOnSelectType).toHaveBeenCalledWith("repositories");
  });

  test("renders with the correct initial type for repositories", () => {
    render(<SearchTypeSelector type="repositories" onSelectType={() => {}} />);
    const selectElement = screen.getByDisplayValue("Repositories");
    expect(selectElement).toBeInTheDocument();
  });

  test("correctly changes the selected option", () => {
    const { rerender } = render(
      <SearchTypeSelector type="users" onSelectType={() => {}} />
    );
    let selectElement = screen.getByDisplayValue("Users");
    expect(selectElement).toBeInTheDocument();

    rerender(
      <SearchTypeSelector type="repositories" onSelectType={() => {}} />
    );
    selectElement = screen.getByDisplayValue("Repositories");
    expect(selectElement).toBeInTheDocument();
  });
});
