import { Container, Flex } from "@radix-ui/themes";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";
import Cart from "./Cart";

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
                    <img src="images/icon/logo.svg" alt="audiophile icon" />
                    <NavLinks />
                    <Cart />
                </Flex>
            </Container>
        </nav>
    );
};

export default Navbar;
