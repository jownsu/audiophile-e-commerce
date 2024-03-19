import CartIcon from "@/public/images/icon/icon-cart.svg";

const Cart = () => {
    return (
        <button type="button">
            <CartIcon className="fill-white duration-200 hover:fill-primary" />
        </button>
    );
};

export default Cart;
