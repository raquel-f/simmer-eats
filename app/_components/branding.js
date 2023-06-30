import Link from "next/link";
import Image from "next/image";

export default function Branding() {
    return (
        <Link href={"/"} className="flex items-center">
            <Image src={'/logo-v2.png'} className="mr-3 w-auto h-9" alt="Simmer Eats Logo" height={80} width={400} priority={true} />
        </Link>
    );
}