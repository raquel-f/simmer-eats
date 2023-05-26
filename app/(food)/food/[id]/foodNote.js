import { Typography } from "@/app/utils/typography";

export default function FoodNote({ note }) {
    return (
        <div className="py-1 px-3 border border-green-900 mr-2 rounded-full">
            <Typography variant={'h6'} className={'font-medium'}>{note}</Typography>
        </div>
    );
}