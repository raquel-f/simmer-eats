export default function Loading() {
    return (
        <div className="p-6 animate-pulse">

            {/* Loading back link */}
            <div className="p-2 my-4 w-full">
                <div className="h-2.5 bg-gray-300 rounded-full w-12 mb-1"></div>
            </div>

            <div className="p-2 flex flex-col items-center justify-center md:flex-row md:justify-around">

                {/* Loading Image */}
                <svg className="w-44 h-44 text-gray-200 p-8 rounded-t-lg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>

                {/* Loading Food Information */}
                <div>

                    {/* Food name & min price */}
                    <div className="w-full mb-4">
                        <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-1"></div>
                        <div className="h-2.5 bg-gray-200 rounded-full w-10 mb-2"></div>
                    </div>

                    {/* Food notes */}
                    <div className="flex items-start justify-start w-full mb-4">
                        <div className="h-2.5 bg-gray-300 rounded-full w-24"></div>
                    </div>

                    {/* Food Ingredients */}
                    <div className="flex items-start justify-start w-full mb-4">
                        <div className="h-2.5 bg-gray-300 rounded-full w-24"></div>
                    </div>

                    {/* Game Information */}
                    <div className="w-full mb-4">
                        <div className="h-2.5 bg-gray-300 rounded-full w-24"></div>
                    </div>

                    {/* Purchase food form */}
                    <div className="h-40 bg-gray-300 rounded-xl w-40 mb-5"></div>
                    <div className="h-10 bg-gray-300 rounded-xl w-40"></div>

                </div>
            </div>
        </div>
    );
}