import { Container, Flex } from "@radix-ui/themes";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";
import Cart from "./Cart";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="relative bg-black">
            <Container px="5">
                <Flex
                    justify={{
                        initial: "between",
                        sm: "between"
                    }}
                    py="5"
                    gap="5"
                    className="border-b border-white border-opacity-10 "
                >
                    <MobileNav />
                    <Link href="/">
                        <Image
                            src="images/icon/logo.svg"
                            alt="audiophile icon"
                            height={25}
                            width={143}
                            className="object-contain"
                        />{" "}
                    </Link>

                    <NavLinks className="hidden sm:flex sm:gap-x-5" />
                    <Cart />
                </Flex>
            </Container>
        </nav>
    );
};

export default Navbar;
