'use client';

import React from 'react';
import Image from 'next/image';
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';
import classNames from 'classnames';

import { useSearchContext } from '@/app/_context/store';

interface IHeader {
  handleShowSidebar: () => void;
}

const Header = ({ handleShowSidebar }: IHeader) => {
  const { query, setQuery } = useSearchContext();

  return (
    <header className='header-container m-0 flex flex-row items-center justify-between gap-5 border-b-2 border-b-slate-600 bg-slate-900 px-2  sm:px-8'>
      <div>
        <Image
          priority
          src='/an.svg'
          alt='logo'
          className='object-contain'
          width={80}
          height={20}
        />
      </div>
      <div className='flex w-full justify-end'>
        <div className='relative transition-all md:w-[300px] lg:w-[300px] lg:hover:w-[400px]'>
          <div className='pointer-events-none absolute left-2 z-20 flex h-full w-7 items-center justify-center align-middle hover:left-10 hover:right-2'>
            <AiOutlineSearch className='h-6 w-6' />
          </div>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search your favorite game...'
            className={classNames({
              'relative h-10 w-full border-b-2 border-b-slate-600 bg-transparent pl-9 outline-none ':
                true,
            })}
          />
        </div>
      </div>
      <button className='md:hidden' onClick={handleShowSidebar}>
        <AiOutlineMenu />
      </button>
    </header>
  );
};

export { Header };
