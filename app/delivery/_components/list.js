// Client Component - needed due to cookies
'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

// API & utils
import { getLoggedDeliveries } from "@/app/_api";
import { getAuthCookie } from "@/app/_api/cookies";
import { Typography } from "@/app/_utils/typography";

// components
import DeliveryItem from "./deliveryItem";

export default function List() {

    // get authenticated user's shopping cart information
    const [deliveries, setDeliveries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // if there is no cookie, return
        if (!getAuthCookie('jwt')) return;

        getLoggedDeliveries()
            .then((res) => {
                console.log(res.data);
                // inverse order in database so newest are first
                let data = res.data.reverse();
                setDeliveries(data);
                setLoading(false);
            }).catch((error) => { console.error(error); setLoading(false); });
    }, []);

    return (
        <>
            {/* Container for delivery items */}
            <div className="grid grid-cols-1 gap-y-4 mb-1">
                {deliveries.map((d) => {
                    return <DeliveryItem key={d._id} {...d} />
                })}
            </div>

            {/* Empty state */}
            {deliveries.length === 0 && !loading &&
                <div className="flex flex-col items-center justify-center p-8">
                    <Image src={'/android-chrome-512x512.png'} height={200} width={200} alt='plumbob' className="mb-4"></Image>
                    <Typography variant={'h4'}>No deliveries yet.</Typography>
                    <Typography variant={'h4'} className={'mb-6'}>Try finding some delicious food <Link href={'/food'} className="font-semibold">here</Link>. </Typography>
                </div>
            }
        </>
    );

}