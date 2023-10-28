import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useInfiniteQuery } from '@tanstack/react-query';

import useDebounce from '@/app/_hooks/debounce';
import { useSearchContext } from '@/app/_context/store';
import { fetchGames } from '@/app/actions';
import { APP_CONFIG, QUERY_CONFIG } from '@/app/config';

export const useInfiniteGames = () => {
  const router = useRouter();

  const { query } = useSearchContext();
  const debouncedQuery = useDebounce(query, APP_CONFIG.debounceDelay);

  const {
    data: gamesData,
    fetchNextPage,
    remove,
  } = useInfiniteQuery({
    queryKey: ['/games', debouncedQuery],
    queryFn: ({ pageParam = 1 }) => {
      return fetchGames({
        page: pageParam,
        query,
        pageSize: QUERY_CONFIG.limit,
      });
    },
    getNextPageParam: (lastPage, allPages) => {
      console.log('triggered?', lastPage?.data?.results?.length);
      const nextPage =
        lastPage?.data?.results?.length === QUERY_CONFIG.limit
          ? allPages.length + 1
          : undefined;
      return nextPage;
    },
  });

  console.log('debouncedQuery', debouncedQuery);
  console.log('query', query);

  useEffect(() => {
    if (!debouncedQuery) return;
    const initQuery = () => {
      router.replace(`?query=${debouncedQuery}`);
      remove();
    };
    initQuery();
  }, [debouncedQuery, remove, router]);

  return {
    fetchNextPage,
    gamesData,
    debouncedQuery,
  };
};
