import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Configuration for which routes this middleware should run on.
export const config = {
  matcher: [
    '/login',
    '/forgot-password',
    '/update-password',
    '/dashboard/:path*', // Assume they might have a dashboard
  ],
};

export function proxy(request: NextRequest) {
  const shieldCookie = request.cookies.get('_h_shield');

  // If the shield cookie is missing or invalid, we hide the route completely
  // by throwing a 404 Not Found error (rewriting to a non-existent path).
  if (!shieldCookie || shieldCookie.value !== 'granted') {
    // We rewrite to a path that triggers the standard app/not-found.tsx
    return NextResponse.rewrite(new URL('/not-found-shield-blocked', request.url));
  }

  // If the cookie is present, allow access to the protected routes
  return NextResponse.next();
}
