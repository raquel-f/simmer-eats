// Client Component - needed due to cookies
'use client';

import { useEffect, useState } from "react";

// API & utils
import { getDelivery } from "@/app/_api";
import { getAuthCookie } from "@/app/_api/cookies";
import { Typography } from "@/app/_utils/typography";

// components
import DeliveryProduct from "./deliveryProduct";

export default function DeliveryContent({ id }) {

    // get delivery information
    const [delivery, setDelivery] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // if there is no cookie, return
        if (!getAuthCookie('jwt')) return;

        getDelivery(id)
            .then((res) => { console.log(res.data); setDelivery(res.data); })
            .catch((error) => { console.error(error); })
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            {/* Contents */}
            {!loading &&
                <div div className="ml-4 grow">
                    <Typography variant={'h2'} className={'mb-4 ml-6'}>Order Contents</Typography>
                    {delivery.products.map((prod => {
                        return <DeliveryProduct key={prod._id} {...prod} />
                    }))}
                </div>
            }

        </>
    );
}