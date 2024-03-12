import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Theme } from "@radix-ui/themes";

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
            <body className="bg-neutral-50">
                <Theme>{children}</Theme>
            </body>
        </html>
    );
}
