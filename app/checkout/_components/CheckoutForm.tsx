"use client";

import * as RadioGroup from "@radix-ui/react-radio-group";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getCart } from "@/app/_hooks/useCart";
import CartItemList from "@/app/_components/CartItemList";

const schema = z.object({
    name: z.string().min(1, "Required").max(255, "255 max character"),
    email: z.string().email("Wrong format"),
    phone: z.string().min(1, "Required").max(255, "255 max character"),
    address: z.string().min(1, "Required").max(255, "255 max character"),
    zip_code: z.string().min(1, "Required").max(255, "255 max character"),
    city: z.string().min(1, "Required").max(255, "255 max character"),
    country: z.string().min(1, "Required").max(255, "255 max character"),
    payment_method: z.string().min(1, "Required").max(255, "255 max character"),
    money_number: z.number({ invalid_type_error: "Must be a number" }),
    money_pin: z.number({ invalid_type_error: "Must be a number" })
});

type CheckForm = z.infer<typeof schema>;

const CheckoutForm = () => {
    const { data: cart } = getCart();

    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors }
    } = useForm<CheckForm>({
        resolver: zodResolver(schema)
    });

    let total = cart?.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
    let vat = 0;

    if (total) vat = total * 0.25;

    return (
        <form
            className="flex flex-col gap-[32px] md:mb-[141px] md:flex-row md:gap-[30px]"
            onSubmit={handleSubmit((data) => console.log(data))}
        >
            <div className="rounded-lg bg-white p-[24px] sm:py-[30px] md:flex-1 md:p-[48px]">
                <p className="mb-[33px] text-s8 font-bold uppercase sm:mb-[40px]">
                    Checkout
                </p>

                <div className="mb-[36px] sm:mb-[56px]">
                    <p className="mb-[18px] text-s2 font-bold uppercase tracking-wide text-primary">
                        Billing Details
                    </p>

                    <div className="grid gap-[25px] sm:grid-cols-2 sm:gap-x-[16px] sm:gap-y-[24px]">
                        <label htmlFor="name">
                            <div className="mb-[7px] flex justify-between">
                                <p
                                    className={`text-s1 font-bold ${errors?.name && "text-error"}`}
                                >
                                    Name
                                </p>
                                {errors?.name && (
                                    <p className="text-s1 font-medium text-error">
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>
                            <input
                                className={`h-[56px] w-full rounded-lg border border-grey_stroke px-[24px] text-s3 font-bold text-black placeholder:text-opacity-40 ${errors?.name && "border-2 border-error focus:outline-error"}`}
                                type="text"
                                {...register("name")}
                                placeholder="Alexei Ward"
                            />
                        </label>

                        <label htmlFor="email">
                            <div className="mb-[7px] flex justify-between">
                                <p
                                    className={`text-s1 font-bold ${errors?.email && "text-error"}`}
                                >
                                    Email Address
                                </p>
                                {errors?.email && (
                                    <p className="text-s1 font-medium text-error">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>
                            <input
                                className={`h-[56px] w-full rounded-lg border border-grey_stroke px-[24px] text-s3 font-bold text-black placeholder:text-opacity-40 ${errors?.email && "border-2 border-error focus:outline-error"}`}
                                type="email"
                                {...register("email")}
                                placeholder="alexei@mail.com"
                            />
                        </label>

                        <label htmlFor="phone">
                            <div className="mb-[7px] flex justify-between">
                                <p
                                    className={`text-s1 font-bold ${errors?.phone && "text-error"}`}
                                >
                                    Phone Numbber
                                </p>
                                {errors?.phone && (
                                    <p className="text-s1 font-medium text-error">
                                        {errors.phone.message}
                                    </p>
                                )}
                            </div>
                            <input
                                className={`h-[56px] w-full rounded-lg border border-grey_stroke px-[24px] text-s3 font-bold text-black placeholder:text-opacity-40 ${errors?.phone && "border-2 border-error focus:outline-error"}`}
                                type="text"
                                {...register("phone")}
                                placeholder="+1 202-555-0136"
                            />
                        </label>
                    </div>
                </div>

                <div className="mb-[36px] sm:mb-[64px]">
                    <p className="mb-[18px] text-s2 font-bold uppercase tracking-wide text-primary">
                        Shipping Info
                    </p>

                    <div className="grid gap-[25px] sm:grid-cols-2 sm:gap-x-[16px] sm:gap-y-[24px]">
                        <label className="sm:col-span-2" htmlFor="address">
                            <div className="mb-[7px] flex justify-between">
                                <p
                                    className={`text-s1 font-bold ${errors?.address && "text-error"}`}
                                >
                                    Your Address
                                </p>
                                {errors?.address && (
                                    <p className="text-s1 font-medium text-error">
                                        {errors.address.message}
                                    </p>
                                )}
                            </div>
                            <input
                                className={`h-[56px] w-full rounded-lg border border-grey_stroke px-[24px] text-s3 font-bold text-black placeholder:text-opacity-40 ${errors?.address && "border-2 border-error focus:outline-error"}`}
                                type="text"
                                {...register("address")}
                                placeholder="1137 Williams Avenue"
                            />
                        </label>

                        <label htmlFor="zip_code">
                            <div className="mb-[7px] flex justify-between">
                                <p
                                    className={`text-s1 font-bold ${errors?.zip_code && "text-error"}`}
                                >
                                    ZIP Code
                                </p>
                                {errors?.zip_code && (
                                    <p className="text-s1 font-medium text-error">
                                        {errors.zip_code.message}
                                    </p>
                                )}
                            </div>
                            <input
                                className={`h-[56px] w-full rounded-lg border border-grey_stroke px-[24px] text-s3 font-bold text-black placeholder:text-opacity-40 ${errors?.zip_code && "border-2 border-error focus:outline-error"}`}
                                type="text"
                                {...register("zip_code")}
                                placeholder="10001"
                            />
                        </label>

                        <label htmlFor="country">
                            <div className="mb-[7px] flex justify-between">
                                <p
                                    className={`text-s1 font-bold ${errors?.country && "text-error"}`}
                                >
                                    Country
                                </p>
                                {errors?.country && (
                                    <p className="text-s1 font-medium text-error">
                                        {errors.country.message}
                                    </p>
                                )}
                            </div>
                            <input
                                className={`h-[56px] w-full rounded-lg border border-grey_stroke px-[24px] text-s3 font-bold text-black placeholder:text-opacity-40 ${errors?.country && "border-2 border-error focus:outline-error"}`}
                                type="text"
                                {...register("country")}
                                placeholder="10001"
                            />
                        </label>
                    </div>
                </div>

                <div className="mb-[30px] sm:mb-[24px]">
                    <p className="mb-[18px] text-s2 font-bold uppercase tracking-wide text-primary">
                        Payment Details
                    </p>

                    <div className="grid gap-[15px] sm:grid-cols-2">
                        <p className="text-s1 font-bold">Payment Method</p>
                        <RadioGroup.Root
                            className="flex flex-col gap-[16px] font-bold"
                            value={getValues("payment_method")}
                            defaultValue="e_money"
                            onValueChange={(value) =>
                                setValue("payment_method", value)
                            }
                        >
                            <div className="flex h-[52px] items-center gap-[15px] rounded-md border border-grey_stroke px-[15px] text-start has-[:checked]:border-primary">
                                <RadioGroup.Item
                                    id="e_money"
                                    value="e_money"
                                    className="group h-[20px] w-[20px] cursor-default rounded-full border border-grey_stroke bg-white outline-none"
                                >
                                    <RadioGroup.Indicator className="relative flex h-full w-full items-center justify-center after:block after:h-[10px] after:w-[10px] after:rounded-[50%] after:bg-primary after:content-['']" />
                                </RadioGroup.Item>
                                <label
                                    className="flex-1 text-s3"
                                    htmlFor="e_money"
                                >
                                    e-Money
                                </label>
                            </div>

                            <div className="flex h-[52px] items-center gap-[15px] rounded-md border border-grey_stroke px-[15px] text-start has-[:checked]:border-primary">
                                <RadioGroup.Item
                                    id="cash_on_delivery"
                                    value="cash_on_delivery"
                                    className="h-[20px] w-[20px] cursor-default rounded-full border border-grey_stroke bg-white outline-none"
                                >
                                    <RadioGroup.Indicator className="relative flex h-full w-full items-center justify-center after:block after:h-[10px] after:w-[10px] after:rounded-[50%] after:bg-primary after:content-['']" />
                                </RadioGroup.Item>
                                <label
                                    className="flex-1 text-s3"
                                    htmlFor="cash_on_delivery"
                                >
                                    Cash on Delivery
                                </label>
                            </div>
                        </RadioGroup.Root>
                    </div>
                </div>

                <div className="grid gap-[24px] sm:grid-cols-2 sm:gap-x-[16px] sm:gap-y-[24px]">
                    <label htmlFor="money_number">
                        <div className="mb-[7px] flex justify-between">
                            <p
                                className={`text-s1 font-bold ${errors?.money_number && "text-error"}`}
                            >
                                e-Money Number
                            </p>
                            {errors?.money_number && (
                                <p className="text-s1 font-medium text-error">
                                    {errors.money_number.message}
                                </p>
                            )}
                        </div>
                        <input
                            className={`h-[56px] w-full rounded-lg border border-grey_stroke px-[24px] text-s3 font-bold text-black placeholder:text-opacity-40 ${errors?.money_number && "border-2 border-error focus:outline-error"}`}
                            type="text"
                            {...register("money_number", {
                                valueAsNumber: true
                            })}
                            placeholder="238521993"
                        />
                    </label>

                    <label htmlFor="money_pin">
                        <div className="mb-[7px] flex justify-between">
                            <p
                                className={`text-s1 font-bold ${errors?.money_pin && "text-error"}`}
                            >
                                e-Money PIN
                            </p>
                            {errors?.money_pin && (
                                <p className="text-s1 font-medium text-error">
                                    {errors.money_pin.message}
                                </p>
                            )}
                        </div>
                        <input
                            className={`h-[56px] w-full rounded-lg border border-grey_stroke px-[24px] text-s3 font-bold text-black placeholder:text-opacity-40 ${errors?.money_pin && "border-2 border-error focus:outline-error"}`}
                            type="text"
                            {...register("money_pin", {
                                valueAsNumber: true
                            })}
                            placeholder="6891"
                        />
                    </label>
                </div>
            </div>

            <div className="mb-[97px] rounded-lg bg-white px-[24px] py-[32px] sm:mb-[116px] sm:px-[32px] md:basis-[350px] md:self-start">
                <p className="mb-[33px] text-s5 font-bold uppercase">Summary</p>
                {cart && <CartItemList cart={cart} read_only />}
                <div className="mb-[6px] flex items-center justify-between">
                    <span className="text-s4 uppercase opacity-50">Total</span>
                    <span className="text-s5 font-bold">
                        $ {total?.toLocaleString()}
                    </span>
                </div>
                <div className="mb-[6px] flex items-center justify-between">
                    <span className="text-s4 uppercase opacity-50">
                        Shipping
                    </span>
                    <span className="text-s5 font-bold">$ 50</span>
                </div>
                <div className="mb-[22px] flex items-center justify-between">
                    <span className="text-s4 uppercase opacity-50">
                        Vat (included)
                    </span>
                    <span className="text-s5 font-bold">
                        $ {vat.toLocaleString()}
                    </span>
                </div>
                <div className="mb-[30px] flex items-center justify-between">
                    <span className="text-s4 uppercase opacity-50">
                        Grand total
                    </span>
                    <span className="text-s5 font-bold text-primary">
                        ${total && (total + 50).toLocaleString()}
                    </span>
                </div>

                <button
                    type="submit"
                    className="btn btn_primary w-full justify-center text-white"
                >
                    Continue & Pay
                </button>
            </div>
        </form>
    );
};

export default CheckoutForm;
