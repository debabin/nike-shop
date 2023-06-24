import { gql } from '@/gql';
import { DiscountBanner, Trend } from '@/sections';
import { PreHeader, Header, SubFooter, Footer } from '@/ui';

import { Banner, Membership } from './_sections';

export const dynamic = 'force-static';
export const generateStaticParams = async () => {
  const { countries } = await gql.getCountries();
  const paths = countries.data.map((country) => ({ code2: country.attributes.code2 }));

  return paths;
};

interface HomeProps {
  params: {
    code2: string;
  };
}

const HomePage = async ({ params }: HomeProps) => {
  const { code2 } = params;
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

  return (
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
};

export default HomePage;
