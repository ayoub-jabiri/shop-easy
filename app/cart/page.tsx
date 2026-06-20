"use client";
import Link from "next/link";
import CartItems from "../_components/cart/CartItems";
import OrderSummary from "../_components/cart/OrderSummary";
import { useCartContext } from "../_context/CartContext";
import { CartContextType } from "../_types/CartContextType";

export default function Cart() {
    const { cartData, setCartItems }: CartContextType = useCartContext();

    return (
        <div className="bg-(--background-color) py-8 min-h-[calc(100vh-60px)]">
            <div className="container h-full">
                <div className="breadcrumbs text-sm mb-4">
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <span className="inline-flex items-center gap-2 hover:no-underline cursor-default">
                                Shopping Cart
                            </span>
                        </li>
                    </ul>
                </div>
                <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>
                {!cartData.cartItemsCount && (
                    <div>
                        <p>The cart is Empty!</p>
                    </div>
                )}
                {cartData.cartItemsCount > 0 && (
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-12 md:col-span-7">
                            <CartItems />
                        </div>
                        <div className="col-span-12 md:col-span-5">
                            <OrderSummary />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
