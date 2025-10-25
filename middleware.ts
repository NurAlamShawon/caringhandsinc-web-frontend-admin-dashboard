import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This runs for every request matched by the matcher
export function middleware(req: NextRequest) {
  const token = req.cookies.get("accessToken")?.value; // Get your auth token from cookie
  const url = req.nextUrl.clone();

  // Protect /admin-dashboard and all its subpaths
  if (url.pathname.startsWith("/admin-dashboard") && !token) {
    url.pathname = "/"; // redirect to login
    return NextResponse.redirect(url);
  }

  return NextResponse.next(); // allow access if token exists
}

// Only apply middleware to /admin-dashboard routes
export const config = {
  matcher: ["/admin-dashboard/:path*"],
};
