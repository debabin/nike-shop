import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import type { Country, GetCountriesQuery } from '@/gql';
import { gql } from '@/gql';
import { Banner, CarouselShoes, DiscountBanner, Membership } from '@/sections/home';
import { Header, PreHeader, SubFooter, Footer } from '@/ui';

export const getStaticPaths: GetStaticPaths = async () => {
  const { countries } = await gql.getCountries();
  const paths = countries.data.map((country) => ({ params: { code2: country.attributes.code2 } }));

  return { fallback: true, paths };
};

export const getStaticProps: GetStaticProps<{
  country: Country;
}> = async ({ params }) => {
  console.log('params', params);
  const { countries } = await gql.getCountries();
  const country = countries.data.find((country) => country.attributes.code2 === 'asd');

  return { props: { country } };
};

const Home = ({ country }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log('countries', country);
  return (
    <>
      <PreHeader />
      <Header />
      <DiscountBanner />
      <Banner />
      <CarouselShoes />
      <Membership />
      <SubFooter />
      <Footer />
    </>
  );
};

export default Home;
