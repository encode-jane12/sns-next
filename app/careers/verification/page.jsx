import React, { Suspense } from 'react';
import OfferVerification from '@/src/views/OfferVerification/OfferVerification';

export const metadata = {
  title: 'Offer Verification | SNS Construction',
  description: 'Learn more about Offer Verification at SNS Construction.',
  alternates: {
    canonical: '/careers/verification',
  },
};

export default function Page() {
  return <Suspense fallback={<div>Loading...</div>}><OfferVerification /></Suspense>;
}
