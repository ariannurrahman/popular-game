'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

import { IGameResults } from '@/app/_types/games';
import { GameCard } from '@/app/_components';
import { fetchGames } from '@/app/actions';
import { useSearchContext } from '@/app/_context/store';

interface InfinityScrollGamesProps {
  initialData: IGameResults[] | undefined;
}

export const InfinityScrollGames = ({
  initialData,
}: InfinityScrollGamesProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { query } = useSearchContext();

  console.log('query', query);

  const [games, setGames] = useState(initialData);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();

  const loadMore = useCallback(async () => {
    if (games === undefined) return;

    const next = page + 1;
    const initData = [...games];
    const { data } = await fetchGames({ page: next, query });
    setPage(next);
    const results = data.results;

    const combineData = [...initData, ...results];

    setGames(combineData);
  }, [page, games, query]);

  const url = useCallback(() => {
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
    if (page) {
      current.set('page', page.toString());
    }
    const search = current.toString();
    const query = page ? `?${search}` : '';

    router.push(`${pathname}${query}`);
  }, [searchParams, page, pathname, router]);

  useEffect(() => {
    url();
  }, [url]);

  useEffect(() => {
    if (inView) {
      loadMore();
    }
  }, [loadMore, inView]);

  return (
    <>
      {games?.map((data) => <GameCard key={data.id} data={data} />)}
      <div ref={ref}>Loading</div>
    </>
  );
};
