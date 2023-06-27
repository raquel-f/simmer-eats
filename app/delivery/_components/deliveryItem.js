import Image from "next/image";
import Link from "next/link";

// utils
import { Typography } from "@/app/_utils/typography";

// components
import Status from "./status";

export default function DeliveryItem({ products, status, _id, lastUpdated }) {

    // get product information
    let totalQuantity = 0;
    let totalPrice = 0;

    products.forEach(prod => {
        totalQuantity += prod.quantity;
        totalPrice += prod.totalPrice;
    });

    // format last update date
    const options = {
        timeZoneName: 'shortOffset',
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric'
    };
    const locale = navigator.languages[0];
    let dateUpdate = new Date(lastUpdated).toLocaleString(locale, options);


    return (
        /* Container for item */
        <Link href={`/delivery/${_id}`} className="h-max p-3 border-2 border-green-800 rounded-lg border-opacity-0 hover:bg-gray-100 flex justify-between">

            {/* Delivery Information */}
            <div className="flex items-center">
                <Image src={'/delivery.png'} alt="delivery icon" width={100} height={100} className="hidden sm:block" />
                <div className="flex flex-col ml-2 sm:ml-4">
                    <Typography variant={'h5'} className={'hidden sm:block'}>
                        Quantity: <span className="font-normal">{totalQuantity}</span>
                    </Typography>
                    <Typography variant={'h5'} className={'hidden sm:block'}>
                        Total Price: <span className="font-normal">§{totalPrice}</span>
                    </Typography>
                    <Typography variant={'h5'} className={'mr-2'}>
                        Last Updated at <span className="font-normal">{dateUpdate}</span>
                    </Typography>
                </div>
            </div>

            {/* Status Information */}
            <div className="flex flex-col items-center justify-center pr-2 sm:flex-row">
                <Status status={status} />
            </div>

        </Link>
    );
}