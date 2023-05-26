import Link from "next/link";
import { Typography } from "../utils/typography";

export default function HomeNav() {
    return (
        <Link href={"/food"}>
            <button type="button" className="bg-green-950 p-4 rounded-full text-white hover:bg-green-700 ease-out duration-300 font-medium">
                <Typography variant={'h5'}>Browse Food</Typography>
            </button>
        </Link>

    );
}