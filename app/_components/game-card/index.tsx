'use client';

import { useState, useMemo } from 'react';
import { isMobile } from 'react-device-detect';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';

import { IGameResults } from '@/app/_types/games';
import { TPlatform } from '@/app/_types/platform';
import { ActiveCard } from './active-card';
import { PlatformIcon, Rating, Slideshow } from '..';

interface GameCardProps {
  data: IGameResults;
}

const IMAGE_HEIGHT = 'h-56'; // 14 rem

function GameCard({ data }: GameCardProps) {
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

  const onMouseOver = () => setActiveCard(data);

  const onMouseOut = () => setActiveCard(undefined);

  const onClickViewMore = () => onMouseOver();

  const onClickViewLess = () => onMouseOut();

  return (
    <div
      onMouseOut={isMobile ? undefined : onMouseOut}
      onMouseOver={isMobile ? undefined : onMouseOver}
      className={classNames({
        'z-10 transition-all': isActiveCard,
        'relative bg-slate-800': true,
        'rounded-b-lg rounded-t-lg shadow-md': true,
        'scale-y-105 rounded-b-none shadow-lg': isActiveCard,
        'h-[340]px': isMobile,
        'h-[330]px': !isMobile,
      })}
    >
      <div className='z-10'>
        <div
          className={classNames({
            'w-full rounded-t-sm': true,
            'h-50': isActiveCard,
            'h-56': !isActiveCard,
          })}
        >
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
        <div className='px-5 py-3 text-center'>
          <Link
            href={`/game/${data.id}`}
            className='overflow-hidden text-ellipsis whitespace-nowrap font-bold text-slate-100 hover:text-slate-300'
          >
            {data?.name}
          </Link>
          <div className='mt-3 flex flex-row items-center justify-between'>
            <div className='flex flex-row flex-nowrap items-center justify-center gap-3'>
              {sortedPlatformName?.map((slug) => (
                <PlatformIcon key={slug} platform={slug} />
              ))}
            </div>
            <Rating rating={data?.metacritic} />
          </div>
          <div
            className={classNames({
              'mt-2': true,
              'relative mt-3 sm:hidden': !activeCard,
              hidden: activeCard,
            })}
          >
            <p
              onClick={onClickViewMore}
              className='text-sm text-slate-100 underline'
            >
              View More
            </p>
          </div>
        </div>
      </div>
      {isActiveCard && (
        <ActiveCard
          isMobile={isMobile}
          imgHeight={IMAGE_HEIGHT}
          isActive={isActiveCard}
          data={activeCard}
          onClickViewLess={onClickViewLess}
        />
      )}
    </div>
  );
}

export { GameCard };
