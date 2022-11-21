import Link from "next/link";

const Header = () => 
    <h3 className="text-2xl font-bold tracking-tight leading-tight mb-20 mt-8 md:text-4xl md:tracking-tighter">
        <Link href="/" className="hover:underline">
            Blog
        </Link>
    </h3>

export default Header;