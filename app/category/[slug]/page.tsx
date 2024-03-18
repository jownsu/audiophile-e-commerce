import { Product } from "@/entities/Product";
import AudioCategories from "../../_components/AudioCategories";
import ProductList from "./_components/ProductList";
import { Container } from "@radix-ui/themes";
import AudioGear from "../../_components/AudioGear";

interface Props {
    params: { slug: string };
}

const CategoryPage = async ({ params }: Props) => {
    const res = await fetch(`http://localhost:3000/api/categories/${params.slug}`);
    const products: Product[] = await res.json();

    return (
        <div>
            <div className="h-[192px] bg-black pt-[122px]">
                <p className="text-center text-s8 font-semibold uppercase tracking-wide text-white">
                    {params.slug}
                </p>
            </div>

            <Container className="px-6 pt-[64px] sm:px-10 sm:pt-[120px] md:pt-[160px]">
                <ProductList products={products} />
                <AudioCategories className="mb-[92px]" />
                <AudioGear />
            </Container>
        </div>
    );
};

export default CategoryPage;
