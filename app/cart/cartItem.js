import { useEffect, useState } from "react";
import { getFoodItem, getImage } from "../api";
import { Typography } from "../utils/typography";
import Image from "next/image";

// default image (transparent 100x100)
const blankImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAQAAADa613fAAAAaElEQVR42u3PQREAAAwCoNm/9CL496ABuREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREWkezG8AZQ6nfncAAAAASUVORK5CYII=';

export default function CartItem({ product, quantity, serving, totalPrice, deleteItem, _id }) {

    // get product information
    const [foodName, setName] = useState('');
    const [foodImage, setImage] = useState(blankImage);

    useEffect(() => {
        try {
            // food product information
            getFoodItem(product)
                .then((res) => {
                    console.log(res.data);
                    setName(res.data.name);

                    // get food image
                    getImage(res.data.image).then((res) => setImage(res.data.image));
                })
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        /* Container for item */
        <div className="h-max p-3 border-2 border-green-800 rounded-lg border-opacity-0 hover:bg-gray-100 flex justify-between">

            {/* Product Information */}
            <div className="flex items-center">
                <Image src={foodImage} alt="food image" width={100} height={100} />
                <div className="flex flex-col ml-2 sm:ml-4">
                    <Typography variant={'h3'}>{foodName}</Typography>
                    <Typography variant={'h5'} className={'hidden sm:block'}>
                        Serving:&nbsp;
                        <span className="font-normal">
                            {serving === 'SERVING_SINGLE' && 'Single Portion'}
                            {serving === 'SERVING_FAMILY' && 'Family Portion'}
                            {serving === 'SERVING_PARTY' && 'Party Portion'}
                        </span>
                    </Typography>
                    <Typography variant={'h5'} className={'hidden sm:block'}>
                        Quantity: <span className="font-normal">{quantity}</span>
                    </Typography>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center pr-2 sm:flex-row">

                {/* Price Information */}
                <Typography variant={'h3'} className={'font-semibold'}> §{totalPrice}</Typography>

                {/* Delete Cart Item */}
                <div className="sm:ml-4 hover:cursor-pointer" onClick={() => { deleteItem(_id) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                        <path d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998" stroke="#5A0105" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke="#5A0105" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18.85 9.14001L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79002C6.00002 22 5.91002 20.78 5.80002 19.21L5.15002 9.14001" stroke="#5A0105" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.33 16.5H13.66" stroke="#5A0105" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.5 12.5H14.5" stroke="#5A0105" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>

        </div>
    );
}