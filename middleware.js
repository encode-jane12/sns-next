import { NextResponse } from 'next/server';
import { MAINTENANCE_MODE, ADMIN_BYPASS_KEY } from './src/config/maintenance.js';

export function middleware(request) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host') || '';

  // 1. Never block Next.js internals, static assets, images, or favicons
  if (
    url.pathname.startsWith('/_next') ||
    url.pathname.startsWith('/api') ||
    url.pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // 2. Check for optional Administrator Bypass (?bypass=sns-admin-2026 or cookie)
  const bypassParam = url.searchParams.get('bypass');
  const bypassCookie = request.cookies.get('sns_bypass')?.value;
  const isAdminBypassed =
    (bypassParam && bypassParam === ADMIN_BYPASS_KEY) ||
    bypassCookie === ADMIN_BYPASS_KEY;

  if (bypassParam && bypassParam === ADMIN_BYPASS_KEY) {
    const response = NextResponse.next();
    response.cookies.set('sns_bypass', ADMIN_BYPASS_KEY, {
      path: '/',
      httpOnly: true,
      maxAge: 60 * 60 * 24, // 24 hours
    });
    return response;
  }

  // 3. Global Maintenance Mode Enforcement
  // When active, intercepts ALL pages and routes across the entire site
  if (MAINTENANCE_MODE && !isAdminBypassed) {
    if (url.pathname !== '/maintenance') {
      url.pathname = '/maintenance';
      return NextResponse.rewrite(url);
    }
    return NextResponse.next();
  }

  // 4. Subdomain routing (active when maintenance is disabled)
  const isShippingSubdomain =
    host.startsWith('shipping.') || host.includes('shipping.snsconstructioninc.com');

  if (isShippingSubdomain) {
    if (url.pathname === '/') {
      url.pathname = '/shipping';
      return NextResponse.rewrite(url);
    }

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
