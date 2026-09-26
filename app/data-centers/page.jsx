import DataCenters from '@/src/views/DataCenters/DataCenters';

export const metadata = {
  title: 'Data Centers | SNS Construction',
  description: 'Learn more about Data Centers at SNS Construction.',
  alternates: {
    canonical: '/data-centers',
  },
};

export default function Page() {
  return <DataCenters />;
}
