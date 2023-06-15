import Link from 'next/link';

import type { GetLayoutFooterQuery } from '@/gql';
import { Typography } from '@/ui';
import { InstagramIcon, TwitterIcon, YoutubeIcon, LocationIcon } from '@/ui/icons';

type LayoutFooterData = GetLayoutFooterQuery['layoutFooter']['data']['attributes'];
interface FooterProps {
  data: LayoutFooterData;
}

const socials = {
  twitter: <TwitterIcon className='fill-gray-300 transition-all duration-200 hover:fill-white' />,
  youtube: <YoutubeIcon className='fill-gray-300 transition-all duration-200 hover:fill-white' />,
  instagram: (
    <InstagramIcon className='fill-gray-300 transition-all duration-200 hover:fill-white' />
  ),
  facebook: <InstagramIcon className='fill-gray-300 transition-all duration-200 hover:fill-white' />
};

export const Footer: React.FC<FooterProps> = ({ data }) => (
  <footer className='flex flex-col items-center justify-between bg-black-100'>
    <div className='flex w-full max-w-[75rem] flex-col gap-[2rem] p-[3rem]'>
      <div className='flex w-full max-w-[75rem] justify-between text-white xl:mx-auto'>
        <div className='flex gap-[7rem]'>
          <ul className='flex flex-col gap-[0.4rem]'>
            {data.mainLinks.link.map((link) => (
              <li key={link.id}>
                <Link href={link.href}>
                  <Typography variant='title-5'>{link.label}</Typography>
                </Link>
              </li>
            ))}
          </ul>

          {data.links.map((link) => (
            <div className='flex flex-col gap-[0.3rem]'>
              <Typography variant='title-5'>{link.title}</Typography>
              <ul className='flex flex-col gap-[0.5rem]'>
                {link.link.map((link) => (
                  <li key={link.id} className='text-gray-250'>
                    <Link href={link.href}>
                      <Typography variant='body-3'>{link.label}</Typography>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='flex gap-[1rem]'>
          {Array.isArray(data.socilas) &&
            (data.socilas as string[]).map((social) => (
              <Link href={`/${social}`}>{socials[social]}</Link>
            ))}
        </div>
      </div>

      <ul className='flex w-full justify-end gap-[1rem] text-end text-gray-300'>
        {data.supportLinks.link.map((link) => (
          <Link href={link.href}>
            <Typography variant='body-3'>{link.label}</Typography>
          </Link>
        ))}
      </ul>

      <div className='flex w-full justify-between text-end text-gray-300'>
        <div className='flex items-center gap-[1rem]'>
          <div className='items-ceter flex cursor-pointer gap-[1rem]'>
            <LocationIcon className='fill-white' />
            <Link href='/'>
              <Typography className='text-white' variant='title-4'>
                Cookie Settings
              </Typography>
            </Link>
          </div>
          <Typography className='text-gray-300' variant='body-3'>
            Cookie Settings
          </Typography>
        </div>
        <Typography className='text-gray-300' variant='body-3'>
          Cookie Settings
        </Typography>
      </div>
    </div>
  </footer>
);
