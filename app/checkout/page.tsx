import { Container } from "@radix-ui/themes";
import CheckoutForm from "./_components/CheckoutForm";
import Back from "../_components/Back";

const CheckoutPage = () => {
    return (
        <Container className="px-6 pt-[107px] sm:px-10 sm:pt-[123px] md:pt-[169px]">
            <Back />
            <CheckoutForm />
        </Container>
    );
};

export default CheckoutPage;
