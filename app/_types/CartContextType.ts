import { CartItem, CartState } from "./CartState";

export interface CartContextType {
    cartData: CartState;
    setCartItems: (newItem: CartItem) => void;
    deleteItem: (itemId: number) => void;
    updateItem: (itemId: number, type: string) => void;
    handleCheckout: () => void;
}
