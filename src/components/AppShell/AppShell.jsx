'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/src/components/Navbar/Navbar';
import Footer from '@/src/components/Footer/Footer';

export default function AppShell({ children }) {
  const pathname = usePathname();
  const isShippingPortal = pathname?.startsWith('/shipping');

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
