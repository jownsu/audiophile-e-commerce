import Link from "next/link";

const NavLinks = ({ className }: { className?: string }) => {
    return (
        <ul className={className}>
            {LINKS.map((link) => (
                <li key={link.href} className="">
                    <Link
                        className="text-s2 font-semibold uppercase tracking-widest text-white duration-200 hover:text-primary"
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
