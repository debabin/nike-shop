'use client';

import type { GetSectionTrendQuery } from '@/gql';
import { Carousel } from '@/ui';
import { getFileUrl } from '@/utils/helpers';

type SectionTrendData = GetSectionTrendQuery['sectionTrend']['data']['attributes'];
export interface TrendProps {
  data: SectionTrendData;
}

export const Trend: React.FC<TrendProps> = ({ data }) => (
  <section className='scroll_container my-[3rem] flex flex-col items-center justify-between'>
    <Carousel
      title={data.sectionTitle}
      items={data.shoes.data.map((shoe) => ({
        id: shoe.id,
        title: shoe.attributes.name,
        price: shoe.attributes.price,
        type: shoe.attributes.type.data.attributes.name.replaceAll('_', ' '),
        image: getFileUrl(shoe.attributes.options[0].medias.data[0].attributes.url),
        category: shoe.attributes.type.data.attributes.slug
      }))}
    />
  </section>
);
