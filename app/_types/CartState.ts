import { Product } from "./Products";

export interface CartItem {
    quantity: number;
    item: Product;
}

export interface CartState {
    cartItemsCount: number;
    cartItems: CartItem[];
}
