import { RiShoppingCart2Line } from "@remixicon/react";
import Link from "next/link";

export default function AppHeader() {
    return (
        <header className="bg-white py-4 shadow-sm">
            <div className="container">
                <nav className="flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold">
                        Shop<span className="text-(--green-color)">Easy</span>
                    </Link>
                    <Link href="/cart">
                        <RiShoppingCart2Line />
                    </Link>
                </nav>
            </div>
        </header>
    );
}
