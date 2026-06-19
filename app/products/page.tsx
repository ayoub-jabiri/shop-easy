import { products } from "@/app/_data/products";
import type { Product } from "@/app/_types/Products";
import ProductCard from "@/app/_components/home/ProductCard";
import { useCartContext } from "../_context/CartContext";

export default function Products() {
    return (
        <section className="py-8">
            <div className="container">
                <h1 className="text-3xl font-bold">Our Products</h1>
                <p className="md:w-[500px] mb-10">
                    Discover our curated selection of high-utility tech and
                    lifestyle products designed for the modern professional.
                </p>
                <div className="grid grid-cols-12 gap-5">
                    {products.map((product: Product) => (
                        <div
                            key={product.id}
                            className="col-span-12 md:col-span-6 lg:col-span-3"
                        >
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
