import classnames from 'classnames';
import Image from 'next/image';
import type { ImageProps } from 'next/image';
import React from 'react';

import { ArrowIcon } from '../icons';

export interface GalleryProps extends ReactTagProps<'figure'> {
  /**
   * images
   */
  images: ImageProps[];
}

export const GALLERY_TEST_IDS = {
  CONTAINER: 'gallery-container',
  IMAGE: 'gallery-image'
};

export const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);

  const onNextClick = () => {
    const index = images.length > activeImageIndex + 1 ? activeImageIndex + 1 : 0;
    setActiveImageIndex(index);
  };

  const onBackClick = () => {
    const index = activeImageIndex - 1 < 0 ? images.length - 1 : activeImageIndex - 1;
    setActiveImageIndex(index);
  };

  return (
    <div className='flex gap-[1rem]' data-testId={GALLERY_TEST_IDS.CONTAINER}>
      <div className='flex flex-col gap-[1rem]'>
        {images.map((image, index) => (
          <div
            key={image.alt}
            data-testid={`${GALLERY_TEST_IDS.IMAGE}-${index}`}
            className={classnames('relative h-[3.5rem] w-[3.5rem]', {
              'backdrop-opacity-50': index === activeImageIndex
            })}
            onMouseMove={() => setActiveImageIndex(index)}
          >
            <div
              className={classnames('absolute z-20 h-[100%] w-[100%] rounded-[0.5rem]', {
                'block bg-black-200 opacity-20': index === activeImageIndex
              })}
            />
            <Image fill className='rounded-[0.5rem] object-fill' {...image} />
          </div>
        ))}
      </div>
      <div className='relative h-[40rem] w-[30rem] rounded-[0.5rem] rounded-sm object-fill'>
        <Image fill {...images[activeImageIndex]} />
        <div className='absolute bottom-4 right-4 flex gap-[0.5rem]'>
          <button className='rounded-full bg-white p-[0.5rem]' onClick={onBackClick}>
            <ArrowIcon className='rotate-180' />
          </button>
          <button className='rounded-full bg-white p-[0.5rem]' onClick={onNextClick}>
            <ArrowIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
