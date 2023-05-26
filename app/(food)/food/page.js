import {
    getBudgetFood,
    getBusinesses,
    getFamilyServingFood,
    getFood,
    getLactoseFreeFood,
    getPartyServingFood,
    getPremiumFood,
    getSingleServingFood,
    getVegetarianFood
} from "@/app/api";
import CategoryFilter from "../categoryFilter";
import FoodItem from "../foodItem";
import Restaurant from "../restaurant";

const categories = [
    { name: 'Premium', icon: '/categories/premium.png' },
    { name: 'Budget', icon: '/categories/budget.png' },
    { name: 'Restaurants', icon: '/categories/restaurant.png' },
    { name: 'Vegetarian', icon: '/categories/vegetarian.png' },
    { name: 'Lactose Free', icon: '/categories/lactose.png' },
    { name: 'Single Serving', icon: '/categories/single.png' },
    { name: 'Family Serving', icon: '/categories/family.png' },
    { name: 'Party Serving', icon: '/categories/party.png' },
];

export default async function Food({ searchParams }) {

    let foodAPI, restaurantAPI, food, restaurants;

    // get information according to filter
    if (searchParams.filter !== undefined) {
        switch (searchParams.filter) {
            case 'Premium':
                foodAPI = await getPremiumFood();
                food = foodAPI.data;
                break;
            case 'Budget':
                foodAPI = await getBudgetFood();
                food = foodAPI.data;
                break;
            case 'Restaurants':
                restaurantAPI = await getBusinesses();
                restaurants = restaurantAPI.data;
                break;
            case 'Vegetarian':
                foodAPI = await getVegetarianFood();
                food = foodAPI.data;
                break;
            case 'Lactose Free':
                foodAPI = await getLactoseFreeFood();
                food = foodAPI.data;
                break;
            case 'Single Serving':
                foodAPI = await getSingleServingFood();
                food = foodAPI.data;
                break;
            case 'Family Serving':
                foodAPI = await getFamilyServingFood();
                food = foodAPI.data;
                break;
            case 'Party Serving':
                foodAPI = await getPartyServingFood();
                food = foodAPI.data;
                break;
            default: break;
        }
    } else {
        // get all food information from API
        foodAPI = await getFood();
        food = foodAPI.data;
    }

    return (
        <>
            {/* Filter food by category */}
            <CategoryFilter categories={categories} />

            {/* Food Items */}
            {(searchParams.filter === undefined || searchParams.filter !== 'Restaurants') &&
                <div className="py-8 px-6 pr-4 w-screen grid items-center justify-center gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] auto-rows-auto">
                    {food.map((food, index) => {
                        return <FoodItem key={index} {...food} />
                    })}
                </div>
            }

            {/* Restaurants */}
            {searchParams && searchParams.filter === 'Restaurants' &&
                <div className="py-8 px-6 pr-5 w-screen grid items-center justify-center gap-8 grid-cols-[repeat(auto-fill,minmax(350px,1fr))] auto-rows-auto">
                    {restaurants.map((res, index) => {
                        return <Restaurant key={index} {...res} />
                    })}
                </div>
            }
        </>
    );
}