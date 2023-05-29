import Image from "next/image";
import Link from "next/link";

// API & utils
import { getBusiness, getImage } from "@/app/_api";
import { Typography } from "@/app/_utils/typography";

export default async function FoodItem({ _id, name, price, owner, image }) {

    // get food image from API
    const imageData = await getImage(image);
    const foodImage = imageData.data.image;

    // get business information
    const businessData = await getBusiness(owner);
    const businessName = businessData.data.name;

    return (
        /* Food Item Container */
        <div className="w-[168] bg-white border border-gray-200 rounded-lg shadow flex flex-col items-center">

            {/* Food Image */}
            <Image className="p-8 rounded-t-lg" src={foodImage} alt="product image" width={180} height={180} />

            {/* Food Details */}
            <div className="px-5 pb-5 w-full">
                {/* Food Name */}
                <Typography variant={'h5'} className={'text-gray-900 tracking-tight font-semibold'}>{name}</Typography>

                {/* Restaurant */}
                <Typography variant={'h5'} className={'text-gray-900 tracking-tight'}>{businessName}</Typography>

                {/* Pricing and order */}
                <div className="flex items-center justify-between mt-2">
                    <Typography variant={'h4'} className={'font-semibold'}>§{price[0]}</Typography>

                    <Link href={`/food/${_id}`} className="text-white bg-green-800 hover:bg-green-950 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center ease-out duration-300">Add</Link>

                </div>
            </div>
        </div>

    );
}