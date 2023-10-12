'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

import { GameResult, Games } from '@/app/_types/games';
import { GameCard } from '@/app/_components';
import { useSearchContext } from '@/app/_context/store';
import { FetchGames, fetchGames } from '@/app/actions';
import useDebounce from '@/app/_hooks/debounce';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

interface InfinityScrollGamesProps {
  searchQuery: string | undefined;
  dataFetcher: ({ page, query }: FetchGames) => Promise<{ data: Games }>;
  initialData: Games;
}

export const InfinityScrollGames = ({
  searchQuery = undefined,
  dataFetcher,
  initialData,
}: InfinityScrollGamesProps) => {
  const [ref, inView] = useInView();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { query } = useSearchContext();

  const [gamesList, setGamesList] = useState<GameResult[]>(initialData.results);
  const [queryParams, setQueryParams] = useState<FetchGames>({
    page: 0,
    pageSize: 20,
    query,
  });

  useEffect(() => {
    const setInitialData = () => {
      setGamesList(initialData?.results);
    };
    setInitialData();
  }, [initialData]);

  const debouncedQuery = useDebounce(query, 1000);

  const loadMore = useCallback(async () => {
    let currentGames: GameResult[] = [];
    if (gamesList?.length) {
      currentGames = [...gamesList];
    }
    const { data } = await fetchGames({
      ...queryParams,
      page: queryParams.page + 1,
    });
    setQueryParams((prevState) => ({ ...prevState, page: prevState.page + 1 }));

    setGamesList([...currentGames, ...data?.results]);
  }, [gamesList, queryParams]);

  useEffect(() => {
    if (inView || debouncedQuery) {
      loadMore();
    }
  }, [debouncedQuery, loadMore, inView]);

  return (
    <>
      {gamesList?.map((eachGame) => (
        <GameCard data={eachGame} key={`${eachGame.id}+${eachGame.name}`} />
      ))}
      <div ref={ref}>Loading</div>
    </>
  );
};
