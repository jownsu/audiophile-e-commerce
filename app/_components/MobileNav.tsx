"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AudioCategories from "./AudioCategories";

const MobileNav = () => {
    const [showNav, setShowNav] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (showNav) {
            setShowNav(false);
        }
    }, [pathname]);

    return (
        <div className="block md:hidden">
            <button onClick={() => setShowNav(!showNav)}>
                <img
                    src="/images/icon/icon-hamburger.svg"
                    alt="hamburger icon"
                />
            </button>
            {showNav && (
                <div className="absolute left-0 top-full z-30 h-screen w-full bg-black bg-opacity-50">
                    <div className="rounded-b-md bg-white px-5">
                        <AudioCategories />
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileNav;
