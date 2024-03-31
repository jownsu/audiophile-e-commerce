import AudioCategories from "@/app/_components/AudioCategories";
import AudioGear from "@/app/_components/AudioGear";
import { Product } from "@/entities/Product";
import { Container } from "@radix-ui/themes";
import Link from "next/link";
import ProductItem from "./_components/ProductItem";
import Back from "../../_components/Back";

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
                <Back />
                <ProductItem product={product} />

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

                <div className="mb-[120px] grid grid-rows-[174px_174px_368px] gap-[20px] sm:mb-[116px] sm:grid-flow-col sm:grid-cols-[minmax(277px,_43%)_minmax(395px,_57%)] sm:grid-rows-[174px_174px] md:mb-[156px] md:grid-cols-[minmax(445px,_43%)_minmax(635px,_57%)] md:grid-rows-[280px_280px] md:gap-[30px]">
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

                <div className="mb-[97px] text-center uppercase md:mb-[150px]">
                    <p className="mb-[40px] text-s7 font-bold sm:mb-[53px] md:mb-[60px]">
                        You may also like
                    </p>

                    <div className="flex flex-col gap-[56px] sm:flex-row sm:gap-[11px] md:gap-[30px]">
                        {product.others.map((other) => (
                            <div
                                className="flex flex-col sm:flex-1"
                                key={other.slug}
                            >
                                <picture className="mb-[31px] h-[120px] w-full rounded-lg bg-grey sm:mb-[38px] sm:h-[318px] md:mb-[36px]">
                                    <source
                                        media="(min-width: 1024px)"
                                        srcSet={other.images.laptop}
                                    />
                                    <source
                                        media="(min-width: 768px)"
                                        srcSet={other.images.tablet}
                                    />
                                    <source
                                        media="(max-width: 520px)"
                                        srcSet={other.images.mobile}
                                    />
                                    <img
                                        src={other.images.mobile}
                                        alt=""
                                        className="h-full w-full rounded-lg object-contain"
                                    />
                                </picture>
                                <p className="mb-[31px] text-s7 font-bold sm:mb-[28px] md:mb-[30px]">
                                    {other.name}
                                </p>
                                <Link
                                    href={`/product/${other.slug}`}
                                    className="btn btn_primary mx-auto text-white"
                                >
                                    See product
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                <AudioCategories className="mb-[92px] md:mb-[132px]" />

                <AudioGear />
            </Container>
        </div>
    );
};

export default ProductPage;
