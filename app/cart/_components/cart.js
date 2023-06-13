// Client Component - needed due to cookies
'use client';

import { useEffect, useState } from "react";

// API & utils
import { getLoggedCart, removeFromLoggedCart } from "@/app/_api";
import { getAuthCookie } from "@/app/_api/cookies";
import { Typography } from "@/app/_utils/typography";

// components
import CartItem from "./cartItem";
import Link from "next/link";
import Image from "next/image";

export default function Cart() {

    // get authenticated user's shopping cart information
    const [cart, setCart] = useState({ products: [] });

    useEffect(() => {
        // if there is no cookie, return
        if (!getAuthCookie('jwt')) return;

        getLoggedCart()
            .then((res) => { console.log(res.data); setCart(res.data); })
            .catch((error) => { console.log(error); });
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


    return (
        <>
            {/* Container for cart items */}
            <div className="grid grid-cols-1 gap-y-4 mb-6">
                {cart.products.map((prod) => {
                    return <CartItem key={prod._id} {...prod} deleteItem={deleteItem} />
                })}
            </div>

            {/* Empty state */}
            {cart.products.length === 0 &&
                <div className="flex flex-col items-center justify-center p-8">
                    <Image src={'/android-chrome-512x512.png'} height={200} width={200} alt='plumbob' className="mb-4"></Image>
                    <Typography variant={'h4'}>Shopping cart is empty.</Typography>
                    <Typography variant={'h4'} className={'mb-6'}>Try finding some delicious food <Link href={'/food'} className="font-semibold">here</Link>. </Typography>
                </div>
            }
        </>
    );

}