import type { IDictionary } from '@theme/types';
import { HeroSection, LastReviewActivitySection } from '@theme-ui/sections';
import { useFormatter } from 'next-intl';

type HomeProps = {} & IDictionary;

export const Home = ({ dictionary }: HomeProps) => {
  const formater = useFormatter();
  return (
    <>
      <HeroSection dictionary={dictionary} />
      <LastReviewActivitySection dictionary={dictionary} formater={formater} />
    </>
  );
};
