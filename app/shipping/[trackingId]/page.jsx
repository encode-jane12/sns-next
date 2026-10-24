import { Suspense } from 'react';
import ShippingContainer from '../ShippingContainer';
import { getConsignmentById } from '@/src/data/consignments';

export async function generateMetadata({ params }) {
  const { trackingId } = await params;
  const consignment = getConsignmentById(trackingId);
  if (consignment) {
    return {
      title: `${consignment.trackingNumber} - ${consignment.status} | SwiftTrack Cargo`,
      description: `Consignment ${consignment.trackingNumber} is ${consignment.status} to ${consignment.destination.location}.`,
    };
  }
  return {
    title: `Tracking Consignment ${trackingId || ''} | SwiftTrack Cargo`,
  };
}

export default async function DynamicTrackingPage({ params }) {
  const { trackingId } = await params;

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-500 font-sans text-sm">
          Loading tracking data...
        </div>
      }
    >
      <ShippingContainer initialTrackingId={trackingId} />
    </Suspense>
  );
}
