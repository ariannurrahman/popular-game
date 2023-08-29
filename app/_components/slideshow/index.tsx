'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.scss';

import Slider from 'react-slick';
import Image from 'next/image';

import { ShortScreenshot } from '@/app/_types/games';

interface SlideshowProps {
  data: ShortScreenshot[];
}

export const Slideshow = ({ data }: SlideshowProps) => {
  const SETTINGS = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Slider {...SETTINGS} className='slide-container'>
      {data?.map(({ image, id }) => {
        return (
          <div key={id} className='h-48'>
            <Image
              src={image}
              className='h-full rounded-t-md object-cover'
              height={0}
              width={300}
              alt={image}
            />
          </div>
        );
      })}
    </Slider>
  );
};
