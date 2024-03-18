import { NextRequest, NextResponse } from "next/server";

const DUMMY_DATA = [
    {
        id: 1,
        slug: "headphones",
        products: [
            {
                id: 1,
                categoryId: 1,
                new: true,
                name: "xx99 Mark II Headphones",
                slug: "xx99-mark-two-headphones",
                description:
                    "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
                images: {
                    mobile: "/images/product/xx99_II_headphones.jpg",
                    tablet: "/images/product/sm-xx99_II_headphones.jpg",
                    laptop: "/images/product/md-xx99_II_headphones.jpg"
                }
            },
            {
                id: 2,
                categoryId: 1,
                new: false,
                name: "XX99 Mark I Headphones",
                slug: "xx99-mark-one-headphones",
                description:
                    "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
                images: {
                    mobile: "/images/product/xx99_I_headphones.jpg",
                    tablet: "/images/product/sm-xx99_I_headphones.jpg",
                    laptop: "/images/product/md-xx99_I_headphones.jpg"
                }
            },
            {
                id: 3,
                categoryId: 1,
                new: false,
                name: "XX59 Headphones",
                slug: "xx59-headphones",
                description:
                    "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
                images: {
                    mobile: "/images/product/xx59_headphones.jpg",
                    tablet: "/images/product/sm-xx59_headphones.jpg",
                    laptop: "/images/product/md-xx59_headphones.jpg"
                }
            }
        ]
    },
    {
        id: 2,
        slug: "speakers",
        products: [
            {
                id: 1,
                categoryId: 2,
                new: true,
                name: "zx9 Speaker",
                slug: "zx9-speaker",
                description: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
                images: {
                    mobile: "/images/product/zx9_speaker.jpg",
                    tablet: "/images/product/sm-zx9_speaker.jpg",
                    laptop: "/images/product/md-zx9_speaker.jpg"
                }
            },
            {
                id: 2,
                categoryId: 2,
                new: false,
                name: "zx7 Speaker",
                slug: "zx7-speaker",
                description: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
                images: {
                    mobile: "/images/product/zx7_speaker.jpg",
                    tablet: "/images/product/sm-zx7_speaker.jpg",
                    laptop: "/images/product/md-zx7_speaker.jpg"
                }
            }
        ]
    },
    {
        id: 3,
        slug: "earphones",
        products: [
            {
                id: 1,
                categoryId: 3,
                new: true,
                name: "YX1 Wireless Earphones",
                slug: "yx1-earphones",
                description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
                images: {
                    mobile: "/images/product/yx1-earphones.jpg",
                    tablet: "/images/product/sm-yx1-earphones.jpg",
                    laptop: "/images/product/md-yx1-earphones.jpg"
                }
            }
        ]
    },
];

export async function GET(
    request: NextRequest,
    { params }: { params: { category_id: string } }
) {
    const category = DUMMY_DATA.find(
        (product) => product.slug === params.category_id
    );

    if (!category) {
        return NextResponse.json(
            { message: "Category not found" },
            { status: 404 }
        );
    }

    return NextResponse.json(category.products);
}
