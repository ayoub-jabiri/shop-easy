"use client";
import { useCartContext } from "@/app/_context/CartContext";
import { CartContextType } from "@/app/_types/CartContextType";
import { CartItem } from "@/app/_types/CartState";
import { Product } from "@/app/_types/Products";
import { useState } from "react";

interface AddToCartProps {
    currentProduct: Product;
}

export default function AddToCart({ currentProduct }: AddToCartProps) {
    const { cartData, setCartItems }: CartContextType = useCartContext();

    const [isAdded, setIsAdded] = useState<boolean>(false);

    // Check if the Product already exists in the Cart
    const item = cartData.cartItems.find(
        (cartItem: CartItem) => cartItem.item.slug == currentProduct.slug
    );
    if (item && !isAdded) {
        setIsAdded(true);
    }

    function handleAddToCart(): void {
        setCartItems({
            quantity: 1,
            item: currentProduct,
        });
        setIsAdded(true);
    }

    return (
        <button
            className={`btn flex justify-center items-center w-full mx-auto mb-4 bg-(--green-color) text-white border border-(--green-color) ${
                isAdded ? "bg-gray-400" : ""
            }`}
            disabled={isAdded}
            onClick={handleAddToCart}
        >
            {isAdded ? "Product Added" : "Add to Cart"}
        </button>
    );
}
