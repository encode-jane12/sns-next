'use client';

import { useEffect } from 'react';

export default function ShippingClassMarker() {
  useEffect(() => {
    document.documentElement.classList.add('is-shipping-subdomain');
    document.body.classList.add('is-shipping-subdomain');

    return () => {
      document.documentElement.classList.remove('is-shipping-subdomain');
      document.body.classList.remove('is-shipping-subdomain');
    };
  }, []);

  return null;
}
