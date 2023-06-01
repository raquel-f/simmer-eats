import LoadingCategory from "./_components/loadingCategory";
import LoadingFood from "./_components/loadingFood";

export default function Loading() {
    // number of elements for loading
    const nCategories = 8;
    const nFood = 21;

    return (
        <>
            {/* Loading Category Filter */}
            <div className="hidden mt-8 h-fit mx-6 bg-white rounded-xl lg:block py-2 divide-y divide-gray-100 shadow">
                <ul className="flex items-center justify-evenly flex-wrap h-full">
                    {[...Array(nCategories)].map((c, index) => {
                        return <LoadingCategory key={index} />
                    })}
                </ul>
            </div>

            {/* Loading Food Items */}
            <div className="py-8 px-6 pr-4 w-screen grid items-center justify-center gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] auto-rows-auto">
                {[...Array(nFood)].map((f, index) => {
                    return <LoadingFood key={index} />
                })}
            </div>
        </>
    );
}