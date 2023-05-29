import { setCookie, getCookie, deleteCookie } from 'cookies-next';

// cookie options
export const cookieOptions = {
    /* httpOnly: true, */
    maxAge: 2592000, // 30 days
    path: '/',
    sameSite: 'Strict',
    secure: process.env.NODE_ENV === 'production' // untested
}

// create a new authentication cookie
export function setAuthCookie(key, value) { setCookie(key, value, cookieOptions); }

// get authentication cookie, or undefined
export function getAuthCookie(key) { return getCookie(key, cookieOptions); }

// remove an authentication cookie
export function deleteAuthCookie(key) { deleteCookie(key, cookieOptions); }
