import type { GetSectionTrendQuery } from '@/gql';
import { getFileUrl } from '@/utils/helpers';

import { Carousel } from '../CarouselShoes/CarouselShoes';

type SectionTrendData = GetSectionTrendQuery['sectionTrend']['data']['attributes'];
interface TrendProps {
  data: SectionTrendData;
}

export const Trend: React.FC<TrendProps> = ({ data }) => (
  <section className='my-[3rem] flex flex-col items-center justify-between'>
    <Carousel
      title={data.sectionTitle}
      items={data.shoes.data.map((shoe, index) => ({
        id: index,
        title: shoe.attributes.name,
        price: shoe.attributes.price,
        type: shoe.attributes.type.data.attributes.name,
        image: getFileUrl(shoe.attributes.options[0].medias.data[0].attributes.url)
      }))}
    />
  </section>
);
