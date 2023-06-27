// Client Component - needed due to cookies
'use client';

import { useEffect, useState } from "react";

// API & utils
import { getDelivery } from "@/app/_api";
import { getAuthCookie } from "@/app/_api/cookies";

// components
import TimelineItem from "./timelineItem";

export default function Timeline({ id }) {

    // get delivery information
    const [delivery, setDelivery] = useState({});
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    // determine the progress in delivery
    const deliveryProgress = () => {
        switch (delivery.status) {
            case 'STATUS_PENDING':
                setProgress(1);
                break;
            case 'STATUS_CONFIRMED':
                setProgress(2);
                break;
            case 'STATUS_CANCELED':
                setProgress(-1);
                break;
            case 'STATUS_SHIPPED':
                setProgress(3);
                break;
            case 'STATUS_TRANSIT':
                setProgress(4);
                break;
            case 'STATUS_COMPLETE':
                setProgress(5);
                break;
            default:
                setProgress(0);
                break;
        }
    }

    useEffect(() => {
        // if there is no cookie, return
        if (!getAuthCookie('jwt')) return;

        getDelivery(id)
            .then((res) => { console.log(res.data); setDelivery(res.data); })
            .catch((error) => { console.error(error); })
            .finally(() => setLoading(false));
    }, []);

    // update progress after receiving delivery information
    useEffect(() => { deliveryProgress(); }, [delivery])


    return (
        <>
            {!loading &&
                /* Timeline */
                <div className="p-4">
                    <div className="container">
                        <div className="flex flex-col md:grid grid-cols-12 text-gray-50">

                            {/* Unavailable */}
                            {progress === 0 && <TimelineItem
                                bgColor={'bg-gray-300'}
                                textColor={'text-gray-400'}
                                title={'Information Unavailable'}
                                desc={'Try again later.'}
                            />}

                            {/* Canceled */}
                            {progress === -1 &&
                                <>
                                    {/* Processing */}
                                    <TimelineItem
                                        bgColor={'bg-green-500'}
                                        textColor={'text-white'}
                                        title={'Processed'}
                                        desc={'Delivery was processed.'}
                                    />

                                    {/* Confirmed */}
                                    <TimelineItem
                                        bgColor={'bg-green-500'}
                                        textColor={'text-white'}
                                        title={'Order Confirmed'}
                                        desc={'Payment has been received.'}
                                    />

                                    <TimelineItem
                                        bgColor={'bg-red-500'}
                                        textColor={'text-white'}
                                        title={'Canceled'}
                                        desc={'This delivery was canceled per customer request.'}
                                    />
                                </>
                            }

                            {/* Available Info and Not canceled */}
                            {progress > 0 &&
                                <>
                                    {/* Processing */}
                                    <TimelineItem
                                        bgColor={progress === 1 ? 'bg-orange-400' : 'bg-green-500'}
                                        textColor={'text-white'}
                                        title={progress === 1 ? 'Processing' : 'Processed'}
                                        desc={progress === 1 ? 'Delivery is being processed.' : 'Delivery was processed.'}
                                    />

                                    {/* Confirmed */}
                                    <TimelineItem
                                        bgColor={progress > 1 ? 'bg-green-500' : 'bg-gray-300'}
                                        textColor={progress > 1 ? 'text-white' : 'text-gray-400'}
                                        title={progress > 1 ? 'Order Confirmed' : 'Confirmation'}
                                        desc={progress > 1 ? 'Payment has been received.' : null}
                                    />

                                    {/* Shipped */}
                                    <TimelineItem
                                        bgColor={progress > 2 ? 'bg-green-500' : 'bg-gray-300'}
                                        textColor={progress > 2 ? 'text-white' : 'text-gray-400'}
                                        title={progress > 2 ? 'Order Shipped' : 'Shipping'}
                                        desc={progress > 2 ? 'Delivery has been shipped from the restaurant(s).' : null}
                                    />

                                    {/* In Transit */}
                                    <TimelineItem
                                        bgColor={progress > 3 ? 'bg-green-500' : 'bg-gray-300'}
                                        textColor={progress > 3 ? 'text-white' : 'text-gray-400'}
                                        title={progress > 3 ? 'Order In Transit' : 'Transit'}
                                        desc={progress > 3 ? 'Delivery is on its way. Hang tight!' : null}
                                    />

                                    {/* Complete */}
                                    <TimelineItem
                                        bgColor={progress > 4 ? 'bg-green-500' : 'bg-gray-300'}
                                        textColor={progress > 4 ? 'text-white' : 'text-gray-400'}
                                        title={'Order Complete'}
                                        desc={progress > 4 ? 'Delivery has reached its destination. Shpansa!' : null}
                                    />
                                </>
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    );
}