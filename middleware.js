import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host') || '';

  // Detect shipping subdomain:
  // e.g. shipping.snsconstructioninc.com, shipping.localhost:3000, etc.
  const isShippingSubdomain =
    host.startsWith('shipping.') || host.includes('shipping.snsconstructioninc.com');

  if (isShippingSubdomain) {
    // Don't rewrite Next.js internals, static files, or favicons
    if (
      url.pathname.startsWith('/_next') ||
      url.pathname.startsWith('/api') ||
      url.pathname.includes('.')
    ) {
      return NextResponse.next();
    }

    // When accessing root on shipping subdomain (e.g. https://shipping.snsconstructioninc.com/)
    // Rewrite internally to /shipping without changing the address bar URL
    if (url.pathname === '/') {
      url.pathname = '/shipping';
      return NextResponse.rewrite(url);
    }

    // When accessing a direct tracking ID path (e.g. https://shipping.snsconstructioninc.com/EXP-BLR-DHN-74192026)
    // Rewrite internally to /shipping/[trackingId]
    if (!url.pathname.startsWith('/shipping')) {
      url.pathname = `/shipping${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
