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
    deleteItem() {},
    updateItem() {},
    handleCheckout() {},
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

    function deleteItem(itemId: number) {
        setCartData((prevData) => {
            const newData: CartState = {
                cartItemsCount: prevData.cartItemsCount - 1,
                cartItems: prevData.cartItems.filter(
                    (cartItem) => cartItem.item.id != itemId
                ),
            };

            return newData;
        });
    }

    function updateItem(itemId: number, type: string) {
        switch (type) {
            case "increase":
                setCartData((prevData) => {
                    const newartItems: CartItem[] = [...prevData.cartItems].map(
                        (cartItem: CartItem) => {
                            if (cartItem.item.id == itemId) {
                                cartItem.quantity += 1;
                            }

                            return cartItem;
                        }
                    );

                    const newData: CartState = {
                        cartItemsCount: prevData.cartItemsCount,
                        cartItems: newartItems,
                    };

                    return newData;
                });

                break;
            case "decrease":
                setCartData((prevData) => {
                    const newartItems: CartItem[] = [...prevData.cartItems].map(
                        (cartItem: CartItem) => {
                            if (cartItem.item.id == itemId) {
                                cartItem.quantity -= 1;
                            }

                            return cartItem;
                        }
                    );

                    const newData: CartState = {
                        cartItemsCount: prevData.cartItemsCount,
                        cartItems: newartItems,
                    };

                    return newData;
                });
        }
    }

    function handleCheckout(): void {
        setCartData({
            cartItemsCount: 0,
            cartItems: [],
        });
    }

    return (
        <CartContext.Provider
            value={{
                cartData,
                setCartItems: setCartItems,
                deleteItem: deleteItem,
                updateItem: updateItem,
                handleCheckout: handleCheckout,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export const useCartContext: () => CartContextType = () =>
    useContext(CartContext);
