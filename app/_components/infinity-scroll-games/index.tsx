'use client';

import React, { useCallback, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { GameCard } from '@/app/_components';
import { useInfiniteGames } from './hooks/useInfiniteGames';

export const InfinityScrollGames = () => {
  const [ref, inView] = useInView();
  const { fetchNextPage, gamesData, debouncedQuery } = useInfiniteGames();

  const loadMore = useCallback(async () => {
    console.log('triggered?');
    fetchNextPage();
  }, [fetchNextPage]);

  useEffect(() => {
    if (inView || debouncedQuery) {
      loadMore();
    }
  }, [debouncedQuery, loadMore, inView]);

  return (
    <>
      {gamesData?.pages?.map((data) => {
        const _data = data?.data;
        return _data?.results?.map((eachGame) => {
          return (
            <GameCard key={`${eachGame.name}-${eachGame.id}`} data={eachGame} />
          );
        });
      })}
      <div ref={ref}>Loading</div>
    </>
  );
};
