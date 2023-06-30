import Image from "next/image";
import Link from "next/link";

// API & utils
import { getFoodItem, getImage } from "@/app/_api";
import { Typography } from "@/app/_utils/typography";

// components
import FoodNote from "./_components/foodNote";
import AddToCart from "./_components/addToCart";

export default async function FoodID({ params }) {

    // get food item
    const foodData = await getFoodItem(params.id);
    //console.log(foodData.data);

    // get food image from API
    const imageData = await getImage(foodData.data.image);
    const foodImage = imageData.data.image;

    // servings
    const servings = foodData.data.serving;
    const price = foodData.data.price;

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

            {/* Food information */}
            <div className="p-2 flex flex-col items-center justify-center md:flex-row md:justify-around">
                {/* Food image */}
                <Image src={foodImage} width={300} height={300} className="mb-4 h-auto" alt="food image" />

                <div>
                    {/* Food name & min price */}
                    <div className="w-full mb-4">
                        <Typography variant={'h2'}>{foodData.data.name}</Typography>
                        <Typography variant={'h3'}>§{price[0]}</Typography>
                    </div>

                    {/* Food notes */}
                    <div className="flex items-start justify-start w-full mb-4">
                        {foodData.data.notes && foodData.data.notes.map((note, index) =>
                            <FoodNote note={note} key={index} />
                        )}
                    </div>

                    {/* Food Ingredients */}
                    <div className="flex items-start justify-start w-full mb-4">
                        <Typography variant={'body'} className={'text-sm font-medium'}>
                            Ingredients: &nbsp;
                            {foodData.data.ingredients.map((ing, index) => {
                                if (index === foodData.data.ingredients.length - 1)
                                    return <span key={index} className="font-normal">{ing}.</span>
                                return <span key={index} className="font-normal">{ing}, </span>
                            })}
                        </Typography>
                    </div>

                    {/* Game Information */}
                    <div className="w-full mb-4">
                        <Typography variant={'body'} className={'text-sm font-medium'}>
                            Game Expansion Pack: <span className="font-normal">{foodData.data.pack}</span>
                        </Typography>

                    </div>

                    {/* Purchase food form */}
                    <AddToCart servings={servings} price={price} foodID={foodData.data._id} />
                </div>
            </div>
        </div>
    );
}