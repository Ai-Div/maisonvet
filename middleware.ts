import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Protects /dashboard, /perris, /properties (and /admin). Redirects to /sign-in when no session.
 * Only allowlisted users can complete sign-in (see auth.ts ALLOWED_EMAILS / ALLOWED_DOMAINS).
 * Edge-compatible: checks Auth.js session cookie only (no Node auth import).
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check for Auth.js session token cookie (http or https variant)
  const sessionToken =
    request.cookies.get("authjs.session-token") ??
    request.cookies.get("__Secure-authjs.session-token");

  if (!sessionToken) {
    const signInUrl = new URL("/sign-in", request.nextUrl.origin);
    signInUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*", "/properties/:path*", "/perris/:path*"],
};
