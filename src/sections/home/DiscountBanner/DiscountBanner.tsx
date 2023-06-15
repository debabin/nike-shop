import React from 'react';
import ReactMarkdown from 'react-markdown';

import type { GetSectionDiscountQuery } from '@/gql';
import { Typography } from '@/ui';

type LayoutPreHeaderData = GetSectionDiscountQuery['sectionDiscount']['data']['attributes'];
interface DiscountBannerProps {
  data: LayoutPreHeaderData;
}

const DISCOUNT_SHOWING_INTERVAL = 5000;
export const DiscountBanner: React.FC<DiscountBannerProps> = ({ data }) => {
  const [direction, setDirection] = React.useState<'left' | 'right'>('right');
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const next = direction === 'right' ? 1 : -1;
      const isNextLast = activeIndex + next === data.items.length - 1;
      const isFirstLast = activeIndex + next === 0;

      setActiveIndex((prev) => prev + next);
      if (isNextLast) setDirection('left');
      if (isFirstLast) setDirection('right');
    }, DISCOUNT_SHOWING_INTERVAL);

    return () => clearInterval(interval);
  }, [data.items, activeIndex, direction]);

  return (
    <section className='flex bg-gray-100'>
      <ul
        className='w-full whitespace-nowrap py-[0.4rem] text-center transition-all duration-1000'
        style={{ translate: `${activeIndex * -100}%` }}
      >
        {data.items.map((item, index) => (
          <li key={index} className='inline-block w-full'>
            <Typography tag='span' variant='title-3'>
              {item.title}
            </Typography>
            <div className='mt-[0.5rem]'>
              <ReactMarkdown
                className='title-5'
                components={{
                  a: ({ node, ...props }) => (
                    <a className='underline' {...props}>
                      <strong>{props.children}</strong>
                    </a>
                  )
                }}
              >
                {item.description}
              </ReactMarkdown>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
