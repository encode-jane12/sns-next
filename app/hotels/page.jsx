import Hotels from '@/src/views/Hotels/Hotels';

export const metadata = {
  title: 'Hotels | SNS Construction',
  description: 'Learn more about Hotels at SNS Construction.',
  alternates: {
    canonical: '/hotels',
  },
};

export default function Page() {
  return <Hotels />;
}
