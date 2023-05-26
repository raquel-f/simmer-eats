// Client Component
'use client';

import Link from "next/link";
import { Typography } from "../utils/typography";
import { getLoggedUser } from "../api";
import { useEffect, useState } from "react";
import UserDropdown from "./userDropdown";
import { getAuthCookie } from "../api/cookies";

export default function NavItems({ links }) {

    const [user, setUser] = useState(null);

    // get authenticated user
    useEffect(() => {
        // if there is no cookie, return
        if (!getAuthCookie('jwt')) return;
        
        getLoggedUser()
            .then((res) => { setUser(res.data); console.log(res.data) })
            .catch((error) => { console.log(error); setUser(null) });
    }, []);

    return (
        <>
            {/* Common Navigation Items */}
            {links.map((link, index) => (
                <li key={index}>
                    <Link href={link.href}>
                        <Typography variant={"h5"} className={"py-2 pr-4 text-green-950 rounded bg-transparent md:p-0 hover:font-semibold"}>{link.text}</Typography>
                    </Link>
                </li>
            ))}

            {/* Authentication Items */}
            {user ?
                /* User Information */
                <UserDropdown user={user} updateUser={setUser} />
                :
                /* Authentication Links */
                <>
                    <li>
                        <Link href={'/auth/signIn'}>
                            <Typography variant={"h5"} className={"py-2 pr-4 text-green-950 rounded bg-transparent md:p-0 hover:font-semibold"}>Log In</Typography>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/auth/signUp'}>
                            <Typography variant={"h5"} className={"py-2 pr-4 text-green-950 rounded bg-transparent md:p-0 hover:font-semibold"}>Sign Up</Typography>
                        </Link>
                    </li>
                </>
            }
        </>

    );
}