import Link from "next/link";

// utils
import { Typography } from "@/app/_utils/typography";

// components
import Timeline from "./_components/timeline";
import DeliveryContent from "./_components/deliveryContent";
import Tabs from "./_components/tabs";


export default async function Page({ params }) {

    return (
        <div className="p-6">

            {/* Return to deliveries list */}
            <div className="p-2 my-4 w-full">
                <Link href={'/delivery'} className="group flex flex-row items-center hover:cursor-pointer w-max">
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="h-4 w-4 mr-2">
                        <path d="M22 13.5H6.3l5.5 7.5H8.3l-6.5-9 6.5-9h3.5l-5.5 7.5H22v3z"></path>
                    </svg>
                    <Typography variant={'h6'} className={'font-medium group-hover:font-semibold'}>Return to Deliveries</Typography>
                </Link>
            </div>

            {/* Mobile/Portrait View */}
            <div className="md:hidden">
                <Tabs id={params.id} />
            </div>

            {/* Landscape view */}
            <div className="hidden md:flex items-start justify-start">
                <Timeline id={params.id} />
                <div className="grow">
                    <Typography variant={'h2'} className={'mb-4 ml-6'}>Order Contents</Typography>
                    <DeliveryContent id={params.id} />
                </div>
            </div>

        </div>
    );
}