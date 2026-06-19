"use client";
import { Product } from "@/app/_types/Products";
import Image from "next/image";

interface CardItemsProps {
    cartItems: Product[];
}

export default function CartItems({ cartItems }: CardItemsProps) {
    console.log(cartItems);

    return (
        <div className="flex flex-col gap-5">
            {cartItems.map((item: Product) => (
                <div
                    key={item.id}
                    className="card bg-base-100 w-full shadow-sm p-4 rounded-none grid grid-cols-12 gap-3"
                >
                    <div className="col-span-2">
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={70}
                            height={70}
                            className="bg-(--background-color) p-2"
                        />
                    </div>
                    <div className="col-span-9">
                        <h2 className="font-bold mb-2">{item.title}</h2>
                        <h2 className="text-sm mb-2">{item.category}</h2>
                        <h2 className="text-sm font-bold">{item.price} $</h2>
                    </div>
                </div>
            ))}
        </div>
    );
}
