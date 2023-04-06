import Link from 'next/link';

import { Typography, IconButton } from '@/ui';
import { CartIcon, LikeIcon, NikeIcon } from '@/ui/icons';

const ROUTES = [
  {
    name: 'New & Featured',
    href: '/'
  },
  {
    name: 'Men',
    href: '/'
  },
  { name: 'Women', href: '/' },
  { name: 'Kids', href: '/' },
  { name: 'Sale', href: '/' },
  { name: 'Kids', href: '/' }
];

export const Header = () => (
  <header className='flex h-[64px] items-center justify-between gap-[20px] px-[36px]'>
    <div>
      <NikeIcon className='ml-[12px] h-[59px] w-[59px] scale-125' />
    </div>
    <div>
      <ul className='flex gap-[18px]'>
        {ROUTES.map((route, index) => (
          <li key={index}>
            <a href={route.href}>
              <Typography variant='title-2'>{route.name}</Typography>
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div>
      <Link className='mr-[12px]' href='/'>
        <IconButton icon={<LikeIcon />} />
      </Link>
      <Link href='/'>
        <IconButton icon={<CartIcon />} />
      </Link>
    </div>
  </header>
);
