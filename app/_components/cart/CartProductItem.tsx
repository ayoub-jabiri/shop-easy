"use client";
import { useCartContext } from "@/app/_context/CartContext";
import { CartContextType } from "@/app/_types/CartContextType";
import { CartItem } from "@/app/_types/CartState";
import { RiAddLine, RiDeleteBin5Line, RiSubtractLine } from "@remixicon/react";
import Image from "next/image";

interface CartProductItem {
    cartItem: CartItem;
}

export default function CartProductItem({ cartItem }: CartProductItem) {
    const { updateItem, deleteItem }: CartContextType = useCartContext();

    function handleDecreaseQaunity(): void {
        if (cartItem.quantity > 1) {
            updateItem(cartItem.item.id, "decrease");
        }
    }

    function handleIncreaseQaunity(): void {
        updateItem(cartItem.item.id, "increase");
    }

    function handleDeleteItem(): void {
        deleteItem(cartItem.item.id);
    }

    return (
        <>
            <div className="col-span-2">
                <Image
                    src={cartItem.item.image}
                    alt={cartItem.item.title}
                    width={70}
                    height={70}
                    className="bg-(--background-color) p-2"
                />
            </div>
            <div className="col-span-6">
                <h2 className="font-bold mb-2">{cartItem.item.title}</h2>
                <h2 className="text-sm mb-2">{cartItem.item.category}</h2>
                <h2 className="text-sm font-bold">{cartItem.item.price} $</h2>
            </div>
            <div className="col-span-4 flex justify-end gap-8">
                <div className="py-1 px-2 inline-block bg-layer bg-(--background-color) border border-[#888] rounded-lg">
                    <div className="flex items-center gap-x-1.5">
                        <button
                            type="button"
                            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md bg-layer text-layer-foreground shadow-2xs hover:bg-layer-hover focus:outline-hidden focus:bg-layer-focus disabled:opacity-50 cursor-pointer"
                            aria-label="Decrease"
                            onClick={handleDecreaseQaunity}
                        >
                            <RiSubtractLine />
                        </button>
                        <input
                            className="p-0 w-6 bg-transparent border-0 text-foreground placeholder:text-muted-foreground-1 text-center focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                            type="number"
                            aria-roledescription="Number field"
                            value={cartItem.quantity}
                            disabled
                        />
                        <button
                            type="button"
                            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md bg-layer text-layer-foreground shadow-2xs hover:bg-layer-hover focus:outline-hidden focus:bg-layer-focus disabled:opacity-50 cursor-pointer"
                            aria-label="Increase"
                            onClick={handleIncreaseQaunity}
                        >
                            <RiAddLine />
                        </button>
                    </div>
                </div>
                <button className="cursor-pointer" onClick={handleDeleteItem}>
                    <RiDeleteBin5Line className="w-[20px]" />
                </button>
            </div>
        </>
    );
}
