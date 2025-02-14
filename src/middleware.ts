// import { NextRequest, NextResponse } from "next/server";

// export function middleware(req: NextRequest) {
//   const token = req.cookies.get("Authorization")?.value;
//   console.log("Token in middleware:", token);

//   if (!token) {
//     console.log("No token, redirecting to /auth/signin"); 
//     return NextResponse.redirect(new URL("/auth/signin", req.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/admin/:path*", "/forms/:path*"],
// };
