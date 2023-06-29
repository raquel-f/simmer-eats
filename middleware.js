import { NextResponse } from 'next/server';

// Authentication middleware
export async function middleware(request) {

    // if the token is present in the cookies
    let hasJWT = request.cookies.has('jwt');
    if (hasJWT) {
        // get the token from cookies
        let jwtCookie = request.cookies.get('jwt').value;

        // check if user is authenticated
        const options = {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${jwtCookie}` }
        }
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/user/me", options);

        // redirect to login page if user is not authenticated
        if (response.status !== 200) return NextResponse.redirect(new URL('/auth/signIn', request.url));
        // allow access to authenticated users
        else return NextResponse.next();
    }

    // no token, redirect to login page
    return NextResponse.redirect(new URL('/auth/signIn', request.url));
}

// middleware is applied to the following routes
export const config = {
    matcher: ['/cart', '/delivery', '/delivery/:id', '/profile'],
}