import Link from 'next/link';

import type { GetLayoutSubfooterQuery } from '@/gql';
import { Typography } from '@/ui';

type LayoutSubfooterData = GetLayoutSubfooterQuery['layoutSubfooter']['data']['attributes'];
interface SubFooterProps {
  data: LayoutSubfooterData;
}

const ARRAY_PREVIEW_LENGTH = 3;

export const SubFooter: React.FC<SubFooterProps> = ({ data }) => (
  <section className='flex w-full items-start justify-center py-[1rem] transition-all duration-1000'>
    <div className='group flex items-start gap-[5rem]'>
      {data.links.map((link) => (
        <div key={link.id}>
          <Typography className='text-black-100' tag='h4' variant='title-4'>
            {link.title}
          </Typography>
          <ul className='mt-[1rem] flex flex-col gap-[0.75rem] overflow-hidden'>
            {link.link.slice(0, ARRAY_PREVIEW_LENGTH).map((link) => (
              <li key={link.id}>
                <Link href={link.href}>
                  <Typography className='text-black-200 hover:text-black-100' variant='body-3'>
                    {link.label}
                  </Typography>
                </Link>
              </li>
            ))}
            {link.link.length > ARRAY_PREVIEW_LENGTH && (
              <div
                aria-hidden='true'
                className='flex max-h-[0] flex-col gap-[0.75rem] opacity-0 transition-all duration-500 group-hover:max-h-[100rem] group-hover:opacity-100'
                role='list'
              >
                {link.link.slice(ARRAY_PREVIEW_LENGTH).map((link) => (
                  <li key={link.id}>
                    <Link href={link.href}>
                      <Typography className='text-black-200 hover:text-black-100' variant='body-3'>
                        {link.label}
                      </Typography>
                    </Link>
                  </li>
                ))}
              </div>
            )}
          </ul>
        </div>
      ))}
    </div>
  </section>
);
