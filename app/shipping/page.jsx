import { Suspense } from 'react';
import ShippingContainer from './ShippingContainer';

export const metadata = {
  title: 'Consignment & Express Cargo Tracking | SwiftTrack - SNS Logistics',
  description: 'Track real-time cargo consignments, delivery associate assignment, OTP verification, and download digital waybills.',
};

export default function ShippingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-500 font-sans text-sm">
          Loading tracking portal...
        </div>
      }
    >
      <ShippingContainer />
    </Suspense>
  );
}
