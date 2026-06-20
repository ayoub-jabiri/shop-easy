"use client";
import { CartItem } from "@/app/_types/CartState";
import { RiAddLine, RiDeleteBin5Line, RiSubtractLine } from "@remixicon/react";
import Image from "next/image";

interface CardItemsProps {
    cartItems: CartItem[];
}

export default function CartItems({ cartItems }: CardItemsProps) {
    console.log(cartItems);

    function handleIncreaseQaunity(): void {
        console.log("plus");
    }

    function handleDecreaseQaunity(): void {
        console.log("substract");
    }

    return (
        <div className="flex flex-col gap-5">
            {cartItems.map((cartItem: CartItem) => (
                <div
                    key={cartItem.item.id}
                    className="card bg-base-100 w-full shadow-sm p-4 rounded-none grid grid-cols-12 items-start gap-3"
                >
                    <div className="col-span-2">
                        <Image
                            src={cartItem.item.image}
                            alt={cartItem.item.title}
                            width={70}
                            height={70}
                            className="bg-(--background-color) p-2"
                        />
                    </div>
                    <div className="col-span-7">
                        <h2 className="font-bold mb-2">
                            {cartItem.item.title}
                        </h2>
                        <h2 className="text-sm mb-2">
                            {cartItem.item.category}
                        </h2>
                        <h2 className="text-sm font-bold">
                            {cartItem.item.price} $
                        </h2>
                    </div>
                    <div className="col-span-3 flex justify-end">
                        {/* Input Number */}
                        <div className="py-1 px-2 inline-block bg-layer border border-layer-line rounded-lg">
                            <div className="flex items-center gap-x-1.5">
                                <button
                                    type="button"
                                    className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md bg-layer border border-layer-line text-layer-foreground shadow-2xs hover:bg-layer-hover focus:outline-hidden focus:bg-layer-focus disabled:opacity-50 cursor-pointer"
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
                                />
                                <button
                                    type="button"
                                    className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md bg-layer border border-layer-line text-layer-foreground shadow-2xs hover:bg-layer-hover focus:outline-hidden focus:bg-layer-focus disabled:opacity-50 cursor-pointer"
                                    aria-label="Increase"
                                    onClick={handleIncreaseQaunity}
                                >
                                    <RiAddLine />
                                </button>
                            </div>
                        </div>
                        {/* End Input Number */}
                        <button className="cursor-pointer">
                            <RiDeleteBin5Line className="w-[20px]" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
