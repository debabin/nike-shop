import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { notFound } from 'next/navigation';

import type {
  GetLayoutFooterQuery,
  GetLayoutHeaderQuery,
  GetLayoutPreHeaderQuery,
  GetLayoutSubfooterQuery,
  GetSectionDiscountQuery,
  GetSectionShoeQuery,
  GetSectionTrendQuery,
  GetShoeQuery
} from '@/gql';
import { gql } from '@/gql';
import { Shoe, DiscountBanner, Trend } from '@/sections';
import { PreHeader, Header, SubFooter, Footer } from '@/ui';

export const getStaticPaths: GetStaticPaths = async () => {
  const { countries } = await gql.getCountries();
  const { shoes } = await gql.getShoes();

  const paths = countries.data.map((country) =>
    shoes.data.map((shoe) => ({
      params: {
        code2: country.attributes.code2,
        shoeId: shoe.id,
        category: shoe.attributes.type.data.attributes.slug
      }
    }))
  );

  return { fallback: true, paths: paths.flat() };
};

interface ShoeProps {
  params: {
    code2: string;
    shoeId: string;
  };
}

export const getStaticProps: GetStaticProps<{
  layoutPreHeader: GetLayoutPreHeaderQuery['layoutPreHeader'];
  layoutHeader: GetLayoutHeaderQuery['layoutHeader'];
  layoutSubfooter: GetLayoutSubfooterQuery['layoutSubfooter'];
  layoutFooter: GetLayoutFooterQuery['layoutFooter'];
  shoe: GetShoeQuery['shoe'];
  sectionShoe: GetSectionShoeQuery['sectionShoe'];
  sectionDiscount: GetSectionDiscountQuery['sectionDiscount'];
  sectionTrend: GetSectionTrendQuery['sectionTrend'];
}> = async ({ params }) => {
  const { code2, shoeId } = params as ShoeProps['params'];
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

  const { layoutHeader } = await gql.getLayoutHeader({
    id: pageShoe.data.attributes.layout_header.data.id,
    locale
  });

  const { layoutPreHeader } = await gql.getLayoutPreHeader({
    id: pageShoe.data.attributes.layout_pre_header.data.id,
    locale
  });

  const { layoutSubfooter } = await gql.getLayoutSubfooter({
    id: pageShoe.data.attributes.layout_subfooter.data.id,
    locale
  });

  const { layoutFooter } = await gql.getLayoutFooter({
    id: pageShoe.data.attributes.layout_footer.data.id,
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

  return {
    props: {
      layoutFooter,
      layoutHeader,
      layoutPreHeader,
      layoutSubfooter,
      shoe,
      sectionDiscount,
      sectionShoe,
      sectionTrend
    }
  };
};

const ShoePage = ({
  layoutFooter,
  layoutHeader,
  layoutPreHeader,
  layoutSubfooter,
  shoe,
  sectionDiscount,
  sectionShoe,
  sectionTrend
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    {layoutPreHeader && <PreHeader data={layoutPreHeader.data.attributes} />}
    {layoutHeader && <Header data={layoutHeader.data.attributes} />}
    {sectionDiscount && <DiscountBanner data={sectionDiscount.data.attributes} />}
    {shoe && sectionShoe && (
      <Shoe data={{ shoe: shoe.data.attributes, ...sectionShoe.data.attributes }} />
    )}
    {sectionTrend && <Trend data={sectionTrend.data.attributes} />}
    {layoutSubfooter && <SubFooter data={layoutSubfooter.data.attributes} />}
    {layoutFooter && <Footer data={layoutFooter.data.attributes} />}
  </>
);

export default ShoePage;
