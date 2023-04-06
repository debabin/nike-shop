import { Typography, Button } from '@/ui';

export const Banner = () => (
  <section className='my-[3rem]'>
    <div className='flex max-w-[80rem] flex-col items-center px-[2.25rem] text-center'>
      <Typography tag='p' variant='title-3'>
        Just In
      </Typography>
      <Typography tag='h1' variant='title-1'>
        NIKE AIR MAX PULSE
      </Typography>
      <div className='mt-[0.5rem]'>
        <Typography tag='p' variant='title-3'>
          Inspired by the energy of London’s music scene comes the Air Max Pulse. A tough silhouette
          infused with an unreal sensation of Air.
        </Typography>
      </div>

      <div className='mt-[2rem]'>
        <Button size='small'>Shop</Button>
      </div>
    </div>
    <div className='mt-[4rem]'>
      <video autoPlay loop muted className='h-full w-full' preload='auto'>
        <source src='/videos/banner.mp4' type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
      </video>
    </div>
  </section>
);
