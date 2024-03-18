export interface Product {
    id: number;
    categoryId: number;
    new: boolean;
    name: string;
    slug: string;
    description: string;
    images: {
        mobile: string;
        tablet: string;
        laptop: string;
    };
}