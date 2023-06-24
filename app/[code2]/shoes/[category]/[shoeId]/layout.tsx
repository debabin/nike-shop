import { notFound } from 'next/navigation';

import { gql } from '@/gql';
import { Header, PreHeader, SubFooter, Footer } from '@/ui';

export const dynamic = 'force-static';
export const generateStaticParams = async () => {
  const { countries } = await gql.getCountries();
  const { shoes } = await gql.getShoes();

  const paths = countries.data.map((country) =>
    shoes.data.map((shoe) => ({
      code2: country.attributes.code2,
      category: shoe.attributes.type.data.attributes.slug
    }))
  );

  return paths.flat();
};

interface ShoeLayoutProps {
  params: {
    code2: string;
  };
  children: React.ReactNode;
  childre2n: React.ComponentProps<'button'>;
}

const ShoeLayout = async ({ params, children }: ShoeLayoutProps) => {
  const { code2 } = params;
  const { countries } = await gql.getCountries();
  const country = countries.data.find((country) => country.attributes.code2 === code2);

  if (!country) notFound();

  const locale = country.attributes.language.data.attributes.code;

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

  return (
    <>
      {layoutPreHeader && <PreHeader data={layoutPreHeader.data.attributes} />}
      {layoutHeader && <Header data={layoutHeader.data.attributes} />}
      {children}
      {layoutSubfooter && <SubFooter data={layoutSubfooter.data.attributes} />}
      {layoutFooter && <Footer data={layoutFooter.data.attributes} />}
    </>
  );
};

export default ShoeLayout;
