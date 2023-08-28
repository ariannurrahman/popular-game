import React from 'react';
import Image from 'next/image';
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';

interface IHeader {
  handleShowSidebar: () => void;
}

const Header = ({ handleShowSidebar }: IHeader) => {
  return (
    <header className='header-container m-0 flex w-full flex-row items-center justify-between gap-5 bg-slate-900 px-2 sm:px-8'>
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
      <div className='relative md:w-[300px] lg:w-[500px]'>
        <AiOutlineSearch className='absolute z-10 py-5 pl-5' />
        <input
          placeholder='Search your favorite game...'
          className='relative h-10 w-full rounded-md bg-blue-50 px-5 outline-none hover:bg-blue-50 focus:bg-blue-50'
        />
      </div>
      <button className='md:hidden' onClick={handleShowSidebar}>
        <AiOutlineMenu />
      </button>
    </header>
  );
};

export { Header };
