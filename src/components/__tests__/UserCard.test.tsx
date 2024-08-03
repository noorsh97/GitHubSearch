import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { UserCard } from "@/components";
import { mockUser } from "@/utils";

describe("UserCard Component", () => {
  test("renders user login", () => {
    render(<UserCard user={mockUser} />);
    const userLink = screen.getByText(mockUser.login);
    expect(userLink).toBeInTheDocument();
  });

  test("renders user avatar with correct src and alt", () => {
    render(<UserCard user={mockUser} />);
    const userAvatar = screen.getByAltText(
      `github avatar of ${mockUser.login}`
    );
    expect(userAvatar).toBeInTheDocument();
    expect(userAvatar).toHaveAttribute("src", mockUser.avatar_url);
  });

  test("renders link to user GitHub profile", () => {
    render(<UserCard user={mockUser} />);
    const userLink = screen.getByText(mockUser.login);
    expect(userLink).toBeInTheDocument();
    expect(userLink).toHaveAttribute("href", mockUser.html_url);
    expect(userLink).toHaveClass("text-[#4493f8]");
  });
});
