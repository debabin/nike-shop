import Link from 'next/link';

import type { GetSectionBannerQuery } from '@/gql';
import { Typography, Button } from '@/ui';
import { getFileUrl } from '@/utils/helpers';

type SectionBannerData = GetSectionBannerQuery['sectionBanner']['data']['attributes'];
interface BannerProps {
  data: SectionBannerData;
}

export const Banner: React.FC<BannerProps> = ({ data }) => (
  <section className='my-[3rem]'>
    <div className='flex flex-col items-center justify-center px-[2.25rem] text-center'>
      {data.preSectionTitle && (
        <Typography tag='p' variant='title-3'>
          {data.preSectionTitle}
        </Typography>
      )}
      <Typography tag='h1' variant='title-1'>
        {data.sectionTitle}
      </Typography>
      <div className='mt-[0.5rem]'>
        <Typography tag='p' variant='title-3'>
          {data.subSectionTitle}
        </Typography>
      </div>

      {data.linkButton && (
        <div className='mt-[2rem] flex gap-[1rem]'>
          {data.linkButton.map((linkButton) => (
            <Link key={linkButton.id} href={linkButton.href}>
              <Button size='small'>{linkButton.label}</Button>
            </Link>
          ))}
        </div>
      )}
    </div>
    <div className='mt-[4rem]'>
      <video autoPlay loop muted className='h-full w-full' preload='auto'>
        <source
          src={getFileUrl(data.video.data.attributes.url)}
          type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
        />
      </video>
    </div>
  </section>
);
