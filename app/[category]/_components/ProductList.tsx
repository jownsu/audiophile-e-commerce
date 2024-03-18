"use client";

import { Product } from "@/entities/Product";
import Link from "next/link";
import React from "react";

interface Props {
    products: Product[];
}

const ProductList = ({ products }: Props) => {
    return (
        <div className="space-y-[120px] pb-[100px] md:pb-[150px]">
            {products.length &&
                products.map((product) => (
                    <div key={product.id} className="flex flex-col md:flex-row gap-[32px] sm:gap-[53px] md:gap-[125px] md:items-center md:even:flex-row-reverse">
                        <div className="rounded-md overflow-hidden bg-grey">
                            <picture>
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
                                <img src={product.images.mobile} alt="" className="h-[352px] w-full object-contain md:h-[560px]" />
                            </picture>
                        </div>
                        <div className="text-center text-black md:text-left">
                            <p className="text-primary uppercase tracking-[10px] text-s3 sm:mb-[6px] mb-[20px] md:mb-[16px]">New Product</p>
                            <p className="font-bold text-s8 uppercase sm:max-w-[300px] mx-auto sm:text-s11 md:mx-0 md:leading-[43px] mb-[24px] sm:leading-[42px] sm:mb-[35px]">{product.name}</p>
                            <p className="text-s4 opacity-50 sm:max-w-[570px] mx-auto mb-[25px] sm:mb-[23px] md:mb-[40px]">{product.description}</p>
                            <Link href={""} className="btn btn_primary text-white">See Product</Link>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default ProductList;
