// Client Component
'use client';

import { useState } from "react";

// hooks
import { useScrollPosition } from "../hooks/scrollPosition";

// components
import Branding from "./branding";
import NavItems from "./navItems";

// constants
const LINKS = [
    { text: "Browse Food", href: "/food" },
];

export default function Navbar() {

    // toggle mobile navbar
    const [navOpen, setOpen] = useState(false);
    const navbarToggle = () => setOpen((open) => !open);
    const mobileNavClass = !navOpen && 'hidden';

    // change nav style on scroll
    const scrollPosition = useScrollPosition();
    const navStyle = scrollPosition > 0 && 'bg-white mt-2 bg-opacity-90 backdrop-blur-sm';

    return (
        <header className="fixed min-w-full px-2">
            <nav className={`flex flex-wrap items-center rounded-2xl justify-between mx-auto p-4 ${navStyle}`}>

                {/* Branding */}
                <Branding />

                {/* Mobile Navbar */}
                <button type="button" className="inline-flex items-center p-2 ml-3 text-sm text-green-900 rounded-lg md:hidden hover:text-green-700 focus:outline-none focus:text-green-700 ease-out duration-300" aria-controls="navbar" aria-expanded="false" onClick={navbarToggle}>
                    <span className="sr-only">Open Menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                </button>

                {/* Navigation Links */}
                <div className={`w-full md:block md:w-auto ${mobileNavClass}`} id="navbar">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 bg-white rounded-lg md:flex-row md:items-center md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
                        <NavItems links={LINKS} />
                    </ul>
                </div>

            </nav>
        </header>
    );
};

