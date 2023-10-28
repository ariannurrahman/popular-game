import React from 'react';

export const CardSkeleton = () => {
  return (
    <div
      style={{ minHeight: '340px' }}
      className='w-full rounded-md border border-slate-700 shadow'
    >
      <div className='flex animate-pulse flex-col '>
        <div className='h-56 w-full rounded-md bg-slate-700 px-2' />
        <div className='flex-1 space-y-2 px-2 py-3'>
          <div className='mb-3 h-5 rounded bg-slate-700' />
          <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-row flex-nowrap items-center justify-center gap-3'>
              <div className='h- h-6 w-6 rounded-lg bg-slate-700'></div>
              <div className='h- h-6 w-6 rounded-lg bg-slate-700'></div>
              <div className='h- h-6 w-6 rounded-lg bg-slate-700'></div>
            </div>

            <div>
              <div className='h- h-6 w-12 rounded-lg bg-slate-700'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
