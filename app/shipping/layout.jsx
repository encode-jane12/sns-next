import './shipping.css';

export default function ShippingLayout({ children }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <div className="shipping-portal-root min-h-screen bg-slate-50">{children}</div>
    </>
  );
}
