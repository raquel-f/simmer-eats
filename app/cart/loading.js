export default function Loading() {
    // number of elements for loading
    const nItems = 3;

    return (
        <div className="p-6 animate-pulse">

            {/* Loading back link */}
            <div className="p-2 my-4 w-full">
                <div className="h-2.5 bg-gray-300 rounded-full w-12 mb-1"></div>
            </div>

            {/* Cart */}
            <div className="grid grid-cols-1 gap-y-4 mb-6">
                {[...Array(nItems)].map((_, index) => {
                    return (
                        <div className="h-max p-3 border-2 border-green-800 rounded-lg border-opacity-0 hover:bg-gray-100 flex justify-between" key={index}>

                            {/* Product Information */}
                            <div className="flex items-center">
                                <svg className="w-24 h-24 text-gray-200 p-8 rounded-full border-4" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>

                                <div className="flex flex-col ml-2 sm:ml-4">
                                    <div className="h-7 bg-gray-300 rounded-lg w-40 mb-1"></div>
                                    <div className="h-5 bg-gray-300 rounded-lg w-32 mb-1"></div>
                                    <div className="h-5 bg-gray-300 rounded-lg w-32 mb-1"></div>
                                </div>
                            </div>

                            {/* Price and Delete */}
                            <div className="flex flex-col items-center justify-center pr-2 sm:flex-row">
                                <div className="h-7 bg-gray-300 rounded-lg w-7"></div>
                                <div className="h-7 bg-gray-300 rounded-lg w-7"></div>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );

}