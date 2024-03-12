import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Container, Theme } from "@radix-ui/themes";
import Navbar from "./_components/Navbar";

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope"
});

export const metadata: Metadata = {
    title: "Audiophile E-commerce",
    description: "Audiophile e-commerce for sound enjoyers"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={manrope.className}>
            <body className="min-h-screen bg-neutral-500">
                <Theme>
                    <Navbar />
                    <Container>
                        <main>{children}</main>
                    </Container>
                </Theme>
            </body>
        </html>
    );
}
