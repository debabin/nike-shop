import type { GetSectionMembershipQuery } from '@/gql';
import { Figure, Typography } from '@/ui';
import { getFileUrl } from '@/utils/helpers';

type SectionMembershipData = GetSectionMembershipQuery['sectionMembership']['data']['attributes'];
interface MembershipProps {
  data: SectionMembershipData;
}

export const Membership: React.FC<MembershipProps> = ({ data }) => (
  <section className='my-[3rem] flex w-full justify-center'>
    <div className='flex w-full max-w-[90rem] flex-col px-[2.25rem]'>
      <Typography tag='h2' variant='title-3'>
        Nike Membership
      </Typography>
      <div className='mt-[2rem] flex w-full max-w-[90rem] gap-[0.625rem]'>
        {data.card.map((card, index) => (
          <div key={index} className='h-[18.75rem] w-[50%]'>
            <Figure
              buttons={card.linkButton.map((button) => ({ children: button.label }))}
              caption={card.caption}
              image={{
                alt: 'image',
                src: getFileUrl(card.image.data.attributes.url)
              }}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);
