import LoadingItem from "./_components/loadingItem";

export default function Loading() {
    // number of elements for loading
    const nDeliveries = 8;

    return (
        <>
            {/* Loading Deliveries */}
            <div className="p-2 sm:p-6">
                {[...Array(nDeliveries)].map((_, index) => {
                    return <LoadingItem key={index} />
                })}
            </div>
        </>
    );
}