import Image from "next/image";
import { useRemoveItem, useUpdateItem } from "../_hooks/useCart";
import Cart from "./Cart";
import ProductQuantity from "./ProductQuantity";

interface Props {
    cart: Cart[];
    read_only?: boolean;
}

const CartItemList = ({ cart, read_only = false }: Props) => {
    const { mutate: updateCartItem } = useUpdateItem();
    const { mutate: deleteCartItem } = useRemoveItem();

    return (
        <ul className="mb-[32px] flex flex-col gap-[24px]">
            {cart?.map((cart_item) => (
                <li
                    key={cart_item.id}
                    className="flex items-center justify-between"
                >
                    <div className="flex items-center gap-[14px]">
                        <Image
                            src={cart_item.image}
                            className="rounded-lg"
                            height={64}
                            width={64}
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
                    {read_only ? (
                        <p className="self-start pt-[10px] text-s4 opacity-50 font-bold">x{cart_item.quantity}</p>
                    ) : (
                        <ProductQuantity
                            value={cart_item.quantity}
                            handleAdd={(quantity) =>
                                updateCartItem({ ...cart_item, quantity })
                            }
                            handleMinus={(quantity) =>
                                updateCartItem({ ...cart_item, quantity })
                            }
                            handleRemove={() => deleteCartItem(cart_item)}
                        />
                    )}
                </li>
            ))}
        </ul>
    );
};

export default CartItemList;
