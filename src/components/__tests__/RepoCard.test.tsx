import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { RepoCard } from "@/components";
import { getRepoForks, getRepoContents } from "@/services";
import { mockForks, mockContents, mockRepo } from "@/utils/constants/mockData";

jest.mock("@/services", () => ({
  getRepoForks: jest.fn(),
  getRepoContents: jest.fn(),
  languagesColor: {
    JavaScript: "#f1e05a",
    Python: "#3572A5",
  },
}));

describe("RepoCard Component", () => {
  beforeEach(() => {
    (getRepoForks as jest.Mock).mockResolvedValue(mockForks);
    (getRepoContents as jest.Mock).mockResolvedValue(mockContents);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders without crashing", () => {
    render(<RepoCard repo={mockRepo} />);
    expect(screen.getByText(mockRepo?.name ?? "")).toBeInTheDocument();
    expect(screen.getByText(mockRepo?.description ?? "")).toBeInTheDocument();
    expect(screen.getByText(mockRepo?.language ?? "")).toBeInTheDocument();
    expect(
      screen.getByText(`${mockRepo.forks_count}`)
    ).toBeInTheDocument();
  });


});
