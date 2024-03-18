import React from "react";

interface Props {
    params: { slug: string };
}

const ProductPage = ({ params }: Props) => {
    return <div className="text-3xl">{params.slug}</div>;
};

export default ProductPage;
