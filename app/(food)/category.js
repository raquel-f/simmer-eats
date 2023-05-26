import Image from "next/image";
import { Typography } from "../utils/typography";

export default function Category({ icon, name, updateCategory, activeCatName }) {

    const activeClass = activeCatName === name && 'border-2 border-gray-200';
    return (
        <li className="flex flex-col justify-center items-center group px-4 my-2 hover:cursor-pointer" onClick={updateCategory}>
            <Image src={icon} height={50} width={50} alt="category icon" className={`p-2 rounded-full group-hover:bg-gray-100 ${activeClass}`} />
            <Typography variant={'h5'} className={'group-hover:font-semibold'}>{name}</Typography>
        </li>
    );
}