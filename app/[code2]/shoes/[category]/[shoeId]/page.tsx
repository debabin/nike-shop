import { notFound } from 'next/navigation';

import { gql } from '@/gql';
import { DiscountBanner, Trend } from '@/sections';

import { Shoe } from './_sections';

export const generateStaticParams = async () => {
  const { countries } = await gql.getCountries();
  const { shoes } = await gql.getShoes();

  const paths = countries.data.map((country) =>
    shoes.data.map((shoe) => ({
      code2: country.attributes.code2,
      shoeId: shoe.id,
      category: shoe.attributes.type.data.attributes.slug
    }))
  );

  return paths.flat();
};

interface ShoeProps {
  params: {
    code2: string;
    shoeId: string;
  };
}

const ShoePage = async ({ params }: ShoeProps) => {
  const { code2, shoeId } = params;
  const { countries } = await gql.getCountries();
  const country = countries.data.find((country) => country.attributes.code2 === code2);

  if (!country) notFound();

  const locale = country.attributes.language.data.attributes.code;

  const { shoe } = await gql.getShoe({ locale, id: shoeId });

  if (!shoe.data) notFound();

  const { pageShoe } = await gql.getPageShoe({
    id: country.attributes.page_shoe.data.id,
    locale
  });

  const { sectionDiscount } = await gql.getSectionDiscount({
    id: pageShoe.data.attributes.section_discount.data.id,
    locale
  });

  const { sectionTrend } = await gql.getSectionTrend({
    id: pageShoe.data.attributes.section_trend.data.id,
    locale
  });

  const { sectionShoe } = await gql.getSectionShoe({
    id: pageShoe.data.attributes.section_shoe.data.id,
    locale
  });

  return (
    <>
      {sectionDiscount && <DiscountBanner data={sectionDiscount.data.attributes} />}
      {shoe && sectionShoe && (
        <Shoe data={{ shoe: shoe.data.attributes, ...sectionShoe.data.attributes }} />
      )}
      {sectionTrend && <Trend data={sectionTrend.data.attributes} />}
    </>
  );
};

export default ShoePage;
