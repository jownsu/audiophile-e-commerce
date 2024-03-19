"use client";

import { useState } from "react";

interface Props {
    variant?: "sm" | "lg";
    initial?: number
}

const ProductQuantity = ({ initial = 1, variant = "sm" }: Props) => {
    const [quantity, setQuantity] = useState(initial);

    const hanndleAdd = () => {
        if (quantity < 100) {
            setQuantity((prevState) => prevState + 1);
        }
    };

    const handleMinus = () => {
        if (quantity > 1) {
            setQuantity((prevState) => prevState - 1);
        }
    };

    let size = "";

    if(variant === "sm"){
        size = "h-[32px] w-[96px]"
    }
    else{
        size = "h-[48px] w-[120px]"
    }

    return (
        <div className={`flex items-center justify-between bg-grey text-s2 font-bold ${size}`}>
            <button
                type="button"
                className="px-[20px] opacity-50 duration-200 hover:text-primary"
                onClick={handleMinus}
            >
                -
            </button>
            <span>{quantity}</span>
            <button
                type="button"
                className="px-[20px] opacity-50 duration-200 hover:text-primary"
                onClick={hanndleAdd}
            >
                +
            </button>
        </div>
    );
};

export default ProductQuantity;
