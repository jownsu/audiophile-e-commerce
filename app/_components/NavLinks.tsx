import Link from "next/link";

const NavLinks = () => {
    return (
        <ul className="hidden sm:flex">
            {LINKS.map((link) => (
                <li key={link.href} className="px-3">
                    <Link
                        className="text-s2 font-bold  uppercase tracking-widest text-white duration-200 hover:text-primary"
                        href={link.href}
                    >
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

const LINKS = [
    {
        href: "/",
        label: "Home"
    },
    {
        href: "/headphones",
        label: "Headphones"
    },
    {
        href: "/speakers",
        label: "Speakers"
    },
    {
        href: "/Earphones",
        label: "Earphones"
    }
];

export default NavLinks;
