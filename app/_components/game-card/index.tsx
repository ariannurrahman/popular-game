'use client';

import { useState, useMemo } from 'react';

import { IGameResults } from '@/app/_types/games';
import Image from 'next/image';
import classNames from 'classnames';
import { PlatformIcon } from '..';
import { TPlatform } from '@/app/_types/platform';

interface GameCardProps {
  data: IGameResults;
}

const IMAGE_HEIGHT = 'h-56'; // 14 rem

const GameCard = ({ data }: GameCardProps) => {
  const [activeCard, setActiveCard] = useState<IGameResults | undefined>();
  console.log('data', data);
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

  return (
    <div
      onMouseOut={onMouseOut}
      onMouseOver={() => onMouseOver(data)}
      className={classNames({
        'z-10 h-[300px] transition-all': isActiveCard,
        'relative bg-slate-300': true,
        'rounded-lg rounded-t-md border-2 shadow-sm': true,
        'scale-y-105 shadow-lg  ': isActiveCard,
      })}
    >
      <div className='z-10'>
        <div className='h-56 w-full rounded-t-sm'>
          <Image
            alt={data?.name}
            className='h-full rounded-t-md object-cover '
            height={0}
            loading='lazy'
            src={data?.background_image}
            style={{ objectFit: 'cover' }}
            width={300}
          />
        </div>
        <div className='px-2 py-2'>
          <p className='text-center font-bold text-gray-800'>{data?.name}</p>
          <div className='mt-2 flex flex-row flex-wrap justify-center gap-3 align-middle'>
            {sortedPlatformName?.map((slug) => (
              <PlatformIcon key={slug} platform={slug} />
            ))}
          </div>
        </div>
      </div>
      {isActiveCard && (
        <div
          className={classNames({
            'h-[120px] w-full transition-all': isActiveCard,
            'absolute left-0 z-40 -mt-1 overflow-hidden bg-slate-300':
              isActiveCard,
            'rounded-b-md shadow-sm': isActiveCard,
          })}
        >
          <div className={`${IMAGE_HEIGHT} w-full  rounded-t-sm`}>
            <h1>IM IN FRONT!!!</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export { GameCard };
