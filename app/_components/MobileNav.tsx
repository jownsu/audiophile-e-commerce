"use client";

import { useState } from "react";
import AudioCategories from "./AudioCategories";

const MobileNav = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className="block sm:hidden">
            <button onClick={() => setShowNav(!showNav)}>
                <img
                    src="images/icon/icon-hamburger.svg"
                    alt="hamburger icon"
                />
            </button>
            {showNav && (
                <div className="absolute left-0 top-full h-screen w-full bg-black bg-opacity-50">
                    <AudioCategories />
                </div>
            )}
        </div>
    );
};

export default MobileNav;
