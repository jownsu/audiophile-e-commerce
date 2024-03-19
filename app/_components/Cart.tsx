"use client";

import CartIcon from "@/public/images/icon/icon-cart.svg";
import * as Dialog from "@radix-ui/react-dialog";
import ProductQuantity from "./ProductQuantity";
import { Container } from "@radix-ui/themes";

const DUMMY_CART = [
    {
        id: 1,
        image: "/images/cart/xx59-headphones.jpg",
        name: "xx59 mk II",
        price: 2999,
        quantity: 1
    },
    {
        id: 2,
        image: "/images/cart/xx99-mark-one-headphones.jpg",
        name: "xx59",
        price: 2999,
        quantity: 4
    },
    {
        id: 3,
        image: "/images/cart/xx99-mark-two-headphones.jpg",
        name: "yx1",
        price: 2999,
        quantity: 7
    }
];

const Cart = () => {
    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <CartIcon className="fill-white duration-200 hover:fill-primary" />
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black bg-opacity-50" />
                <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[114px] w-[calc(100%-48px)] max-w-[377px] -translate-x-[50%] rounded-lg bg-white px-[28px] py-[31px] focus:outline-none sm:left-[initial] sm:right-[40px] sm:-translate-x-0">
                    <div className="mb-[32px] flex items-center justify-between">
                        <p className="text-s5 font-bold uppercase">Cart (3)</p>
                        <button
                            type="button"
                            className="text-s4 underline opacity-50"
                        >
                            Remove all
                        </button>
                    </div>
                    <ul className="mb-[32px] flex flex-col gap-[24px]">
                        {DUMMY_CART.map((cart) => (
                            <li
                                key={cart.id}
                                className="flex items-center justify-between"
                            >
                                <div className="flex items-center gap-[14px]">
                                    <img
                                        src={cart.image}
                                        className="h-[64px] w-[64px] rounded-lg"
                                        alt=""
                                    />
                                    <div className="font-bold">
                                        <p className="text-s4 uppercase">
                                            {cart.name}
                                        </p>
                                        <p className="text-s3 opacity-50">
                                            $ {cart.price.toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                                <ProductQuantity initial={cart.quantity} />
                            </li>
                        ))}
                    </ul>

                    <div className="mb-[22px] flex items-center justify-between">
                        <p className="text-s4 uppercase opacity-50">Total</p>
                        <p className="text-s5 font-bold">$ 5,396</p>
                    </div>

                    <button
                        type="button"
                        className="btn btn_primary w-full justify-center text-white"
                    >
                        Checkout
                    </button>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default Cart;
