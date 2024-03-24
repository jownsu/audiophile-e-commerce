"use client";

import CartIcon from "@/public/images/icon/icon-cart.svg";
import * as Dialog from "@radix-ui/react-dialog";
import CartItemList from "./CartItemList";
interface Cart {
    id: number;
    image: string;
    name: string;
    price: number;
    quantity: number;
}

const Cart = async () => {
    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <CartIcon className="fill-white duration-200 hover:fill-primary" />
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black bg-opacity-50" />
                <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[114px] w-[calc(100%-48px)] max-w-[377px] -translate-x-[50%] rounded-lg bg-white px-[28px] py-[31px] focus:outline-none sm:left-[initial] sm:right-[40px] sm:-translate-x-0 lg:right-[calc(50%-380px)] lg:-translate-x-[-50%]">
                    <div className="mb-[32px] flex items-center justify-between">
                        <p className="text-s5 font-bold uppercase">Cart (3)</p>
                        <button
                            type="button"
                            className="text-s4 underline opacity-50"
                        >
                            Remove all
                        </button>
                    </div>

                    <CartItemList />

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
