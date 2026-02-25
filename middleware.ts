import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Edge-compatible middleware — checks for Auth.js session cookie
 * without importing the full auth library (which requires Node.js runtime).
 * Auth.js v5 writes one of two cookie names depending on the environment.
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
  matcher: ["/dashboard/:path*", "/admin/:path*"],
};
