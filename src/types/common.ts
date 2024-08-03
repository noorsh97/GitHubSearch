export type SearchResult<T> = {
  total_count: number;
  incomplete_results: boolean;
  items: T[];
};

export type SearchType = "users" | "repositories";

export type ApiState = {
  loading: boolean;
  error: string;
  hasMore: boolean;
}