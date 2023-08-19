'use client';

import { useState, useMemo } from 'react';

import { IGameResults } from '@/app/_types/games';
import Image from 'next/image';
import classNames from 'classnames';
import { PlatformIcon, Rating, Slideshow } from '..';
import { TPlatform } from '@/app/_types/platform';
import { ActiveCard } from './active-card';

interface GameCardProps {
  data: IGameResults;
}

const IMAGE_HEIGHT = 'h-56'; // 14 rem

const GameCard = ({ data }: GameCardProps) => {
  const [activeCard, setActiveCard] = useState<IGameResults | undefined>();

  const isActiveCard = useMemo(() => {
    return activeCard?.id === data.id;
  }, [data, activeCard?.id]);

  const sortedPlatformName: TPlatform[] = useMemo(() => {
    return data?.parent_platforms
      ?.map(({ platform }) => {
        return platform.slug;
      })
      .sort();
  }, [data]);

  const onMouseOver = (data: IGameResults) => {
    setActiveCard(data);
  };

  const onMouseOut = () => {
    setActiveCard(undefined);
  };

  console.log('activeCard', activeCard);

  return (
    <div
      onMouseOut={onMouseOut}
      onMouseOver={() => onMouseOver(data)}
      className={classNames({
        'z-10  transition-all': isActiveCard,
        'relative h-[316px] bg-slate-300': true,
        'rounded-lg rounded-t-md shadow-md': true,
        'scale-y-105 shadow-lg': isActiveCard,
      })}
    >
      <div className='z-10'>
        <div className={`${IMAGE_HEIGHT} rounded-t-sm' w-full`}>
          {activeCard ? (
            <Slideshow data={activeCard?.short_screenshots} />
          ) : (
            <Image
              alt={data?.name}
              className='h-full rounded-t-md object-cover'
              height={0}
              width={300}
              loading='lazy'
              src={data?.background_image}
            />
          )}
        </div>
        <div className='px-5 py-3'>
          <p className='mb-3 overflow-hidden text-ellipsis whitespace-nowrap text-center font-bold text-gray-800 '>
            {data?.name}
          </p>
          <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-row flex-nowrap items-center justify-center gap-3'>
              {sortedPlatformName?.map((slug) => (
                <PlatformIcon key={slug} platform={slug} />
              ))}
            </div>
            <Rating rating={data?.metacritic} />
          </div>
        </div>
      </div>
      {isActiveCard && (
        <ActiveCard
          imgHeight={IMAGE_HEIGHT}
          isActive={isActiveCard}
          data={activeCard}
        />
      )}
    </div>
  );
};

export { GameCard };
