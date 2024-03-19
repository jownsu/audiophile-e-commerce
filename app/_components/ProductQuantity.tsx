"use client";

import { useState } from "react";

const ProductQuantity = ({ initial }: { initial?: number }) => {
    const [quantity, setQuantity] = useState(initial || 1);

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

    return (
        <div className="flex h-[48px] w-[120px] items-center justify-between bg-grey text-s2 font-bold">
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
