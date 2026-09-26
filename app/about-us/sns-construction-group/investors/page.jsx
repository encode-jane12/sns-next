import Investors from '@/src/views/Investors/Investors';

export const metadata = {
  title: 'Investors | SNS Construction',
  description: 'Learn more about Investors at SNS Construction.',
  alternates: {
    canonical: '/about-us/sns-construction-group/investors',
  },
};

export default function Page() {
  return <Investors />;
}
