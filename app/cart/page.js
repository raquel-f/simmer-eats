import { Typography } from "../utils/typography";
import Link from "next/link";
import Cart from "./cart";

export default async function CartPage() {

    return (
        <div className="p-6">
            {/* Return to browsing food items */}
            <div className="p-2 my-4 w-full">
                <Link href={'/food'} className="group flex flex-row items-center hover:cursor-pointer">
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="h-4 w-4 mr-2">
                        <path d="M22 13.5H6.3l5.5 7.5H8.3l-6.5-9 6.5-9h3.5l-5.5 7.5H22v3z"></path>
                    </svg>
                    <Typography variant={'h6'} className={'font-medium group-hover:font-semibold'}>Return to Food</Typography>
                </Link>
            </div>

            {/* Cart */}
            <Cart />
        </div>
    );
}