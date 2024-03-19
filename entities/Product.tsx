export interface Product {
    id: number;
    categoryId: number;
    new: boolean;
    name: string;
    slug: string;
    price: number;
    description: string;
    features: string;
    includes: {
        quantity: number;
        item: string;
    }[];
    images: {
        mobile: string;
        tablet: string;
        laptop: string;
    };
}
