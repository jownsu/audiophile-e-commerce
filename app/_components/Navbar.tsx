import { Container, Flex } from "@radix-ui/themes";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";
import Cart from "./Cart";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="absolute top-0 z-50 w-full bg-transparent">
            <Container px="5">
                <Flex
                    justify={{
                        initial: "between",
                        sm: "start",
                        md: "between"
                    }}
                    py="5"
                    gap="5"
                    className="border-b border-white border-opacity-10 "
                >
                    <MobileNav />
                    <Link href="/" className="sm:mr-auto md:mr-0">
                        <Image
                            src="images/icon/logo.svg"
                            alt="audiophile icon"
                            height={25}
                            width={143}
                            className="object-contain"
                        />{" "}
                    </Link>
                    <NavLinks className="hidden sm:gap-x-5 md:flex" />
                    <Cart />
                </Flex>
            </Container>
        </nav>
    );
};

export default Navbar;
