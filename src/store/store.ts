import { makeAutoObservable, runInAction } from "mobx";
import { User, Repository, SearchType, SearchResult } from "@/types";
import { searchGithub } from "@/services";
import { SEARCH_TYPES } from "@/utils";

export class Store {
  query = "";
  type: SearchType = SEARCH_TYPES.USERS;
  page = 1;
  hasMore = true;
  loading = false;
  error = "";
  results: (User | Repository)[] = [];
  isEmpty= false;

  constructor() {
    makeAutoObservable(this);
  }

  setQuery(query: string) {
    this.query = query;
  }

  setType(type: SearchType) {
    this.type = type;
  }

  setPage(page: number) {
    this.page = page;
  }

  setHasMore(hasMore: boolean) {
    this.hasMore = hasMore;
  }

  setLoading(loading: boolean) {
    this.loading = loading;
  }

  setError(error: string) {
    this.error = error;
  }
  setEmpty(isEmpty: boolean) {
    this.isEmpty = isEmpty;
  }
  setResults(results: (User | Repository)[]) {
    this.results = results;
  }

  async fetchGithubResults(query: string, type: SearchType, page: number) {
    if (!query) return [];
    try {
      this.setLoading(true);
      const data: SearchResult<User | Repository> = await searchGithub(
        query,
        type,
        page
      );
      runInAction(() => {
        this.setError("");
        this.setLoading(false);
        if (page === 1) {
          this.results = data.items;
        } else {
          this.results = [...this.results, ...data.items];
        }
        this.hasMore = data.items.length > 0;
        this.isEmpty = data.total_count === 0;
      });
      return data.items;
    } catch (error) {
      runInAction(() => {
        this.setError(
          this.results.length > 0
            ? "Something went wrong Could not fetch more results"
            : "Error fetching GitHub results"
        );
        this.setLoading(false);
        this.setHasMore(false);
      });
      return [];
    }
  }
}

let store: Store;

export function initializeStore(initialData = null) {
  const _store = store ?? new Store();
  if (typeof window === "undefined") return _store;
  if (!store) store = _store;
  return _store;
}
