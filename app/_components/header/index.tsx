import React from 'react';
import Image from 'next/image';
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';

interface IHeader {
  handleShowSidebar: () => void;
}

const Header = ({ handleShowSidebar }: IHeader) => {
  return (
    <header className='flex flex-row items-center justify-between gap-5 border bg-gray-100 px-2 drop-shadow-md sm:px-8'>
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
          className='relative h-10 w-full rounded-md bg-gray-300 px-5 outline-none hover:bg-gray-200 focus:bg-gray-200'
        />
      </div>
      <button className='md:hidden' onClick={handleShowSidebar}>
        <AiOutlineMenu />
      </button>
    </header>
  );
};

export { Header };
