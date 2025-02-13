import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("Authorization")?.value;
  console.log(token);

  if (!token) return NextResponse.redirect(new URL("/auth/signin", req.url));

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/forms/:path*"],
};
