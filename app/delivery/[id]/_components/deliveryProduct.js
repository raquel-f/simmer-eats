import { useEffect, useState } from "react";
import Image from "next/image";

// API & utils
import { getFoodItem, getImage } from "@/app/_api";
import { Typography } from "@/app/_utils/typography";

// default image (transparent 100x100)
const blankImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAQAAADa613fAAAAaElEQVR42u3PQREAAAwCoNm/9CL496ABuREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREWkezG8AZQ6nfncAAAAASUVORK5CYII=';

export default function DeliveryProduct({ product, quantity, serving, totalPrice }) {

    const [foodName, setName] = useState('');
    const [foodImage, setImage] = useState(blankImage);

    // get product information
    useEffect(() => {
        getFoodItem(product)
            .then((res) => {
                setName(res.data.name);

                // get food image
                getImage(res.data.image).then((res) => setImage(res.data.image));
            }).catch((error) => console.error(error))

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
            </div>

        </div>
    );
}