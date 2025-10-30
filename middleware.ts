// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
 
export function middleware(req: NextRequest) {
  // Get token from cookies
  const token = req.cookies.get("accessToken")?.value;
 
  // Protect /admin-dashboard routes
  if (req.nextUrl.pathname.startsWith("/admin-dashboard") && !token) {
    const loginUrl = req.nextUrl.clone();
    loginUrl.pathname = "/";
    return NextResponse.redirect(loginUrl);
  }
 
  return NextResponse.next();
}
 
export const config = {
 matcher: ["/admin-dashboard", "/admin-dashboard/:path*"],
};
 