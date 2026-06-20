"use client";
import React, { useContext, useState } from "react";
import { createContext } from "react";
import { CartContextType } from "../_types/CartContextType";
import { CartItem, CartState } from "../_types/CartState";

export const CartContext = createContext<CartContextType>({
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

    function setCartItems(newItem: CartItem) {
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
