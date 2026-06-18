import { products } from "@/app/_data/products";
import type { Product } from "@/app/_types/Products";
import { RiShieldCheckLine, RiTruckLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";

interface DetailsProps {
    params: Promise<{ productSlug: string }>;
}

export default async function ProductDetails({ params }: DetailsProps) {
    const { productSlug } = await params;

    const currentProduct = products.find(
        (product: Product) => product.slug == productSlug
    );

    if (!currentProduct) {
        return (
            <div className="container py-8">
                <h2 className="text-xl text-center font-bold">
                    Product Not Found!
                </h2>
            </div>
        );
    }

    return (
        <div className="container py-8">
            <div className="breadcrumbs text-sm mb-4">
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/products">Products</Link>
                    </li>
                    <li>
                        <span className="inline-flex items-center gap-2 hover:no-underline cursor-default">
                            {currentProduct.title}
                        </span>
                    </li>
                </ul>
            </div>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 md:col-span-7 bg-(--background-color) flex justify-center items-center">
                    <Image
                        src={currentProduct.image}
                        alt={currentProduct.title}
                        width={400}
                        height={400}
                        className="mx-auto"
                    />
                </div>
                <div className="col-span-12 md:col-span-5">
                    <h1 className="text-3xl font-bold text-(--green-color) mb-2">
                        {currentProduct.title}
                    </h1>
                    <h2 className="text-2xl font-bold">
                        {currentProduct.price} $
                    </h2>
                    <div className="divider"></div>
                    <h2 className="font-bold">Description</h2>
                    <p className="text-[#333] mb-2">
                        {currentProduct.description}
                    </p>
                    <h2 className="mb-6">
                        <span className="font-bold">Category:</span>{" "}
                        <span>{currentProduct.category}</span>
                    </h2>
                    <button className="btn flex justify-center items-center w-full mx-auto mb-4 bg-(--green-color) text-white border border-(--green-color)">
                        Add to Cart
                    </button>
                    <div className="grid grid-cols-12 justify-center gap-5 text-sm px-4">
                        <div className="col-span-6 flex items-center gap-3">
                            <RiShieldCheckLine />
                            <div>
                                <h3>1 Year Warranty</h3>
                                <span className="text-[#444]">
                                    Apple Official Care
                                </span>
                            </div>
                        </div>
                        <div className="col-span-6 flex items-center gap-3">
                            <RiTruckLine />
                            <div>
                                <h3>Free Shipping</h3>
                                <span className="text-[#444]">
                                    Orders over 500 DH
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
