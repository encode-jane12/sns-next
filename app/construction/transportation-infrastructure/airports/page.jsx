import Airports from '@/src/views/Airports/Airports';

export const metadata = {
  title: 'Airports | SNS Construction',
  description: 'Learn more about Airports at SNS Construction.',
  alternates: {
    canonical: '/construction/transportation-infrastructure/airports',
  },
};

export default function Page() {
  return <Airports />;
}
