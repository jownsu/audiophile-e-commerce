import { Theme } from "@radix-ui/themes";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import "./globals.css";

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
                    <main className="h-screen">{children}</main>
                    <Footer />
                </Theme>
            </body>
        </html>
    );
}
