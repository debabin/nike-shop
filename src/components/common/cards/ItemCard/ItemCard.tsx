export interface ItemCardProps {
  /**
   * image
   */
  image: React.ComponentPropsWithoutRef<'img'>;
  /**
   * title
   */
  title: string;
  /**
   * type
   */
  type: string;
  /**
   * price
   */
  price: string;
}

export const ITEMCARD_TEST_IDS = {
  CONTAINER: 'itemCard-container',
  IMAGE: 'itemCard-image',
  PRICE: 'itemCard-price',
  TYPE: 'itemCard-type',
  TITLE: 'itemCard-title'
} as const;

/**
 * ItemCard component
 */
export const ItemCard: React.FC<ItemCardProps> = ({ image, title, type, price }) => (
  <div data-testid={ITEMCARD_TEST_IDS.CONTAINER}>
    <div className='relative h-[28rem] w-[28rem] overflow-hidden'>
      <img
        alt={image.alt}
        className='object-fill'
        data-testid={ITEMCARD_TEST_IDS.IMAGE}
        {...image}
      />
    </div>

    <div className='mt-[0.75rem] flex justify-between align-top'>
      <div>
        <h4 className='title-3' data-testid={ITEMCARD_TEST_IDS.TITLE}>
          {title}
        </h4>
        <p className='body-3 text-grey' data-testid={ITEMCARD_TEST_IDS.TYPE}>
          {type}
        </p>
      </div>

      <p className='body-3 text-grey' data-testid={ITEMCARD_TEST_IDS.PRICE}>
        {price}
      </p>
    </div>
  </div>
);
