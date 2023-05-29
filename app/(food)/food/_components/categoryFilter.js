// Client Component
'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// components
import Category from "./category";

export default function CategoryFilter({ categories }) {

    // active category
    const defaultCategory = { name: 'Category', icon: '/categories/eating.png' };
    const [activeCat, setCategory] = useState(defaultCategory);

    // update active category
    const router = useRouter();
    useEffect(() => {
        let name = activeCat.name;
        name === 'Category' ? router.push(`/food`) : router.push(`/food?filter=${name}`);
    }, [activeCat]);


    // toggle mobile category menu
    const [mobileOpen, setOpen] = useState(false);
    const menuToggle = () => setOpen((open) => !open);
    const mobileMenuClass = !mobileOpen && 'hidden';

    return (
        <>
            {/* Filter by Category (Small Screens) */}
            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="font-medium text-sm px-4 py-2.5 text-center inline-flex items-center mt-8 h-fit mx-6 bg-white rounded-lg lg:hidden divide-y divide-gray-100 shadow" type="button" onClick={menuToggle}>
                <Image src={activeCat.icon} height={20} width={20} alt="category icon" className="mr-2" />
                {activeCat.name}
                <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {/* Dropdown menu */}
            <div id="dropdown" className={`${mobileMenuClass} z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-max mt-2 mx-6 lg:hidden`}>
                <ul className="py-2 text-sm text-gray-700 flex flex-col" aria-labelledby="dropdownDefaultButton">
                    {categories.map((cat, index) => {
                        return <li key={index} className="inline-flex items-center pl-4 hover:bg-gray-100 hover:cursor-pointer">
                            <Image src={cat.icon} height={20} width={20} alt="category icon" className="rounded-full " />
                            <a className="block px-4 py-2"
                                onClick={() => { activeCat.name == cat.name ? setCategory(defaultCategory) : setCategory(cat); setOpen(false) }}
                            >{cat.name}</a>
                        </li>

                    })}
                </ul>
            </div>

            {/* Filter by Category (Large Screens)*/}
            <div className="hidden mt-8 h-fit mx-6 bg-white rounded-xl lg:block py-2 divide-y divide-gray-100 shadow">
                <ul className="flex items-center justify-evenly flex-wrap h-full">
                    {categories.map((cat, index) => {
                        return <Category {...cat} key={index} activeCatName={activeCat.name} updateCategory={() => { activeCat.name == cat.name ? setCategory(defaultCategory) : setCategory(cat) }} />
                    })}
                </ul>
            </div>
        </>
    );
}