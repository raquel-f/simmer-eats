// utils
import { Typography } from "@/app/_utils/typography";

export default function TimelineItem({ title, desc, bgColor, textColor }) {

    return (
        <div className="flex md:contents">
            <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                    <div className={`h-full w-1 ${bgColor} pointer-events-none`}></div>
                </div>
                {/* Bullet point circle */}
                <div className={`w-6 h-6 absolute top-1/2 -mt-3 rounded-full ${bgColor} shadow text-center`} />
            </div>
            {/* Information */}
            <div className={`${bgColor} col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full`}>
                <Typography variant={'h4'} className={`font-semibold ${textColor}`}>{title}</Typography>
                <Typography variant={'small'} className={`${textColor}`}>{desc}</Typography>
            </div>
        </div>
    );

}