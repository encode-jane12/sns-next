'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/src/components/Navbar/Navbar';
import Footer from '@/src/components/Footer/Footer';
import { MAINTENANCE_MODE } from '@/src/config/maintenance';

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

  // When maintenance mode is active or visitor is on /maintenance:
  // Strictly hide corporate Navbar and Footer so no other pages can be navigated to
  if (MAINTENANCE_MODE || pathname === '/maintenance') {
    return <main className="maintenance-wrapper">{children}</main>;
  }

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
