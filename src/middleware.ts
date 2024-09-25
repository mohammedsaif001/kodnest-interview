import { NextResponse } from "next/server";

export function middleware(request) {
  const accessToken = request.cookies.get("token")?.value;

  const gotoNextRequest = () => {
    return NextResponse.next();
  };
  const url = request.nextUrl.clone();

  if (!accessToken && url.pathname !== "/") {
    url.pathname = "/";
    return NextResponse.redirect(url, request.url);
  } else if (accessToken && url.pathname === "/") {
    const url = request.nextUrl.clone();
    if (url.pathname === "/") {
      url.pathname = "/dashboard";
      return NextResponse.redirect(url, request.url);
    }
  }
  return gotoNextRequest();
}

export const config = {
  matcher: ["/((?!_next/static|favicon.ico|).*)", "/dashboard", "/events", "/"],
};
