import { Repository, SearchResult, SearchType } from "@/types";
import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_API_KEY}`,
  },
});

export const searchGithub = async <T>(
  query: string,
  type: SearchType,
  page: number = 1
): Promise<SearchResult<T>> => {
  const response = await axiosClient.get(`search/${type}`, {
    params: {
      q: query,
      per_page: 20,
      page,
    },
  });
  return response?.data;
};

export const getRepoContents = async (
  owner: string,
  repo: string
): Promise<Record<string, number>> => {
  const response = await axiosClient.get(`repos/${owner}/${repo}/languages`);
  return response.data;
};

export const getRepoForks = async <T>(
  owner: string,
  repo: string
): Promise<Repository[]> => {
  const response = await axiosClient.get(`repos/${owner}/${repo}/forks`);
  return response?.data;
};
