import { AiFillHome, AiFillExclamationCircle } from 'react-icons/ai';

interface TPARENT_PLATFORM_SLUG {
  img: string;
}

export const PARENT_PLATFORM_SLUG: Record<string, TPARENT_PLATFORM_SLUG> = {
  xbox: { img: '/xbox.png' },
  switch: { img: '/nintendo-switch.png' },
  pc: { img: '/pc.png' },
  playstation: { img: '/playstation.png' },
  linux: { img: '/linux.png' },
  mac: { img: '/apple.png' },
};

export const NAV_LINK = [
  {
    label: 'Home',
    path: '/',
    url: null,
    icon: () => <AiFillHome className='text-xl' />,
  },

  {
    label: 'About',
    path: '/about',
    url: 'about',
    icon: () => <AiFillExclamationCircle className='text-xl' />,
  },
];
