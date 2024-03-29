import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

let DUMMY_CART = [
    {
        id: 1,
        image: "/images/cart/xx59-headphones.jpg",
        name: "xx59 mk II",
        price: 2999,
        quantity: 1
    },
    {
        id: 2,
        image: "/images/cart/xx99-mark-one-headphones.jpg",
        name: "xx59",
        price: 1999,
        quantity: 4
    },
    {
        id: 3,
        image: "/images/cart/xx99-mark-two-headphones.jpg",
        name: "yx1",
        price: 4555,
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

    let newItem = {
        id: Math.floor(Math.random() * (999999 - 10 + 1)) + 10,
        image: body.image,
        name: body.name,
        price: body.price,
        quantity: body.quantity
    };

    DUMMY_CART.push(newItem);

    return NextResponse.json(newItem, { status: 201 });
}

export async function PUT(request: NextRequest) {
    const { id, quantity = 1 } = await request.json();

    let selectedItem = DUMMY_CART.find((cart) => cart.id === id);

    if (!selectedItem) {
        return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    DUMMY_CART = DUMMY_CART.map((cart_item) => {
        if (cart_item.id === id) {
            return {
                ...cart_item,
                quantity
            };
        }

        return cart_item;
    });

    selectedItem.quantity = quantity;

    return NextResponse.json(selectedItem);
}

export async function DELETE(request: NextRequest) {
    const { id, all } = await request.json();

    if(all){
        DUMMY_CART = [];
        return NextResponse.json({message: "Removed All Items"});
    }

    let selectedItem = DUMMY_CART.find((cart) => cart.id === id);

    if (!selectedItem) {
        return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    DUMMY_CART = DUMMY_CART.filter((cart_item) => cart_item.id !== id);

    return NextResponse.json(selectedItem);
}
