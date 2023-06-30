// Client Component - needed due to cookies and payment
'use client';

import { useEffect, useState } from "react";

// API & utils
import { createCheckoutSession, getLoggedCart, removeFromLoggedCart } from "@/app/_api";
import { getAuthCookie } from "@/app/_api/cookies";
import { Typography } from "@/app/_utils/typography";

// components
import CartItem from "./cartItem";
import Link from "next/link";
import Image from "next/image";

export default function Cart() {

    // get authenticated user's shopping cart information
    const [cart, setCart] = useState({ products: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // if there is no cookie, return
        if (!getAuthCookie('jwt')) return;

        getLoggedCart()
            .then((res) => { /* console.log(res.data); */ setCart(res.data); setLoading(false); })
            .catch((error) => { /* console.error(error); */ setLoading(false); });
    }, []);

    // delete cart item
    const deleteItem = (productId) => {
        // find index of food product
        let prodIndex = cart.products.findIndex((prod) => prod._id === productId);

        // product found
        if (prodIndex !== -1) {
            // send removal request to API
            removeFromLoggedCart({ productId }).then((res) => {
                let status = res.status;
                // successful removal on API -> remove from UI
                if (status === 200) {
                    let cartCopy = JSON.parse(JSON.stringify(cart));
                    cartCopy.products.splice(prodIndex, 1);
                    setCart(cartCopy);
                }
            });
        }
    }

    // create stripe checkout session
    const checkout = async () => {
        createCheckoutSession(cart.products)
            .then((res) => {

                // get redirect url for payment and redirect user 
                const url = res.data.redirect;
                window.location.href = url;

            }).catch((error) => { console.error(error) });
    };


    return (
        <>
            {/* Container for cart items */}
            <div className="grid grid-cols-1 gap-y-4 mb-1 overflow-y-auto max-h-[350px]">
                {cart.products.map((prod) => {
                    return <CartItem key={prod._id} {...prod} deleteItem={deleteItem} />
                })}
            </div>

            {/* Empty state */}
            {cart.products.length === 0 && !loading &&
                <div className="flex flex-col items-center justify-center p-8">
                    <Image src={'/android-chrome-512x512.png'} height={200} width={200} alt='plumbob' className="mb-4"></Image>
                    <Typography variant={'h4'}>Shopping cart is empty.</Typography>
                    <Typography variant={'h4'} className={'mb-6'}>Try finding some delicious food <Link href={'/food'} className="font-semibold">here</Link>. </Typography>
                </div>
            }

            {cart.products.length !== 0 && !loading &&
                <div className="p-4 flex justify-end ">
                    {/* Perform Payment */}
                    <button className="w-full text-white border-2 border-green-600 bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center ease-out duration-300" onClick={checkout}>
                        Checkout
                    </button>
                </div>
            }
        </>
    );

}