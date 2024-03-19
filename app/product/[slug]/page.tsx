import Link from "next/link";
import React from "react";
import { Product } from "@/entities/Product";
import { Container } from "@radix-ui/themes";
import ProductQuantity from "./_components/ProductQuantity";

interface Props {
    params: { slug: string };
}

const ProductPage = async ({ params }: Props) => {
    const res = await fetch(
        `http://localhost:3000/api/products/${params.slug}`
    );
    const product: Product = await res.json();
    return (
        <div>
            <Container className="px-6 pt-[107px] sm:px-10 sm:pt-[123px] md:pt-[169px]">
                <button
                    className="mb-[25px] text-s4 text-black opacity-50"
                    type="button"
                >
                    Go Back
                </button>

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

                    <div className="">
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
                            <ProductQuantity />
                            <button
                                className="btn btn_primary text-white"
                                type="button"
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mb-[90px] flex flex-col gap-[87px] sm:mb-[120px] md:mb-[160px] md:flex-row md:gap-[123px]">
                    <div className="md:w-[540px]">
                        <p className="mb-[27px] text-s7 font-bold uppercase">
                            Features
                        </p>
                        <p className="whitespace-pre-line text-s4 opacity-50">
                            {product.features}
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-[69px] md:flex-col md:gap-[5px]">
                        <p className="mb-[26px] text-s7 font-bold uppercase sm:basis-[281px] md:basis-0">
                            In the box
                        </p>
                        <div>
                            {product.includes.map((box) => (
                                <div className="flex" key={box.item}>
                                    <span className="inline-block w-[38px] text-s4 font-bold text-primary">
                                        {box.quantity}x
                                    </span>{" "}
                                    <p className="text-s4 opacity-50">
                                        {box.item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mb-[123px] grid grid-rows-[174px_174px_368px] gap-[20px] sm:grid-flow-col sm:grid-cols-[minmax(277px,_43%)_minmax(395px,_57%)] sm:grid-rows-[174px_174px] md:grid-cols-[minmax(445px,_43%)_minmax(635px,_57%)] md:grid-rows-[280px_280px] md:gap-[30px]">
                    <picture>
                        <source
                            media="(min-width: 1024px)"
                            srcSet={product.gallery.first.laptop}
                        />
                        <source
                            media="(min-width: 768px)"
                            srcSet={product.gallery.first.tablet}
                        />
                        <source
                            media="(max-width: 520px)"
                            srcSet={product.gallery.first.mobile}
                        />
                        <img
                            src={product.gallery.first.mobile}
                            alt=""
                            className="h-full w-full rounded-lg object-cover"
                        />
                    </picture>
                    <picture>
                        <source
                            media="(min-width: 1024px)"
                            srcSet={product.gallery.second.laptop}
                        />
                        <source
                            media="(min-width: 768px)"
                            srcSet={product.gallery.second.tablet}
                        />
                        <source
                            media="(max-width: 520px)"
                            srcSet={product.gallery.second.mobile}
                        />
                        <img
                            src={product.gallery.second.mobile}
                            alt=""
                            className="h-full w-full rounded-lg object-cover"
                        />
                    </picture>
                    <picture className="sm:row-span-2">
                        <source
                            media="(min-width: 1024px)"
                            srcSet={product.gallery.third.laptop}
                        />
                        <source
                            media="(min-width: 768px)"
                            srcSet={product.gallery.third.tablet}
                        />
                        <source
                            media="(max-width: 520px)"
                            srcSet={product.gallery.third.mobile}
                        />
                        <img
                            src={product.gallery.third.mobile}
                            alt=""
                            className="h-full w-full rounded-lg object-cover"
                        />
                    </picture>
                </div>
            </Container>
        </div>
    );
};

export default ProductPage;
