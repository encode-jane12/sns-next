import K12Education from '@/src/views/K12Education/K12Education';

export const metadata = {
  title: 'K12 Education | SNS Construction',
  description: 'Learn more about K12 Education at SNS Construction.',
  alternates: {
    canonical: '/k-12-education',
  },
};

export default function Page() {
  return <K12Education />;
}
