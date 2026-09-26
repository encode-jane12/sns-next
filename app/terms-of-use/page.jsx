import TermsOfUse from '@/src/views/TermsOfUse/TermsOfUse';

export const metadata = {
  title: 'Terms Of Use | SNS Construction',
  description: 'Learn more about Terms Of Use at SNS Construction.',
  alternates: {
    canonical: '/terms-of-use',
  },
};

export default function Page() {
  return <TermsOfUse />;
}
