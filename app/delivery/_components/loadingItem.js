export default function LoadingItem() {

    return (
        /* Container for item */
        <div className="animate-pulse h-max p-3 rounded-lg shadow flex justify-between">

            {/* Delivery Information */}
            <div className="flex items-center">
                <div className="hidden sm:block h-24 bg-gray-300 rounded-full w-24 mb-1"></div>
                <div className="flex flex-col ml-2 sm:ml-4">
                    <div className="h-2.5 bg-gray-300 rounded-full w-20 mb-1"></div>
                    <div className="h-2.5 bg-gray-300 rounded-full w-20 mb-1"></div>
                    <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-1"></div>
                </div>
            </div>

            {/* Status Information */}
            <div className="flex flex-col items-center justify-center pr-2 sm:flex-row">
                <div className="h-4 bg-gray-300 rounded-full w-14 mb-1"></div>
            </div>

        </div>
    );
}