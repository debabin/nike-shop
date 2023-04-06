import Link from 'next/link';
import React from 'react';

import { Typography } from '@/ui';

const items = [
  {
    title: 'Up To 50% Off',
    description: 'The End of Season Sale is on.',
    link: { label: 'Shop', href: '/' }
  },
  {
    title: 'Up To 50% Off 2 ',
    description: 'The End of Season Sale is on. 2',
    link: { label: 'Shop 2', href: '/' }
  }
];

const DISCOUNT_SHOWING_INTERVAL = 5000;
export const DiscountBanner = () => {
  const [isFisrt, setIsFirst] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsFirst((prev) => !prev);
    }, DISCOUNT_SHOWING_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='flex bg-gray-100'>
      <ul
        className={`w-full translate-x-[${
          isFisrt ? '0%' : '-100%'
        }] whitespace-nowrap py-[0.4rem] text-center transition duration-1000`}
      >
        {items.map((item, index) => (
          <li key={index} className='inline-block w-full'>
            <Typography tag='span' variant='title-3'>
              {item.title}
            </Typography>
            <div className='mt-[0.5rem]'>
              <Typography tag='p' variant='body-1'>
                {item.description} <Link href={item.link.href}>{item.link.label}</Link>
              </Typography>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
