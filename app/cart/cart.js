// Client Component - needed due to cookies
'use client';

import { useEffect, useState } from "react";
import { getLoggedCart, removeFromLoggedCart } from "../api";
import { getAuthCookie } from "../api/cookies";
import CartItem from "./cartItem";

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
        /* container for cart items */
        <div className="grid grid-cols-1 gap-y-4 mb-6">
            {cart.products.map((prod) => {
                return <CartItem key={prod._id} {...prod} deleteItem={deleteItem} />
            })}
        </div>
    );

}