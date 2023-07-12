import Image from 'next/image';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import type { GetSectionShoeQuery, GetShoeQuery } from '@/gql';
import { Button, Gallery, Typography } from '@/ui';
import { LikeIcon } from '@/ui/icons';
import { getFileUrl } from '@/utils/helpers';

type ShoeData = {
  shoe: GetShoeQuery['shoe']['data']['attributes'];
} & GetSectionShoeQuery['sectionShoe']['data']['attributes'];
interface ShoeProps {
  data: ShoeData;
}

export const Shoe: React.FC<ShoeProps> = ({ data }) => {
  const [selectedOption, setSelectedOption] = React.useState(data.shoe.options[0]);

  return (
    <section className='my-[3rem] flex items-center justify-center'>
      <div className='flex w-full max-w-[80rem] '>
        <div className='sticky top-[2rem] flex h-fit w-[60%] justify-center'>
          <Gallery
            images={selectedOption.medias.data.map((element) => ({
              alt: element.attributes.caption,
              src: getFileUrl(element.attributes.url),
              placeholder: 'blur',
              blurDataURL: getFileUrl(element.attributes.previewUrl)
            }))}
          />
        </div>
        <div className='flex w-[30%] flex-col p-[1rem]'>
          <div className='flex flex-col gap-[0.5rem]'>
            <Typography className='text-[1.4rem]' tag='h1' variant='body-1'>
              {data.shoe.name}
            </Typography>
            <Typography className='text-[1rem]' tag='h2' variant='title-4'>
              {data.shoe.type.data.attributes.name.replaceAll('_', ' ')}
            </Typography>
          </div>
          <div className='mt-[1rem] w-[100%] text-left'>
            <Typography tag='h2' variant='title-4'>
              {data.shoe.price}
            </Typography>
          </div>
          <div className='flex gap-[0.5rem]'>
            {data.shoe.options.length > 1 &&
              data.shoe.options.map((option, index) => (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                <div
                  key={index}
                  className='relative h-[4.5rem] w-[4.2rem] cursor-pointer rounded-md hover:border-[0.1rem] hover:border-black-100'
                  role='menuitem'
                  tabIndex={0}
                  onClick={() => setSelectedOption(option)}
                >
                  <Image
                    fill
                    alt={option.medias.data[0].attributes.name}
                    blurDataURL={getFileUrl(option.medias.data[0].attributes.previewUrl)}
                    className='rounded-md object-fill'
                    src={getFileUrl(option.medias.data[0].attributes.url)}
                  />
                </div>
              ))}
          </div>
          <div className='mt-[1rem]'>
            <ReactMarkdown
              className='title-5'
              components={{
                p: ({ children }) => (
                  <Typography
                    className='text-[1rem] leading-[1.5rem]'
                    tag='p'
                    variant='body-2'
                  >
                    {children}
                  </Typography>
                ),
                ul: ({ children }) => (
                  <ul className='mt-[2rem] flex list-disc flex-col gap-[1rem] pl-[1rem]'>
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li>
                    <Typography className='text-[1rem]' variant='body-2'>
                      {children}
                    </Typography>
                  </li>
                )
              }}
            >
              {data.shoe.description}
            </ReactMarkdown>
          </div>
          {(data.addToBagButton || data.favoriteButton) && (
            <div className='mt-[1rem] flex flex-col gap-[0.5rem]'>
              {data.addToBagButton && <Button>{data.addToBagButton.label}</Button>}
              {data.favoriteButton && (
                <Button endIcon={<LikeIcon />} variant='outlined'>
                  {data.favoriteButton.label}
                </Button>
              )}
            </div>
          )}
          {data.detailsButton && (
            <div className='mt-[1rem]'>
              <button>
                <Typography className='border-b-[0.1rem] pb-[0.1rem]' variant='title-4'>
                  {data.detailsButton.label}
                </Typography>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
