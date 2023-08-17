import { AiFillHome, AiFillExclamationCircle } from 'react-icons/ai';

export const NAV_LINK = [
  {
    label: 'Home',
    path: '/',
    url: null,
    icon: () => <AiFillHome className='text-3xl' />,
  },

  {
    label: 'About',
    path: '/about',
    url: 'about',
    icon: () => <AiFillExclamationCircle className='text-3xl' />,
  },
];
