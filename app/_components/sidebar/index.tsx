import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

import { NAV_LINK } from '@/contants';

interface SidebarProps {
  isOpen: boolean;
  activeSegment: string | null;
}
const Sidebar = ({ isOpen, activeSegment = null }: SidebarProps) => {
  return (
    <aside
      className={classNames({
        'flex flex-col justify-start fixed gap-5 shadow-md': true, // layout
        'bg-gray-200': true, // colors
        'md:w-full md:sticky md:top-20 md:z-0 sm:top-120 z-20 fixed': true, // mobile positioning
        'md:h-[calc(100vh_-_64px)] h-full w-[240px]': true, // for height and width
        'transition-transform .4s ease-in-out md:-translate-x-0': true, //animations
        '-translate-x-full ': isOpen, //hide sidebar to the left when closed
      })}
    >
      <nav className='md:sticky top-0 md:top-16'>
        <ul className='flex flex-col'>
          {NAV_LINK.map(({ label, path, icon, url }) => (
            <Link
              key={label}
              href={path}
              className={classNames({
                'text-left flex justify-start px-5 py-3': true,
                'hover:text-zinc-500 ': true,
                underline: activeSegment === url,
              })}
            >
              <li className='flex flex-row justify-start items-center gap-5'>
                <div>{icon()}</div>
                <p className='md:text-md lg:text-lg font-bold'>{label}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export { Sidebar };
