import type { Product } from "@/app/_types/Products";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div>
            <Image
                src="/hero.png"
                alt={product.title}
                width={300}
                height={200}
            />
            <div className="p-4">
                <h3 className="font-bold" title={product.title}>
                    {product.title.length <= 20
                        ? product.title
                        : product.title.slice(0, 20) + "..."}
                </h3>
                <h4>{product.price} $</h4>
                <Link
                    href="/contact"
                    className="btn w-full mt-4 bg-transparent text-(--green-color) border border-(--green-color)"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
}
