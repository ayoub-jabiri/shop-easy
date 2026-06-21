import { useCartContext } from "@/app/_context/CartContext";
import { CartContextType } from "@/app/_types/CartContextType";
import { CartItem } from "@/app/_types/CartState";

export default function OrderSummary() {
    const {
        cartData: { cartItems },
        handleCheckout,
    }: CartContextType = useCartContext();
    const total: number = cartItems.reduce(
        (p: number, cartItem: CartItem): number =>
            p + cartItem.item.price * cartItem.quantity,
        0
    );

    return (
        <div className="card bg-base-100 w-full shadow-sm p-4 rounded-none">
            <h2 className="text-xl font-bold">Order Summary</h2>
            <div className="divider"></div>
            <p className="flex justify-between mb-2">
                <span>Subtotal</span> <span>{total.toFixed(2)} $</span>
            </p>
            <p className="flex justify-between mb-2">
                <span>Shipping</span> <span>Free</span>
            </p>
            <p className="flex justify-between">
                <span>Tax</span> <span>0 $</span>
            </p>
            <div className="divider"></div>
            <p className="flex justify-between mb-2">
                <span className="text-xl font-bold">Total</span>{" "}
                <span className="text-(--green-color) text-xl font-bold">
                    {total.toFixed(2)} $
                </span>
            </p>
            <button
                className="btn w-full mt-4 bg-(--green-color) text-white font-normal"
                onClick={handleCheckout}
            >
                PROCEED TO CHECKOUT
            </button>
        </div>
    );
}
