import CookiePolicy from '@/src/views/CookiePolicy/CookiePolicy';

export const metadata = {
  title: 'Cookie Policy | SNS Construction',
  description: 'Learn more about Cookie Policy at SNS Construction.',
  alternates: {
    canonical: '/cookie',
  },
};

export default function Page() {
  return <CookiePolicy />;
}
