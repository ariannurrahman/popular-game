import React from 'react';

interface RatingProps {
  rating: number;
}

export const Rating = ({ rating }: RatingProps) => {
  return (
    <div className='m-0 flex h-6 w-12 items-center justify-center rounded-md bg-gray-800'>
      <p className='m-0 p-0 text-center text-white'>{rating}</p>
    </div>
  );
};
