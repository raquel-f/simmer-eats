import Link from "next/link";
import Image from "next/image";

export default function Branding() {
    return (
        <Link href={"/"} className="flex items-center">
            <Image src={'/logo-high.png'} className="mr-3 w-auto h-9" alt="Simmer Eats Logo" height={40} width={150} />
        </Link>
    );
}