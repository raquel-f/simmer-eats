// Client Component - needed due to click events
'use client';

import { useState } from "react";

// API & utils
import { Typography } from "@/app/_utils/typography";

// components
import Timeline from "./timeline";
import DeliveryContent from "./deliveryContent";

export default function Tabs({ id }) {

    // set active tab and its style
    const [activeTab, setActiveTab] = useState(false);
    const activeClass = 'text-green-900 bg-gray-100 font-semibold';

    return (
        <>
            {/* Tabs */}
            <ul className="text-center font-medium text-gray-500 divide-x divide-gray-200 rounded-lg shadow flex">
                <li className="w-1/2" onClick={() => setActiveTab(false)}>
                    <Typography variant={'h3'} className={`${!activeTab ? activeClass : ''} inline-block w-full p-4 rounded-l-lg`}>Timeline</Typography>
                </li>
                <li className="w-1/2" onClick={() => setActiveTab(true)}>
                    <Typography variant={'h3'} className={`${activeTab ? activeClass : ''} inline-block w-full p-4 rounded-l-lg`}>Contents</Typography>
                </li>
            </ul>

            {/* Page Content */}
            <div>
                {!activeTab && <Timeline id={id} />}
                {activeTab && <DeliveryContent id={id} />}
            </div>


        </>
    );
}