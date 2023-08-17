import React from 'react';
import Image from 'next/image';
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';

interface IHeader {
  handleShowSidebar: () => void;
}

const Header = ({ handleShowSidebar }: IHeader) => {
  return (
    <header className='bg-gray-100 border flex flex-row justify-between items-center gap-5 drop-shadow-md px-2 sm:px-8'>
      <div>
        <Image priority src='/an.svg' alt='logo' className='object-contain' width={80} height={20} />
      </div>
      <div className='md:w-[300px] lg:w-[500px] relative'>
        <AiOutlineSearch className='absolute pl-5 py-5 z-10' />
        <input
          placeholder='Search your favorite game...'
          className='relative rounded-full px-5 w-full h-10 bg-gray-300 hover:bg-gray-200 focus:bg-gray-200 outline-none'
        />
      </div>
      <button className='md:hidden' onClick={handleShowSidebar}>
        <AiOutlineMenu />
      </button>
    </header>
  );
};

export { Header };
