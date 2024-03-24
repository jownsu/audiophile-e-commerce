"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Cart from "./Cart";
import ProductQuantity from "./ProductQuantity";

const CartItemList = () => {
    const { data: cart, isLoading, error } = useCart();

    return (
        <ul className="mb-[32px] flex flex-col gap-[24px]">
            {cart?.map((cart_item) => (
                <li
                    key={cart_item.id}
                    className="flex items-center justify-between"
                >
                    <div className="flex items-center gap-[14px]">
                        <img
                            src={cart_item.image}
                            className="h-[64px] w-[64px] rounded-lg"
                            alt=""
                        />
                        <div className="font-bold">
                            <p className="text-s4 uppercase">
                                {cart_item.name}
                            </p>
                            <p className="text-s3 opacity-50">
                                $ {cart_item.price.toLocaleString()}
                            </p>
                        </div>
                    </div>
                    <ProductQuantity initial={cart_item.quantity} />
                </li>
            ))}
        </ul>
    );
};

const useCart = () =>
    useQuery({
        queryKey: ["cart"],
        queryFn: () => axios.get<Cart[]>("/api/cart").then((res) => res.data),
        staleTime: 60 * 1000,
        retry: 3
    });

export default CartItemList;
