import Head from 'next/head';
import Image from 'next/image';

import { Banner, CarouselShoes, DiscountBanner } from '@/sections/home';
import { Header, PreHeader } from '@/ui';

const Home = () => (
  <>
    <PreHeader />
    <Header />
    <DiscountBanner />
    <Banner />
    <CarouselShoes />
  </>
);

export default Home;
