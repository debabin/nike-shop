import type { ImageProps } from 'next/image';
import Image from 'next/image';

export interface ItemCardProps {
  /**
   * id
   */
  id: string;
  /**
   * image
   */
  image: ImageProps;
  /**
   * title
   */
  title: string;
  /**
   * type
   */
  type: string;
  /**
   * title
   */
  price: string;
}

export const CAROUSELITEM_TEST_IDS = {
  CONTAINER: 'carouselItem-container',
  IMAGE: 'carouselItem-image',
  PRICE: 'carouselItem-price',
  TYPE: 'carouselItem-type',
  TITLE: 'carouselItem-title'
} as const;

/**
 * ItemCard component
 */
export const ItemCard: React.FC<ItemCardProps> = ({ image, title, type, price }) => (
  <div data-testid={CAROUSELITEM_TEST_IDS.CONTAINER}>
    <div className='relative h-[28rem] w-[28rem]'>
      <Image fill data-testid={CAROUSELITEM_TEST_IDS.IMAGE} {...image} />
    </div>

    <div className='mt-[0.75rem] flex justify-between align-top'>
      <div>
        <h4 className='title-3' data-testid={CAROUSELITEM_TEST_IDS.TITLE}>
          {title}
        </h4>
        <p className='body-3 text-grey' data-testid={CAROUSELITEM_TEST_IDS.TYPE}>
          {type}
        </p>
      </div>

      <p className='body-3 text-grey' data-testid={CAROUSELITEM_TEST_IDS.PRICE}>
        {price}
      </p>
    </div>
  </div>
);
