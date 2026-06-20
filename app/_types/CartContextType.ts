import { CartItem, CartState } from "./CartState";

export interface CartContextType {
    cartData: CartState;
    setCartItems: (newItem: CartItem) => void;
    deleteItem: (itemId: number) => void;
}
