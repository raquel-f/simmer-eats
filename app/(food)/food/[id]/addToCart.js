// Client Component
'use client';

import { addToLoggedCart } from "@/app/api";
import { Typography } from "@/app/utils/typography";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddToCart({ servings, price, foodID }) {

    // order information
    const [quantity, setQuantity] = useState(1);
    const [priceIndex, setPrice] = useState(0);

    // navigation
    const router = useRouter();

    // add food item to shopping cart
    const addToOrder = async (event) => {
        // prevent page refresh
        event.preventDefault();

        // product information
        const item = {
            product: foodID,
            quantity: quantity,
            serving: servings[priceIndex],
            totalPrice: price[priceIndex] * quantity
        }

        try {
            // submit data to API
            const response = await addToLoggedCart(item);

            // get response from API
            const status = response.status;

            // food added to cart, redirect to food page
            if (status == 200) router.push('/food');
        } catch (e) {
            // show error to user
            console.log(e);
        }
    }

    return (
        <form className="py-2">
            {/* Portion serving options */}
            <fieldset className="mb-4">
                <legend className="sr-only">Serving</legend>
                <Typography variant={'h3'} className={'pb-3'}>Serving Size</Typography>

                {servings.map((serving, index) => {
                    return (
                        <div className="flex items-center mb-4" key={index}>
                            <input id={`serving-${index}`} type="radio" name="serving" value={serving} className="w-4 h-4 border-gray-300 accent-green-600" required
                                onClick={() => setPrice(index)} defaultChecked={index === priceIndex} />
                            <label htmlFor={`serving-${index}`} className="block ml-2 text-sm font-medium text-gray-900 hover:cursor-pointer">
                                {serving === 'SERVING_SINGLE' && 'Single Portion'}
                                {serving === 'SERVING_FAMILY' && 'Family Portion'}
                                {serving === 'SERVING_PARTY' && 'Party Portion'}
                                <span className="ml-4 text-gray-500">§{price[index]}</span>
                            </label>
                        </div>
                    );
                })}
            </fieldset>

            {/* Quantity */}
            <div className="mb-8">
                <label htmlFor="Quantity" className="sr-only">Quantity</label>
                <Typography variant={'h3'} className={'pb-3'}>Quantity</Typography>

                <div className="flex items-center border border-gray-200 rounded w-max">
                    <button type="button" className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75" onClick={() => quantity === 0 ? 0 : setQuantity(quantity - 1)}>
                        &minus;
                    </button>

                    <input type="number" id="Quantity" value={quantity} className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none" readOnly />

                    <button type="button" className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75" onClick={() => setQuantity(quantity + 1)}>
                        &#43;
                    </button>

                </div>
            </div>

            {/* Add to order button */}
            <button type="submit" className="w-full text-green-950 hover:text-white border-2 border-green-600 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center ease-out duration-300" onClick={(e) => addToOrder(e)}>
                Add {quantity} to order
                <span>&nbsp;•&nbsp;</span>
                § {price[priceIndex] * quantity}
            </button>
        </form>
    );
}