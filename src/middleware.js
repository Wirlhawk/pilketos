import { NextResponse } from "next/server";
import { getSession, updateSession } from "./lib/auth";

export async function middleware(request) {
    const session = await getSession();

    const isLoginRoute = request.nextUrl.pathname === "/bilik/login";

    if (!session && !isLoginRoute) {
        const loginUrl = new URL("/bilik/login", request.url);
        return NextResponse.redirect(loginUrl);
    }

    return await updateSession(request);
}

export const config = {
    matcher: ["/bilik/:path*"],
};