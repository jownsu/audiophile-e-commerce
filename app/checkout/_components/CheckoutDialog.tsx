import Link from "next/link";
import React from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import CheckIcon from "@/public/images/checkout/icon-order-confirmation.svg";
import Cart from "@/app/_components/Cart";

interface CheckoutInfo {
    first_item: Cart;
    other_item_count: number;
    total: number;
}

interface Props {
    open: boolean;
    checkoutInfo?: CheckoutInfo;
}

const CheckoutDialog = ({ open, checkoutInfo }: Props) => {
    return (
        <Dialog.Root open={open}>
            <Dialog.Portal>
                <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black bg-opacity-50" />
                <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[calc(100vw-48px)] max-w-[540px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-white p-[32px] focus:outline-none sm:p-[48px]">
                    <CheckIcon className="mb-[22px] h-[64px] w-[64px] sm:mb-[36px]" />
                    <div className="mb-[20px] text-s7 font-bold uppercase leading-[25px] tracking-[.86px] sm:mb-[25px] sm:text-s9 sm:leading-[35px]">
                        <p className="">Thank you</p>
                        <p className="">for your order</p>
                    </div>
                    <p className="mb-[25px] text-s4 font-medium opacity-50 sm:mb-[32px]">
                        You will receive an email confirmation shortly.
                    </p>

                    {checkoutInfo && (
                        <div className="mb-[23px] flex flex-col overflow-hidden rounded-lg font-bold text-black sm:mb-[46px] sm:h-[140px] sm:flex-row">
                            <div className="bg-grey px-[24px] pb-[22px] pt-[26px] sm:flex-1">
                                <div className="mb-[13px] flex gap-[15px] text-s4 text-black">
                                    <Image
                                        height={50}
                                        width={50}
                                        src={checkoutInfo.first_item.image}
                                        alt={`Image of ${checkoutInfo.first_item.name}`}
                                    />
                                    <div className="mr-auto">
                                        <p className="mb-[5px] uppercase">
                                            {checkoutInfo.first_item.name}
                                        </p>
                                        <p className="text-s3 opacity-50">
                                            ${" "}
                                            {checkoutInfo.first_item.price.toLocaleString()}
                                        </p>
                                    </div>
                                    <p className="opacity-50">
                                        x{checkoutInfo.first_item.quantity}
                                    </p>
                                </div>
                                {checkoutInfo.other_item_count > 0 && (
                                    <p className="border-t border-black border-opacity-10 pt-[14px] text-center text-s1 opacity-50">
                                        and {checkoutInfo.other_item_count}{" "}
                                        other item(s)
                                    </p>
                                )}
                            </div>
                            <div className="flex flex-col bg-black px-[24px] py-[20px] text-white sm:basis-[198px] sm:justify-center">
                                <p className="mb-[8px] text-s4 font-thin uppercase tracking-[1px] opacity-50">
                                    Grand Total
                                </p>
                                <p className="text-s5">
                                    $ {checkoutInfo.total.toLocaleString()}
                                </p>
                            </div>
                        </div>
                    )}

                    <Link
                        href="/"
                        className="btn btn_primary w-full justify-center text-white"
                    >
                        Back to home
                    </Link>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default CheckoutDialog;
