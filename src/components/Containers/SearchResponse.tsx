import { observer } from "mobx-react-lite";
import { useStore } from "@/store/StoreProvider";

import { Loader, NoResults, RepoCard, Shimmer, UserCard } from "@/components";
import { Repository, User } from "@/types";

type Props = {
  loadMoreRef: React.RefObject<HTMLDivElement>;
};

const SearchResponse = observer(({ loadMoreRef }: Props) => {
  const store = useStore();

  return (
    <div>
      <div className="p-0 md:p-10  min-h-screen">
        {store.loading && <Shimmer rows={20} />}
        {!store.loading &&
          !store.error &&
          store.isEmpty &&
          <NoResults />}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-25">
          {store.type === "users" &&
            (store.results ?? [])?.length > 0 &&
            store.results?.map((item) => (
              <UserCard key={item?.id} user={item as User} />
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {store.type === "repositories" &&
            (store.results ?? [])?.length > 0 &&
            store.results?.map((item) => (
              <RepoCard key={item?.id} repo={item as Repository} />
            ))}
        </div>
        {store.error && (
          <div className="text-rose-600 w-full text-center mt-2">
            {store.error}
          </div>
        )}
      </div>
      {store.hasMore && (
        <div ref={loadMoreRef} className="loading-indicator h-5">
          {store.loading ? (
            <div className="flex align-center justify-center w-full">
              <Loader />
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
});

export default SearchResponse;
