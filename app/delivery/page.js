// components
import List from "./_components/list";
import StripeSuccess from "./_components/stripeSuccess";

export default function Page({ searchParams }) {

    // display popup if page access through stripe success
    let popup = false;
    if (searchParams.from !== undefined && searchParams.from === 'stripe') popup = true;

    return (
        <>
            {/* Success Popup */}
            <StripeSuccess popup={popup} />

            {/* Page Content */}
            <div className="p-2 sm:p-6">
                {/* List of user deliveries */}
                <List />
            </div>
        </>
    );
}