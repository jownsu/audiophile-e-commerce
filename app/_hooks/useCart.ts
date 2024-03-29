import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Cart from "../_components/Cart";

export const getCart = () =>
    useQuery({
        queryKey: ["cart"],
        queryFn: () => axios.get<Cart[]>("/api/cart").then((res) => res.data),
        staleTime: 60 * 1000,
        retry: 3
    });

export const removeAllItem = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: () =>
            axios.delete("/api/cart", { data: {all: true} }).then((res) => res.data),
        onSuccess: () => {
            queryClient.setQueryData<Cart[]>(["cart"], () => []);
        }
    });
}

export const updateItem = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (item: Cart) =>
            axios.put("/api/cart", item).then((res) => res.data),
        onSuccess: (updatedCart) => {
            queryClient.setQueryData<Cart[]>(["cart"], (cart) => {
                return cart?.map((cart_item) => {
                    if (cart_item.id === updatedCart.id) {
                        return updatedCart;
                    }
                    return cart_item;
                });
            });
        }
    });
};

export const removeItem = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (item: Cart) =>
            axios.delete("/api/cart", { data: item }).then((res) => res.data),
        onSuccess: (_, deletedCart) => {
            queryClient.setQueryData<Cart[]>(["cart"], (cart) => {
                return cart?.filter(cart_item => cart_item.id !== deletedCart.id)
            });
        }
    });
}