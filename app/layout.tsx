import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Container, Theme } from "@radix-ui/themes";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

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
            <body className="min-h-screen bg-neutral-50">
                <Theme>
                    <Navbar />
                    <Container>
                        <main className="h-screen">{children}</main>
                    </Container>
                    <Footer />
                </Theme>
            </body>
        </html>
    );
}
