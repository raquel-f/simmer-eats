import Image from "next/image";
import Link from "next/link";
import { Typography } from "../utils/typography";
import { getImage } from "../api";

export default async function Restaurant({ _id, name, description, image }) {
    
    // get image from API
    const imageData = await getImage(image);
    const businessImage = imageData.data.image;

    return (
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row max-w-xs md:max-w-xl ">
            
            {/* Restaurant image */}
            <Image src={businessImage} className="object-cover rounded-t-lg md:h-auto md:rounded-none md:rounded-l-lg" alt="restaurant" width={180} height={180} />

            {/* Information */}
            <div className="flex flex-col justify-between p-4 leading-normal">

                {/* Name */}
                <Typography variant={'h4'} className={'text-gray-900 tracking-tight font-semibold'}>{name}</Typography>

                {/* Description */}
                <Typography variant={'h5'} className={'text-gray-700'}>{description}</Typography>

                {/* Link to full page */}
                <Link href={`/restaurant/${_id}`} className="mt-4 text-white bg-green-800 hover:bg-green-950 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center ease-out duration-300">See More</Link>
            </div>
        </div>
    );
}