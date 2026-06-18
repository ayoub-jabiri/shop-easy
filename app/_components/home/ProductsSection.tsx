import { products } from "@/app/_data/products";
import type { Product } from "@/app/_types/Products";
import ProductCard from "./ProductCard";
import Link from "next/link";

export default function ProductsSection() {
    return (
        <section className="py-8" id="products-section">
            <div className="container">
                <h2 className="text-xl font-bold">Curated Inventory</h2>
                <p className="mb-4">
                    Exceptional performance, minimalist design.
                </p>
                <div className="grid grid-cols-12 gap-5">
                    {products.slice(0, 8).map((product: Product) => (
                        <div
                            key={product.id}
                            className="col-span-12 md:col-span-6 lg:col-span-3"
                        >
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
                <Link
                    href="/products"
                    className="btn flex justify-center items-center w-[200px] mt-4 mx-auto bg-(--green-color) text-white border border-(--green-color)"
                >
                    View More Products
                </Link>
            </div>
        </section>
    );
}
