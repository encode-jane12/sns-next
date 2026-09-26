import HigherEducation from '@/src/views/HigherEducation/HigherEducation';

export const metadata = {
  title: 'Higher Education | SNS Construction',
  description: 'Learn more about Higher Education at SNS Construction.',
  alternates: {
    canonical: '/higher-education',
  },
};

export default function Page() {
  return <HigherEducation />;
}
