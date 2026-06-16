import { products } from "@/app/_data/products";
import type { Product } from "@/app/_types/Products";
import ProductCard from "./ProductCard";

export default function ProductsSection() {
    return (
        <section className="py-8">
            <div className="container">
                <h2 className="text-xl font-bold">Curated Inventory</h2>
                <p className="mb-4">
                    Exceptional performance, minimalist design.
                </p>
                <div className="grid grid-cols-12 gap-5">
                    {products.map((product: Product) => (
                        <div key={product.id} className="col-span-3">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
