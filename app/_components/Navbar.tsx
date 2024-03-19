"use client";

import { Container, Flex } from "@radix-ui/themes";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";
import Cart from "./Cart";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(true);
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } 
            else if(window.scrollY <= 0 && pathname === "/"){
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

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
                        <Image
                            src="/images/icon/logo.svg"
                            alt="audiophile icon"
                            height={25}
                            width={143}
                            className="object-contain"
                        />{" "}
                    </Link>
                    <NavLinks className="hidden sm:gap-[34px] md:flex" />
                    <Cart />
                </Flex>
            </Container>
        </nav>
    );
};

export default Navbar;
