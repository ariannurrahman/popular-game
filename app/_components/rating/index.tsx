import React from 'react';

interface RatingProps {
  rating: number;
}

export const Rating = ({ rating }: RatingProps) => {
  return (
    <div className='m-0 flex h-5 w-10 items-center justify-center rounded-md bg-gray-800'>
      <p className='m-0 p-0 text-center text-sm text-white'>{rating}</p>
    </div>
  );
};
