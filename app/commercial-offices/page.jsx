import CommercialOffices from '@/src/views/CommercialOffices/CommercialOffices';

export const metadata = {
  title: 'Commercial Offices | SNS Construction',
  description: 'Learn more about Commercial Offices at SNS Construction.',
  alternates: {
    canonical: '/commercial-offices',
  },
};

export default function Page() {
  return <CommercialOffices />;
}
