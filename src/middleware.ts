import { NextResponse, type MiddlewareConfig, type NextRequest } from "next/server";

type PublicRoutesType = {
    path: string;
    whenAuthenticated: "redirect" | "next";
}[];

const publicRoutes: PublicRoutesType = [
    { path: "/signin", whenAuthenticated: "redirect" },
    { path: "/register", whenAuthenticated: "redirect" },
    { path: "/forgot", whenAuthenticated: "redirect" },
    { path: "/dashboard", whenAuthenticated: "redirect" },
    { path: "/", whenAuthenticated: "next" },
];
const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = "/signin";
const REDIRECT_WHEN_AUTHENTICATED_ROUTE = "/dashboard";

export function middleware(req: NextRequest){   
    const path = req.nextUrl.pathname;
    const publicRoute = publicRoutes.find(route => route.path === path);
    const authToken = req.cookies.get("token");

    if(!authToken && publicRoute) return NextResponse.next();

    if(!authToken && !publicRoute) {
        const redirectUrl = req.nextUrl.clone();

        redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;

        return NextResponse.redirect(redirectUrl);
    }

    if(authToken && publicRoute && publicRoute.whenAuthenticated === "redirect") {
        const redirectUrl = req.nextUrl.clone();

        redirectUrl.pathname = REDIRECT_WHEN_AUTHENTICATED_ROUTE;

        return NextResponse.redirect(redirectUrl);
    }

    if(authToken && !publicRoute) {
        /*
            Checar se o JWT está expirado
            Se sim, remover o cookie e redireicionar para o signin
        */

        return NextResponse.next();
    }

    return NextResponse.next();
}

export const config: MiddlewareConfig = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
    ],
};