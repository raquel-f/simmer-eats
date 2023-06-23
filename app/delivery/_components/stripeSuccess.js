// Client Component - needed due to state
'use client';

import { useState } from "react";

// utils
import { Typography } from "@/app/_utils/typography";


export default function StripeSuccess({ popup }) {

    const [display, setDisplay] = useState(popup);

    if (display) {
        // remove popup after 5 seconds
        setTimeout(setDisplay, 5000, false);
    }

    return (
        <>
            {/* Success Popup */}
            {display &&
                <div className="bg-green-600 rounded-xl p-4 text-white md:m-4 w-max absolute left-1/2 transform -translate-x-1/2">
                    <Typography variant={'h2'}>Vadish!</Typography>
                    <Typography variant={'h4'}>Your delivery will begin processing.</Typography>
                </div>
            }
        </>
    );
}