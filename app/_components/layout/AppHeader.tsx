"use client";
import { RiShoppingCart2Line } from "@remixicon/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavLink } from "@/app/_types/NavLink";

export default function AppHeader() {
    const pathName: string = usePathname();

    const navLinks: NavLink[] = [
        {
            id: 1,
            title: "home",
            path: "/",
            isActive: false,
        },
        {
            id: 2,
            title: "products",
            path: "/products",
            isActive: false,
        },
    ];

    navLinks.forEach((link: NavLink) => {
        if (link.path == pathName) {
            link.isActive = true;
        }
    });

    return (
        <header className="bg-white py-4 shadow-sm sticky top-0 z-10">
            <div className="container">
                <nav className="flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold">
                        Shop<span className="text-(--green-color)">Easy</span>
                    </Link>
                    <div className="flex items-center gap-5">
                        <ul className="flex gap-5">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <Link
                                        href={link.path}
                                        className={`capitalize main-transition hover:text-(--green-color) hover:underline ${
                                            link.isActive &&
                                            "text-(--green-color) underline"
                                        }`}
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Link href="/cart">
                            <RiShoppingCart2Line />
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}
