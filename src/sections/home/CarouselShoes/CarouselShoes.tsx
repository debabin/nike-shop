import React from 'react';
import { ItemCard } from 'src/components/cards';

import { Typography, ArrowButton } from '@/ui';

type CarouselItem = {
  id: string;
  image: string;
  title: string;
  type: string;
  price: string;
};

interface CarouselProps {
  title: string;
  items: CarouselItem[];
}

export const Carousel: React.FC<CarouselProps> = ({ title, items }) => {
  const [activeNumber, setActiveNumber] = React.useState(1);
  const scrollRef = React.useRef<HTMLUListElement>(null);

  React.useEffect(() => {
    const container = scrollRef.current;
    const handler = () => {
      if (container) {
        const elementWidth = scrollRef.current.scrollWidth / items.length;
        const newActiveNumber =
          1 +
          items.length -
          Math.floor(
            Math.ceil(
              Math.ceil(scrollRef.current.scrollWidth) - Math.ceil(scrollRef.current.scrollLeft)
            ) / Math.floor(elementWidth)
          );

        if (activeNumber !== newActiveNumber) {
          setActiveNumber(newActiveNumber);
        }
      }
    };

    if (container) {
      container.addEventListener('scroll', handler, {
        capture: false,
        passive: true
      });
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handler);
      }
    };
  }, [scrollRef, activeNumber, items.length]);

  const onNextClick = () => {
    const nextActiveNumber = activeNumber + 1;

    scrollRef.current?.scrollTo({
      left: scrollRef.current.scrollLeft + scrollRef.current.scrollWidth / items.length,
      behavior: 'smooth'
    });
    setActiveNumber(nextActiveNumber);
  };

  const onBackClick = () => {
    const prevActiveNumber = activeNumber - 1;
    scrollRef.current?.scrollTo({
      left: scrollRef.current.scrollLeft - scrollRef.current.scrollWidth / items.length,
      behavior: 'smooth'
    });
    setActiveNumber(prevActiveNumber);
  };

  const isBackDisabled = activeNumber === 1;
  const isNextDisabled = items.length - 1 === activeNumber;

  return (
    <div className='w-full max-w-[90rem] xl:mx-auto'>
      <div className='flex items-center justify-between px-[2.25rem]'>
        <Typography tag='h2' variant='title-3'>
          {title}
        </Typography>

        <div className='hidden items-center justify-between gap-[0.938rem] md:flex'>
          <ArrowButton direction='left' disabled={isBackDisabled} onClick={onBackClick} />
          <ArrowButton disabled={isNextDisabled} onClick={onNextClick} />
        </div>
      </div>

      <ul
        ref={scrollRef}
        className='mt-[2rem] flex w-full snap-x snap-mandatory scroll-p-[2.25rem] gap-[0.75rem] overflow-x-auto scroll-smooth pb-[1.875rem] ps-[2.25rem] transition'
      >
        {items.map((item) => (
          <li key={item.id} className='snap-start'>
            <ItemCard {...item} image={{ alt: item.title, src: item.image }} />
          </li>
        ))}
        <li className='shrink-0 grow-0 basis-[2.25rem] ' />
      </ul>
    </div>
  );
};
