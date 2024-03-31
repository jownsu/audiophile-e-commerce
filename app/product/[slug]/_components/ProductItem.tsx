"use client";

import ProductQuantity from "@/app/_components/ProductQuantity";
import { Product } from "@/entities/Product";
import React, { useState } from "react";
import { useAddItem } from "@/app/_hooks/useCart";

interface Props {
    product: Product;
}

const ProductItem = ({ product }: Props) => {
    const [quantity, setQuantity] = useState(1);
    const { mutate: addCartItem } = useAddItem();

    const handleAddToCart = () => {
        addCartItem({
            id: product.id,
            quantity
        });
        setQuantity(1);
    };

    return (
        <div className="mb-[87px] flex flex-col gap-[30px] sm:mb-[117px] sm:flex-row sm:items-center sm:gap-[69px] md:mb-[155px] md:gap-[123px]">
            <picture className="shrink-0 sm:h-[480px] sm:w-[281px] md:h-[560px] md:w-[540px]">
                <source
                    media="(min-width: 1024px)"
                    srcSet={product.images.laptop}
                />
                <source
                    media="(min-width: 768px)"
                    srcSet={product.images.tablet}
                />
                <source
                    media="(max-width: 520px)"
                    srcSet={product.images.mobile}
                />
                <img
                    src={product.images.mobile}
                    alt=""
                    className="h-[327px] w-full rounded-lg object-cover sm:h-full"
                />
            </picture>

            <div>
                <p className="mb-[27px] text-s3 uppercase tracking-[10px] text-primary sm:mb-[17px] sm:text-s1">
                    New Product
                </p>
                <p className="mb-[30px] text-s8 font-bold uppercase leading-7 sm:mb-[36px] sm:w-[225px] md:mb-[38px]">
                    {product.name}
                </p>
                <p className="mb-[25px] text-s4 opacity-50 sm:mb-[30px]">
                    {product.description}
                </p>
                <p className="mb-[30px] text-s5 font-bold tracking-wider md:mb-[45px]">
                    $ {product.price.toLocaleString()}
                </p>
                <div className="flex gap-[16px]">
                    <ProductQuantity
                        variant="lg"
                        value={quantity}
                        handleAdd={(quantity) => setQuantity(quantity)}
                        handleMinus={(quantity) => setQuantity(quantity)}
                    />
                    <button
                        className="btn btn_primary text-white"
                        type="button"
                        onClick={handleAddToCart}
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
