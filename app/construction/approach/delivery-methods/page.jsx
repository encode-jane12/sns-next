import DeliveryMethods from '@/src/views/DeliveryMethods/DeliveryMethods';

export const metadata = {
  title: 'Delivery Methods | SNS Construction',
  description: 'Learn more about Delivery Methods at SNS Construction.',
  alternates: {
    canonical: '/construction/approach/delivery-methods',
  },
};

export default function Page() {
  return <DeliveryMethods />;
}
