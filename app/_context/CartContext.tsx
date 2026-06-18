"use client";
import React, { useState } from "react";
import type { Product } from "../_types/Products";
import { createContext } from "react";

interface CartContextType {
    cartItemsCount: number;
    cartItems: Product[];
    setItems: (newItems: Product[]) => void;
}

interface CartState {
    cartItemsCount: number;
    cartItems: Product[];
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export default function CartProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [cartData, setCartData] = useState<CartState>({
        cartItemsCount: 0,
        cartItems: [],
    });

    return (
        <div>
            <h1>Hello World!</h1>
        </div>
    );
}
