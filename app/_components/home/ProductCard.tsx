import type { Product } from "@/app/_types/Products";

export default function ProductCard({ product }) {
    return (
        <div>
            <h3>{product.title}</h3>
        </div>
    );
}
