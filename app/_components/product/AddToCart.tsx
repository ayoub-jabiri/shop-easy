"use client";
import { useCartContext } from "@/app/_context/CartContext";
import type { CartContextType } from "@/app/_context/CartContext";
import { Product } from "@/app/_types/Products";

interface AddToCartProps {
    currentProduct: Product;
}

export default function AddToCart({ currentProduct }: AddToCartProps) {
    const { cartData, setCartItems }: CartContextType = useCartContext();

    function handleAddToCart(): void {
        console.log(currentProduct);

        console.log(cartData);
    }

    return (
        <button
            className="btn flex justify-center items-center w-full mx-auto mb-4 bg-(--green-color) text-white border border-(--green-color)"
            onClick={handleAddToCart}
        >
            Add to Cart
        </button>
    );
}
