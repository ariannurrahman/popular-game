'use client';

import React, { useCallback, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { GameCard } from '@/app/_components';
import { useInfiniteGames } from './hooks/useInfiniteGames';
import { CardSkeleton } from '../game-card/card-skeleton';

export const InfinityScrollGames = () => {
  const [ref, inView] = useInView();
  const { fetchNextPage, gamesData, debouncedQuery } = useInfiniteGames();

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
      <div className='relative z-10 grid grid-cols-1 justify-center gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
        {gamesData?.pages?.map((data) => {
          const _data = data?.data;
          return _data?.results?.map((eachGame) => {
            return (
              <GameCard
                key={`${eachGame.name}-${eachGame.id}`}
                data={eachGame}
              />
            );
          });
        })}
      </div>
      <div
        className='relative z-10 mt-5 grid grid-cols-1 justify-center gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'
        ref={ref}
      >
        {Array.from(Array(3).keys()).map((number) => {
          return <CardSkeleton key={number} />;
        })}
      </div>
    </>
  );
};
