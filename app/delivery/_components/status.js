import { Typography } from "@/app/_utils/typography";

export default function Status({ status }) {
    // define color and status display according to status received
    let color, newStatus;
    switch (status) {
        case 'STATUS_PENDING':
            newStatus = 'Processing';
            color = 'bg-gray-400';
            break;
        case 'STATUS_CONFIRMED':
            newStatus = 'Confirmed';
            color = 'bg-blue-400';
            break;
        case 'STATUS_CANCELED':
            newStatus = 'Canceled';
            color = 'bg-red-400';
            break;
        case 'STATUS_SHIPPED':
            newStatus = 'Shipped';
            color = 'bg-orange-400';
            break;
        case 'STATUS_TRANSIT':
            newStatus = 'In Transit';
            color = 'bg-orange-400';
            break;
        case 'STATUS_COMPLETE':
            newStatus = 'Complete';
            color = 'bg-green-500';
            break;
        default:
            newStatus = 'Unavailable';
            color = 'bg-gray-400';
            break;
    }


    return (
        <>
            <div className={`w-4 h-4 ${color} rounded-full mr-2`}></div>
            <Typography variant={'h4'} className={'font-semibold'}>{newStatus}</Typography>
        </>
    );
}