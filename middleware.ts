import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Protects /dashboard, /perris, /properties (and /admin). Redirects to /sign-in when no session.
 * Only allowlisted users can complete sign-in (see auth.ts ALLOWED_EMAILS / ALLOWED_DOMAINS).
 * Edge-compatible: checks Auth.js session cookie only (no Node auth import).
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check for an Auth.js session cookie. Large (Google) sessions get split into
  // chunked cookies (e.g. `__Secure-authjs.session-token.0`, `.1`), so match the
  // base name, the `__Secure-` prefix, and any numeric chunk suffix — otherwise
  // an authenticated user is wrongly bounced back to sign-in (the "login twice" bug).
  const hasSession = request.cookies
    .getAll()
    .some((c) => /^(__Secure-)?authjs\.session-token(\.\d+)?$/.test(c.name));

  if (!hasSession) {
    const signInUrl = new URL("/sign-in", request.nextUrl.origin);
    signInUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*", "/properties/:path*", "/perris/:path*", "/research/:path*"],
};
