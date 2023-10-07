'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

import { GameResult } from '@/app/_types/games';
import { GameCard } from '@/app/_components';
import { useSearchContext } from '@/app/_context/store';
import { FetchGames, fetchGames } from '@/app/actions';
import useDebounce from '@/app/_hooks/debounce';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

interface InfinityScrollGamesProps {
  searchQuery: string | undefined;
}

export const InfinityScrollGames = ({
  searchQuery = undefined,
}: InfinityScrollGamesProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { query } = useSearchContext();

  const [queryParams, setQueryParams] = useState<FetchGames>({
    page: 1,
    pageSize: 20,
    query,
  });
  const [ref, inView] = useInView();

  const debouncedQuery = useDebounce(query, 1000);

  const {
    data: gamesData,
    fetchNextPage,
    remove,
  } = useInfiniteQuery({
    queryKey: ['/games', queryParams.page, queryParams.query],
    queryFn: ({ pageParam = 1 }) => {
      return fetchGames({ ...queryParams, page: pageParam, query });
    },
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        lastPage.data.results.length === 20 ? allPages.length + 1 : undefined;
      return nextPage;
    },
  });

  useEffect(() => {
    const initQuery = () => {
      if (debouncedQuery) {
        remove();
      }
    };
    initQuery();
  }, [debouncedQuery, remove]);

  const loadMore = useCallback(async () => {
    fetchNextPage();
  }, [fetchNextPage]);

  useEffect(() => {
    if (inView || debouncedQuery) {
      loadMore();
    }
  }, [debouncedQuery, loadMore, inView]);

  return (
    <>
      {gamesData?.pages.map((data) => {
        const _data = data.data;
        return _data.results.map((eachGame) => {
          return (
            <GameCard key={`${eachGame.name}-${eachGame.id}`} data={eachGame} />
          );
        });
      })}
      <div ref={ref}>Loading</div>
    </>
  );
};
