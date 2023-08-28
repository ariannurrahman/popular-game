import React from 'react';

interface RatingProps {
  rating: number;
}

export const Rating = ({ rating }: RatingProps) => {
  return (
    <div className='m-0 flex h-6 w-12 items-center justify-center rounded-lg border border-slate-50 bg-slate-300 p-1'>
      <p className='m-0 p-0 text-center text-sm font-semibold text-black'>
        {rating}
      </p>
    </div>
  );
};
