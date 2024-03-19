"use client";

import AudiophileLogo from "@/public/images/icon/logo.svg";
import { Container, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Cart from "./Cart";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else if (window.scrollY <= 0 && pathname === "/") {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            setScrolled(true);
        };
    }, [pathname]);

    return (
        <nav
            className={`fixed top-0 z-50 w-full duration-200 ${scrolled ? "bg-black" : "bg-transparent"}`}
        >
            <Container className="sm:px-10">
                <Flex
                    justify={{
                        initial: "between",
                        sm: "start",
                        md: "between"
                    }}
                    align="center"
                    gap="5"
                    className="h-[90px] border-b border-white border-opacity-10 px-6 sm:px-0"
                >
                    <MobileNav />
                    <Link href="/" className="sm:mr-auto md:mr-0">
                        <AudiophileLogo className="fill-white duration-200 hover:fill-primary" />
                    </Link>
                    <NavLinks className="hidden sm:gap-[34px] md:flex" />
                    <Cart />
                </Flex>
            </Container>
        </nav>
    );
};

export default Navbar;
