import Image from "next/image";
import Link from "next/link";

// API & utils
import { getImage, getRestaurantFood, getBusiness } from "@/app/_api";
import { Typography } from "@/app/_utils/typography";

// components
import FoodItem from "../../food/_components/foodItem";

export default async function RestaurantID({ params }) {

    // get business information
    const restData = await getBusiness(params.id);
    console.log(restData.data);

    // get business image from API
    const imageData = await getImage(restData.data.image);
    const restImage = imageData.data.image;

    // get restaurant food information from API
    const foodAPI = await getRestaurantFood(params.id);
    const resFood = foodAPI.data;

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

            <div className="flex flex-col md:flex-row">

                {/* Restaurant Information */}
                <div className="flex flex-col mt-4 h-fit w-full lg:w-max bg-white rounded-xl py-2 divide-y divide-gray-100 shadow  items-center">
                    {/* Restaurant image */}
                    <Image src={restImage} width={200} height={200} className="h-[200px] rounded-lg" alt="business image" />

                    {/* Information */}
                    <div className="flex flex-col p-4 pr-6">
                        {/* Name */}
                        <Typography variant={'h2'} className={'mb-4'}>{restData.data.name}</Typography>

                        {/* Schedule */}
                        <div className="flex mb-2 items-center">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="mr-2"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 11h6v1h-7v-9h1v8z" /></svg>

                            <Typography variant={'h5'}>{restData.data.open.hour}:{restData.data.open.minute} - {restData.data.close.hour}:{restData.data.close.minute}</Typography>
                        </div>

                        {/* Address */}
                        <div className="flex mb-6 items-center">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="mr-2"><path d="M22 11.414v12.586h-20v-12.586l-1.293 1.293-.707-.707 12-12 12 12-.707.707-1.293-1.293zm-6 11.586h5v-12.586l-9-9-9 9v12.586h5v-9h8v9zm-1-7.889h-6v7.778h6v-7.778z" /></svg>

                            <Typography variant={'h5'}>{restData.data.address}</Typography>
                        </div>

                        {/* Description */}
                        <Typography variant={'h5'} className={'max-w-[250px] text-justify'}>{restData.data.description}</Typography>
                    </div>
                </div>

                {/* Restaurant Food */}
                <div className="flex mt-4 py-2 h-fit w-full md:ml-8 md:w-2/3">

                    {/* Food Items */}
                    <div className="pb-8 px-6 pr-4 w-screen grid items-center justify-center gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] auto-rows-auto">
                        {resFood.map((food, index) => {
                            return <FoodItem key={index} {...food} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}