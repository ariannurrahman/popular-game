import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

import { NAV_LINK } from '@/app/_constants';

interface SidebarProps {
  isOpen: boolean;
  activeSegment: string | null;
}
const Sidebar = ({ isOpen, activeSegment = null }: SidebarProps) => {
  return (
    <aside
      className={classNames({
        'flex flex-col justify-start gap-5 shadow-md': true, // layout
        'bg-slate-900': true, // colors
        'fixed top-0 z-20 md:sticky md:z-0 md:w-full': true, // mobile positioning
        'h-full w-[240px]': true, // for height and width
        '.4s transition-transform ease-in-out md:-translate-x-0': true, //animations
        '-translate-x-full ': isOpen, //hide sidebar to the left when closed
      })}
    >
      <nav className='top-0 md:sticky'>
        <ul className='mt-3 flex flex-col gap-3 px-3'>
          {NAV_LINK.map(({ label, path, icon, url }) => (
            <Link
              key={label}
              href={path}
              className={classNames({
                'flex justify-start px-5 py-3 text-left': true,
                'rounded-md  border-2': activeSegment === url,
                'hover:rounded-md hover:border-2 hover:bg-slate-950': true,
              })}
            >
              <li className='flex flex-row items-center justify-start gap-5'>
                <div>{icon()}</div>
                <p className='md:text-md lg:text-md font-bold hover:text-zinc-500'>
                  {label}
                </p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export { Sidebar };
