"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface UseInfiniteScrollResult<T> {
  results: T[];
  hasMore: boolean;
  loadMoreRef: React.RefObject<HTMLDivElement>;
  setResults: React.Dispatch<React.SetStateAction<T[]>>;
}
const useInfiniteScroll = <T extends {}>(
  fetchNextPage: (query: string, page: number) => Promise<T[]>,
  query: string,
  page: number,
  setPage: (pageNumebr: number) => void,
  loading: boolean
): UseInfiniteScrollResult<T> => {
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const [results, setResults] = useState<T[]>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && query) {
          setPage(page + 1);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = loadMoreRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasMore, loadMoreRef?.current, loading, page]);

  const fetchResults = useCallback(
    async (query: string, page: number) => {
      if (!query) return;
      const data = await fetchNextPage(query, page);
      setResults((prevResults) =>
        page === 1 ? data : [...prevResults, ...data]
      );
      setHasMore(data.length > 0);
    },
    [fetchNextPage]
  );

  useEffect(() => {
    if (page === 1 || !query) return;
    fetchResults(query, page);
  }, [page, query, hasMore]);

  return { loadMoreRef, results, hasMore, setResults };
};

export default useInfiniteScroll;
