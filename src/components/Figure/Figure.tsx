import type { ImageProps } from 'next/image';
import Image from 'next/image';
import React from 'react';

export interface FigureProps extends ReactTagProps<'figure'> {
  /**
   * image
   */
  image: ImageProps;
  /**
   * caption
   */
  caption?: string;
  /**
   * buttons
   */
  buttons: ReactTagProps<'button'>[];
}

export const FIGURE_TEST_IDS = {
  CONTAINER: 'carouselItem-container',
  IMAGE: 'carouselItem-image',
  CAPTION: 'carouselItem-caption',
  BUTTON: 'carouselItem-button'
} as const;

/**
 * Figure component
 */
export const Figure: React.FC<FigureProps> = ({ image, caption, buttons, ...props }) => (
  <figure className='relative h-[100%] w-[100%]' role='img' {...props}>
    <Image fill className='object-cover' data-testid={FIGURE_TEST_IDS.IMAGE} {...image} />

    <figcaption className='absolute bottom-6 left-6 z-[1]'>
      {caption && (
        <p className='sub-title text-white' data-testid={FIGURE_TEST_IDS.CAPTION}>
          {caption}
        </p>
      )}
      <div className='flex gap-[1rem]'>
        {buttons.map((button) => (
          <button
            className='title-2 mt-[1.5rem] flex items-center justify-center rounded-full bg-white px-[1.25rem] py-[0.575rem] text-[1rem] hover:bg-gray-200'
            data-testid={FIGURE_TEST_IDS.BUTTON}
            {...button}
          />
        ))}
      </div>
    </figcaption>
  </figure>
);
