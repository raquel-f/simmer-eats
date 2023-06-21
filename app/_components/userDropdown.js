// Client Component
'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";

// API
import { deleteAuthCookie } from "../_api/cookies";

function logout(router, updateUser) {

    // remove cookie
    deleteAuthCookie('jwt');

    // update app state
    updateUser(null);

    // redirect to home
    router.push('/');
}

export default function UserDropdown({ user, updateUser }) {

    // toggle user dropdown menu
    const [menuOpen, setOpen] = useState(false);
    const menuToggle = () => setOpen((open) => !open);
    const menuClass = !menuOpen && 'hidden';

    // navigation
    const router = useRouter();

    return (
        <div className="flex items-center">
            <button type="button" className="flex items-center mr-3 text-sm rounded-full md:mr-0 border-2 border-white" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom" onClick={menuToggle}>
                <span className="sr-only">Open user menu</span>
                <Image className="w-10 h-10 rounded-full" width={40} height={40} src={user.image} alt="user photo" />
                <div className="px-4 py-3 flex flex-col items-start md:hidden ">
                    <span className="block text-sm font-semibold text-gray-900 ">{user.name}</span>
                    <span className="block text-sm  text-gray-500 truncate">{user.email}</span>
                </div>
            </button>

            {/* Dropdown menu  */}
            <div className={`z-50 ${menuClass} absolute top-56 left-7 right-7 md:left-auto md:top-16 md:right-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow`} id="user-dropdown">
                <div className="px-4 py-3 hidden md:block">
                    <span className="block text-sm font-semibold text-gray-900">{user.name}</span>
                    <span className="block text-sm  text-gray-500 truncate">{user.email}</span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                        <Link href={'/profile'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link href={'/cart'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Shopping Cart
                        </Link>
                    </li>
                    <li>
                        <Link href={'/delivery'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Deliveries
                        </Link>
                    </li>
                    <li>
                        <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:cursor-pointer" onClick={() => logout(router, updateUser)}>Sign out</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}