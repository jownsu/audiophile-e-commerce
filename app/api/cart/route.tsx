import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

const ITEM_LIST = [
    {
        id: 1,
        image: "/images/cart/yx1-earphones.jpg",
        name: "yx1",
        price: 599,
        quantity: 1
    },
    {
        id: 2,
        image: "/images/cart/xx59-headphones.jpg",
        name: "xx59",
        price: 899,
        quantity: 1
    },
    {
        id: 3,
        image: "/images/cart/xx99-mark-one-headphones.jpg",
        name: "xx99 mk I",
        price: 1750,
        quantity: 1
    },
    {
        id: 4,
        image: "/images/cart/xx99-mark-two-headphones.jpg",
        name: "xx99 mk II",
        price: 2999,
        quantity: 1
    },
    {
        id: 5,
        image: "/images/cart/zx7-speaker.jpg",
        name: "zx7",
        price: 3500,
        quantity: 1
    },

    {
        id: 6,
        image: "/images/cart/zx9-speaker.jpg",
        name: "zx9",
        price: 4500,
        quantity: 1
    }
];

let DUMMY_CART = [
    {
        id: 1,
        image: "/images/cart/yx1-earphones.jpg",
        name: "yx1",
        price: 599,
        quantity: 1
    },
    {
        id: 2,
        image: "/images/cart/xx59-headphones.jpg",
        name: "xx59",
        price: 899,
        quantity: 4
    },
    {
        id: 3,
        image: "/images/cart/xx99-mark-one-headphones.jpg",
        name: "xx99 mk I",
        price: 1750,
        quantity: 7
    }
];

export async function GET(request: NextRequest) {
    return NextResponse.json(DUMMY_CART);
}

export async function POST(request: NextRequest) {
    const body = await request.json();

    const validation = schema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 });
    }

    let newItem = ITEM_LIST.find((item) => item.id === body.id);

    if (!newItem) {
        return NextResponse.json(
            { message: "Item not found" },
            { status: 404 }
        );
    }

    let cartItem = DUMMY_CART.find((cartItem) => cartItem.id === newItem?.id);

    if (cartItem) {
        cartItem.quantity = cartItem.quantity + body.quantity;
        newItem = cartItem;
    } else {
        newItem.quantity = body.quantity;
        DUMMY_CART.push(newItem);
    }

    return NextResponse.json(newItem, { status: 201 });
}

export async function PUT(request: NextRequest) {
    const { id, quantity = 1 } = await request.json();

    let selectedItem = DUMMY_CART.find((cart) => cart.id === id);

    if (!selectedItem) {
        return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    DUMMY_CART = DUMMY_CART.map((cartItem) => {
        if (cartItem.id === id) {
            return {
                ...cartItem,
                quantity
            };
        }

        return cartItem;
    });

    selectedItem.quantity = quantity;

    return NextResponse.json(selectedItem);
}

export async function DELETE(request: NextRequest) {
    const { id, all } = await request.json();

    if (all) {
        DUMMY_CART = [];
        return NextResponse.json({ message: "Removed All Items" });
    }

    let selectedItem = DUMMY_CART.find((cart) => cart.id === id);

    if (!selectedItem) {
        return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    DUMMY_CART = DUMMY_CART.filter((cartItem) => cartItem.id !== id);

    return NextResponse.json(selectedItem);
}
