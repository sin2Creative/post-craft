import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const isAuthPage =
      req.nextUrl.pathname.startsWith("/login") ||
      req.nextUrl.pathname.startsWith("/register");

    // If the user is authenticated and trying to access auth pages, redirect to dashboard
    if (isAuthPage && req.nextauth.token) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const isAuthPage =
          req.nextUrl.pathname.startsWith("/login") ||
          req.nextUrl.pathname.startsWith("/register");
        const isPublicPage =
          isAuthPage ||
          req.nextUrl.pathname === "/" ||
          req.nextUrl.pathname.startsWith("/api/auth");

        // Allow public pages
        if (isPublicPage) {
          return true;
        }

        // Require authentication for all other pages
        return !!token;
      },
    },
    pages: {
      signIn: "/login",
      error: "/login",
    },
  }
);
