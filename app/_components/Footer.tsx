import Facebook from "@/public/images/icon/icon-facebook.svg";
import Instagram from "@/public/images/icon/icon-instagram.svg";
import Twitter from "@/public/images/icon/icon-twitter.svg";
import AudiophileLogo from "@/public/images/icon/logo.svg";
import { Container, Grid, Text } from "@radix-ui/themes";
import Link from "next/link";
import NavLinks from "./NavLinks";

const SOCIAL_LINKS = [
    {
        icon: (
            <Facebook className="fill-white duration-200 hover:fill-primary" />
        ),
        href: "https://facebook.com"
    },
    {
        icon: (
            <Twitter className="fill-white duration-200 hover:fill-primary" />
        ),
        href: "https://twitter.com"
    },
    {
        icon: (
            <Instagram className="fill-white duration-200 hover:fill-primary" />
        ),
        href: "https://instagram.com"
    }
];

const Footer = () => {
    return (
        <footer className="mt-auto bg-dark text-white">
            <Container px={"5"}>
                <Grid
                    columns={{
                        initial: "1",
                        sm: "3",
                        md: "2"
                    }}
                    className="relative justify-items-center gap-y-10 py-12 sm:justify-items-stretch"
                >
                    <div className="absolute left-1/2 top-0 h-1 w-[100px] -translate-x-1/2 bg-primary sm:left-0 sm:translate-x-0"></div>
                    <Link href="/">
                        <AudiophileLogo className="fill-white duration-200 hover:fill-primary" />
                    </Link>
                    <NavLinks className="space-y-2 text-center sm:col-span-3 sm:flex sm:gap-x-5 sm:space-y-0 sm:text-start md:col-span-1 md:justify-end" />
                    <Text className="text-center text-s4 font-normal opacity-50 sm:col-span-3 sm:text-start md:col-span-1">
                        Audiophile is an all in one stop to fulfill your audio
                        needs. We're a small team of music lovers and sound
                        specialists who are devoted to helping you get the most
                        out of personal audio. Come and visit our demo facility
                        - we’re open 7 days a week.
                    </Text>
                    <Text className="text-s4 font-semibold opacity-50 sm:col-span-2 sm:mt-9 md:order-2 md:col-span-1 md:mt-5">
                        Copyright 2021. All Rights Reserved
                    </Text>
                    <ul className="flex items-center gap-x-4 sm:items-end sm:justify-end md:order-1 md:col-span-1 md:pb-2">
                        {SOCIAL_LINKS.map((link, index) => (
                            <li key={index}>
                                <Link href={link.href}>{link.icon}</Link>
                            </li>
                        ))}
                    </ul>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;
