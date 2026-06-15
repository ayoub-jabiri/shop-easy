import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="bg-(--background-color)">
            <div className="container min-h-[calc(100vh-60px)] grid grid-cols-12 justify-center items-center gap-16">
                <div className="col-span-12 md:col-span-6 max-md:text-center">
                    <h1 className="text-3xl text-(--green-color) font-bold mb-2">
                        Modern Essentials for the Digital Era
                    </h1>
                    <p className="mb-4">
                        Curation meets precision. Discover high-end technology
                        designed to elevate your daily workflow and digital
                        lifestyle.
                    </p>
                    <button className="btn bg-(--green-color) text-white border border-(--green-color) rounded-none">
                        Explore Catalog
                    </button>
                </div>
                <div className="max-md:hidden md:col-span-6">
                    <Image
                        src="/hero.png"
                        alt="Image"
                        width={450}
                        height={200}
                    />
                </div>
            </div>
        </section>
    );
}
