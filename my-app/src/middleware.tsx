import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log("미들웨어가 실행되고 있다궁");
  if (request.nextUrl.pathname.startsWith("/prodocts/1004")) {
    console.log("미들워어- 경로를 리다이렉트 하는즁");
    return NextResponse.redirect(new URL("/products", request.url));
  }
}

export const config = {
  matcher: ["/products/:path*"],
};
