import EquipmentForSale from '@/src/views/EquipmentForSale/EquipmentForSale';

export const metadata = {
  title: 'Equipment For Sale | SNS Construction',
  description: 'Learn more about Equipment For Sale at SNS Construction.',
  alternates: {
    canonical: '/construction/transportation-infrastructure/equipment-for-sale',
  },
};

export default function Page() {
  return <EquipmentForSale />;
}
