import Link from 'next/link';
import React from 'react';

import { Typography } from '@/ui';
import { JordanIcon, ConverseIcon } from '@/ui/icons';

const ROUTES = [
  {
    name: 'Find a Store',
    href: '/'
  },
  {
    name: 'Help',
    href: '/'
  },
  { name: 'Join Us', href: '/' },
  { name: 'Sign In', href: '/' }
];

export const PreHeader = () => (
  <div className='h-max-[60px] flex items-center justify-between bg-gray-100 px-[36px] py-[10px]'>
    <ul className='flex'>
      <li className='px-[12px]'>
        <Link href='/'>
          <JordanIcon />
        </Link>
      </li>
      <li className='px-[12px]'>
        <Link href='/'>
          <ConverseIcon />
        </Link>
      </li>
    </ul>
    <div className='flex items-center justify-center'>
      {ROUTES.map((route, index) => (
        <React.Fragment key={index}>
          <Link className='mx-[8px] px-[8px] py-[4px]' href={route.href}>
            <Typography variant='link'>{route.name}</Typography>
          </Link>

          <Typography tag='div' variant='link'>
            {ROUTES.length - 1 !== index && <span>|</span>}
          </Typography>
        </React.Fragment>
      ))}
    </div>
  </div>
);
