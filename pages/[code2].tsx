import type { ParsedUrlQuery } from 'querystring';

import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import type {
  GetLayoutFooterQuery,
  GetLayoutHeaderQuery,
  GetLayoutPreHeaderQuery,
  GetLayoutSubfooterQuery,
  GetSectionBannerQuery,
  GetSectionDiscountQuery,
  GetSectionMembershipQuery,
  GetSectionTrendQuery
} from '@/gql';
import { gql } from '@/gql';
import { Banner, DiscountBanner, Membership, Trend } from '@/sections/home';
import { Header, PreHeader, SubFooter, Footer } from '@/ui';

export const getStaticPaths: GetStaticPaths = async () => {
  const { countries } = await gql.getCountries();
  const paths = countries.data.map((country) => ({ params: { code2: country.attributes.code2 } }));

  return { fallback: true, paths };
};

interface Params extends ParsedUrlQuery {
  code2: string;
}

export const getStaticProps: GetStaticProps<{
  layoutPreHeader: GetLayoutPreHeaderQuery['layoutPreHeader'];
  layoutHeader: GetLayoutHeaderQuery['layoutHeader'];
  layoutSubfooter: GetLayoutSubfooterQuery['layoutSubfooter'];
  layoutFooter: GetLayoutFooterQuery['layoutFooter'];
  sectionBanner: GetSectionBannerQuery['sectionBanner'];
  sectionMembership: GetSectionMembershipQuery['sectionMembership'];
  sectionDiscount: GetSectionDiscountQuery['sectionDiscount'];
  sectionTrend: GetSectionTrendQuery['sectionTrend'];
}> = async ({ params }) => {
  const { code2 } = params as Params;
  const { countries } = await gql.getCountries();
  const country = countries.data.find((country) => country.attributes.code2 === code2);

  if (!country) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }

  const locale = country.attributes.language.data.attributes.code;

  const { pageHome } = await gql.getPageHome({
    id: country.attributes.page_home.data.id,
    locale
  });

  const { sectionTrend } = await gql.getSectionTrend({
    id: pageHome.data.attributes.section_trend.data.id,
    locale
  });

  const { sectionBanner } = await gql.getSectionBanner({
    id: pageHome.data.attributes.section_membership.data.id,
    locale
  });

  const { sectionMembership } = await gql.getSectionMembership({
    id: pageHome.data.attributes.section_membership.data.id,
    locale
  });

  const { sectionDiscount } = await gql.getSectionDiscount({
    id: pageHome.data.attributes.section_discount.data.id,
    locale
  });

  const { layoutHeader } = await gql.getLayoutHeader({
    id: pageHome.data.attributes.layout_header.data.id,
    locale
  });

  const { layoutPreHeader } = await gql.getLayoutPreHeader({
    id: pageHome.data.attributes.layout_pre_header.data.id,
    locale
  });

  const { layoutSubfooter } = await gql.getLayoutSubfooter({
    id: pageHome.data.attributes.layout_subfooter.data.id,
    locale
  });

  const { layoutFooter } = await gql.getLayoutFooter({
    id: pageHome.data.attributes.layout_footer.data.id,
    locale
  });

  return {
    props: {
      layoutFooter,
      layoutHeader,
      layoutPreHeader,
      layoutSubfooter,
      sectionBanner,
      sectionDiscount,
      sectionMembership,
      sectionTrend
    }
  };
};

const Home = ({
  sectionTrend,
  sectionBanner,
  sectionMembership,
  sectionDiscount,
  layoutHeader,
  layoutPreHeader,
  layoutSubfooter,
  layoutFooter
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    {layoutPreHeader && <PreHeader data={layoutPreHeader.data.attributes} />}
    {layoutHeader && <Header data={layoutHeader.data.attributes} />}
    {sectionDiscount && <DiscountBanner data={sectionDiscount.data.attributes} />}
    {sectionBanner && <Banner data={sectionBanner.data.attributes} />}
    {sectionTrend && <Trend data={sectionTrend.data.attributes} />}
    {sectionMembership && <Membership data={sectionMembership.data.attributes} />}
    {layoutSubfooter && <SubFooter data={layoutSubfooter.data.attributes} />}
    {layoutFooter && <Footer data={layoutFooter.data.attributes} />}
  </>
);

export default Home;
