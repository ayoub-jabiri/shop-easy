"use client";
import React, { useContext, useState } from "react";
import type { Product } from "../_types/Products";
import { createContext } from "react";

interface CartState {
    cartItemsCount: number;
    cartItems: Product[];
}

export interface CartContextType {
    cartData: CartState;
    setCartItems: (newItem: Product) => void;
}

const CartContext = createContext<CartContextType>({
    cartData: {
        cartItemsCount: 0,
        cartItems: [],
    },
    setCartItems() {},
});

export default function CartProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [cartData, setCartData] = useState<CartState>({
        cartItemsCount: 0,
        cartItems: [],
    });

    function setCartItems(newItem: Product) {
        setCartData((prevData) => {
            return {
                cartItemsCount: prevData.cartItemsCount + 1,
                cartItems: [...prevData.cartItems, newItem],
            };
        });
    }

    return (
        <CartContext.Provider value={{ cartData, setCartItems: setCartItems }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCartContext: () => CartContextType = () =>
    useContext(CartContext);
