import { NextResponse } from "next/server";

export function middleware(req: NextResponse) {
  const token = req.cookies.get("Authorization");
  console.log(token);

  if (!token) return NextResponse.redirect(new URL("/auth/signin", req.url));

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/forms/form-editor/:path*",
    "/forms/form-elements/:path*",
    "/forms/form-layout/:path*",
  ],
};
