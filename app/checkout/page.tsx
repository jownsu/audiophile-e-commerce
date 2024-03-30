import { Container } from "@radix-ui/themes";

import CheckoutForm from "./_components/CheckoutForm";

const CheckoutPage = () => {
    return (
        <Container className="px-6 pt-[107px] sm:px-10 sm:pt-[123px] md:pt-[169px]">
            <button
                className="mb-[25px] text-s4 text-black opacity-50 duration-200 hover:text-primary"
                type="button"
            >
                Go Back
            </button>

            <CheckoutForm />
        </Container>
    );
};

export default CheckoutPage;
