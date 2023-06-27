import { Typography } from "@/app/_utils/typography";

export default function Loading() {
    // number of elements for loading
    const nItems = 4;

    return (
        /* Loading Deliveries */
        <div className="animate-pulse p-6">

            {/* Return to deliveries list */}
            <div className="p-2 my-4 w-full">
                <div className="h-2.5 bg-gray-300 rounded-full w-20 mb-1"></div>
            </div>

            {/* Mobile/Portrait View */}
            <div className="md:hidden">
                <div className="h-14 bg-gray-300 rounded-2xl w-full mb-1"></div>
                <div className="h-[550px] bg-gray-300 rounded-3xl w-full my-2"></div>
            </div>

            {/* Landscape view */}
            <div className="hidden md:flex items-start justify-start">
                <div className="h-[550px] bg-gray-300 rounded-3xl w-80 mb-1"></div>
                <div className="grow">
                    <Typography variant={'h2'} className={'mb-4 ml-6'}>Order Contents</Typography>
                    {[...Array(nItems)].map((_, index) => {
                        return (
                            <div className="h-max p-3 border-2 border-green-800 rounded-lg border-opacity-0 hover:bg-gray-100 flex justify-between">
                                <div className="flex items-center">
                                    <div className="h-24 bg-gray-300 rounded-full w-24 mb-1"></div>
                                    <div className="flex flex-col ml-2 sm:ml-4">
                                        <div className="h-4 bg-gray-300 rounded-full w-20 mb-1"></div>
                                        <div className="h-2.5 bg-gray-300 rounded-full w-20 mb-1"></div>
                                        <div className="h-2.5 bg-gray-300 rounded-full w-20 mb-1"></div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center pr-2 sm:flex-row">
                                    <div className="h-4 bg-gray-300 rounded-full w-4 mb-1"></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    );
}