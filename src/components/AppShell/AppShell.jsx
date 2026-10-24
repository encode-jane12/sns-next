'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/src/components/Navbar/Navbar';
import Footer from '@/src/components/Footer/Footer';

export default function AppShell({ children }) {
  const pathname = usePathname();
  const [isSubdomain, setIsSubdomain] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname || '';
      if (
        hostname.startsWith('shipping.') ||
        hostname.includes('shipping.snsconstructioninc.com')
      ) {
        setIsSubdomain(true);
      }
    }
  }, []);

  const isShippingPortal =
    isSubdomain ||
    pathname?.startsWith('/shipping') ||
    (typeof window !== 'undefined' &&
      (window.location.hostname.startsWith('shipping.') ||
        window.location.hostname.includes('shipping.snsconstructioninc.com')));

  if (isShippingPortal) {
    return <main className="shipping-main-wrapper">{children}</main>;
  }

  return (
    <div className="app">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
