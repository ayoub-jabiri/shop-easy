"use client";
import { useCartContext } from "@/app/_context/CartContext";
import { CartContextType } from "@/app/_types/CartContextType";
import { CartItem } from "@/app/_types/CartState";
import CartProductItem from "./CartProductItem";

export default function CartItems() {
    const {
        cartData: { cartItems },
    }: CartContextType = useCartContext();

    return (
        <div className="flex flex-col gap-5">
            {cartItems.map((cartItem: CartItem, i: number) => (
                <div
                    key={i}
                    className="card bg-base-100 w-full shadow-sm p-4 rounded-none grid grid-cols-12 items-start gap-3"
                >
                    <CartProductItem cartItem={cartItem} />
                </div>
            ))}
        </div>
    );
}
