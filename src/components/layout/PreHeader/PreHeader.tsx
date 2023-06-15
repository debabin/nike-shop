import Link from 'next/link';
import React from 'react';

import type { GetLayoutPreHeaderQuery } from '@/gql';
import { Typography } from '@/ui';
import { JordanIcon, ConverseIcon } from '@/ui/icons';

type LayoutPreHeaderData = GetLayoutPreHeaderQuery['layoutPreHeader']['data']['attributes'];
interface PreHeaderProps {
  data: LayoutPreHeaderData;
}

export const PreHeader: React.FC<PreHeaderProps> = ({ data }) => (
  <div className='h-max-[60px] flex items-center justify-between bg-gray-100 px-[36px] py-[10px]'>
    <ul className='flex'>
      {data.jordanIconButton && data.jordanIconButton.href && (
        <li className='px-[12px]'>
          <Link href={data.jordanIconButton.href}>
            <JordanIcon />
          </Link>
        </li>
      )}
      {data.coverseIconButton && data.coverseIconButton.href && (
        <li className='px-[12px]'>
          <Link href={data.coverseIconButton.href}>
            <ConverseIcon />
          </Link>
        </li>
      )}
    </ul>
    <div className='flex items-center justify-center'>
      {data.links.link.map((link, index) => (
        <React.Fragment key={index}>
          <Link className='mx-[8px] px-[8px] py-[4px]' href={link.href}>
            <Typography variant='link'>{link.label}</Typography>
          </Link>

          <Typography tag='div' variant='link'>
            {data.links.link.length - 1 !== index && <span>|</span>}
          </Typography>
        </React.Fragment>
      ))}
    </div>
  </div>
);
