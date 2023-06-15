import Link from 'next/link';

import type { GetLayoutHeaderQuery } from '@/gql';
import { Typography, IconButton } from '@/ui';
import { CartIcon, LikeIcon, NikeIcon } from '@/ui/icons';

type LayoutHeaderData = GetLayoutHeaderQuery['layoutHeader']['data']['attributes'];
interface HeaderProps {
  data: LayoutHeaderData;
}

export const Header: React.FC<HeaderProps> = ({ data }) => {
  const navigations = [
    { title: data.newTitle, links: data.newLinkList },
    { title: data.menTitle, links: data.menLinkList },
    { title: data.womenTitle, links: data.womenLinkList },
    { title: data.kidsTitle, links: data.kidsLinkList }
  ];

  return (
    <header className='relative z-[10] flex h-[4rem] items-center justify-between gap-[1.25rem] px-[2.25rem]'>
      <div>
        <NikeIcon className='ml-[0.75rem] h-[3.6rem] w-[3.6rem] scale-125' />
      </div>
      <div>
        <ul className='flex'>
          {navigations.map((nav, index) => (
            <li key={index} className='peer cursor-pointer overflow-hidden'>
              <div className='group border-b-[0.188rem] border-white p-[0.75rem] hover:border-b-black-100'>
                <Typography variant='link'>{nav.title}</Typography>

                <div className='absolute left-0 top-[3.3rem] z-[10] h-[0] w-[100vw] overflow-hidden bg-white group-hover:h-auto'>
                  <div className='flex translate-y-[-0.75rem] justify-center gap-[3rem] py-[2rem] opacity-0 transition-all duration-1000 group-hover:translate-y-0 group-hover:opacity-100'>
                    {nav.links.map((link, index) => (
                      <div key={index}>
                        <Typography variant='link'>{link.title}</Typography>

                        <ul className='mt-[0.625rem]'>
                          {link.link.map((link) => (
                            <li>
                              <a href={link.href}>
                                <Typography variant='body-3'>{link.label}</Typography>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
          <div className='invisible fixed left-0 top-[10rem] z-[0] h-full w-full bg-black-100 opacity-0 transition-all duration-500 peer-hover:opacity-20 peer-hover:blur-lg' />
        </ul>
      </div>
      <div>
        {data.favoritesIconButton && data.favoritesIconButton.href && (
          <Link className='mr-[0.75rem]' href={data.favoritesIconButton.href}>
            <IconButton icon={<LikeIcon />} />
          </Link>
        )}
        {data.cartIconButton && data.cartIconButton.href && (
          <Link href={data.cartIconButton.href}>
            <IconButton icon={<CartIcon />} />
          </Link>
        )}
      </div>
    </header>
  );
};
