import JobOpenings from '@/src/views/JobOpenings/JobOpenings';

export const metadata = {
  title: 'Job Openings | SNS Construction',
  description: 'Learn more about Job Openings at SNS Construction.',
  alternates: {
    canonical: '/careers/openings',
  },
};

export default function Page() {
  return <JobOpenings />;
}
