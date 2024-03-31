import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Cart from "../_components/Cart";

interface AddCartItem {
    id: number;
    quantity: number;
}

export const useGetItem = () =>
    useQuery({
        queryKey: ["cart"],
        queryFn: () => axios.get<Cart[]>("/api/cart").then((res) => res.data),
        staleTime: 60 * 1000,
        retry: 3
    });

export const useRemoveAllItem = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: () =>
            axios
                .delete("/api/cart", { data: { all: true } })
                .then((res) => res.data),
        onSuccess: () => {
            queryClient.setQueryData<Cart[]>(["cart"], () => []);
        }
    });
};

export const useUpdateItem = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (item: Cart) =>
            axios.put("/api/cart", item).then((res) => res.data),
        onSuccess: (updatedCart) => {
            queryClient.setQueryData<Cart[]>(["cart"], (cart) => {
                return cart?.map((cartItem) => {
                    if (cartItem.id === updatedCart.id) {
                        return updatedCart;
                    }
                    return cartItem;
                });
            });
        }
    });
};

export const useRemoveItem = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (item: Cart) =>
            axios.delete("/api/cart", { data: item }).then((res) => res.data),
        onSuccess: (_, deletedCart) => {
            queryClient.setQueryData<Cart[]>(["cart"], (cart) => {
                return cart?.filter(
                    (cartItem) => cartItem.id !== deletedCart.id
                );
            });
        }
    });
};

export const useAddItem = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (item: AddCartItem) =>
            axios.post("/api/cart", item).then((res) => res.data),
        onSuccess: (newItem) => {
            queryClient.setQueryData<Cart[]>(["cart"], (cart) => {

                let existingItem = cart?.find(
                    (cartItem) => cartItem.id === newItem.id
                );

                if (existingItem) {
                    return cart?.map((cartItem) =>
                        newItem.id === cartItem.id ? newItem : cartItem
                    );
                } 
                else {
                    return [...(cart || []), newItem];
                }
            });
        }
    });
};
