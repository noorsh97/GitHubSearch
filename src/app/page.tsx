"use client";

import { useCallback } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store/StoreProvider";
import { SearchTypeSelector, SearchBar, SearchResponse } from "@/components";
import { SearchType } from "@/types";
import { useInfiniteScroll } from "@/hooks";
import _ from "lodash";

const Home = observer(() => {
  const store = useStore();

  const { loadMoreRef } = useInfiniteScroll(
    (q, p) => store.fetchGithubResults(q, store.type, p),
    store.query,
    store.page,
    (pageNumber: number) => store.setPage(pageNumber),
    store.loading,
  );

  const getDebouncedResults = useCallback(
    _.debounce((query: string) => {
      store.fetchGithubResults(query.trim(), store.type, 1);
    }, 400),
    []
  );

  const handleSearch = useCallback((query: string) => {
    store.setQuery(query.trim() ?? "");
    if (query?.length > 2) {
      store.setPage(1);
      store.setResults([]);
      getDebouncedResults(store?.query);
    }
  }, []);

  const handleType = useCallback((type: SearchType) => {
    store.setPage(1);
    store.setResults([]);
    store.setType(type);
    store.setQuery("");
    store.setError("");
  }, []);

  return (
    <div className="min-h-screen bg-[#0d1117] p-4">
      <div className="flex flex-wrap items-center justify-center p-4 gap-3 ">
        <SearchBar onSearch={handleSearch} query={store.query} />
        <SearchTypeSelector onSelectType={handleType} type={store.type} />
      </div>
      <SearchResponse loadMoreRef={loadMoreRef} />
    </div>
  );
});

export default Home;
