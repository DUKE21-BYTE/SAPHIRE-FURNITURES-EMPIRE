"use client";
import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import { notFound } from "next/navigation";

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  
  // Normalize slug and category matching
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);
  const categoryProducts = products.filter(
    (p) => p.category.toLowerCase() === slug.toLowerCase()
  );

  if (categoryProducts.length === 0) {
    // Optional: You might want to show a "Coming Soon" or redirect if category is invalid
    // For now, let's show empty state or continue if we assume categories are valid but empty
  }

  return (
    <div className="bg-[#fcfbf9] dark:bg-[#1C1917] min-h-screen pt-8 pb-16 font-display">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex mb-8 text-xs md:text-sm font-medium text-stone-500 dark:text-stone-400">
            <Link href="/" className="hover:text-[#B48E43] transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-stone-900 dark:text-white">
              {categoryName}
            </span>
        </nav>

        <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-stone-900 dark:text-white">
            {categoryName} Collection
          </h1>
        </div>

        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {categoryProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group block"
              >
                <div className="relative aspect-square overflow-hidden rounded-lg md:rounded-xl bg-stone-100 dark:bg-stone-800 mb-3 md:mb-4 shadow-sm border border-stone-100 dark:border-stone-800">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                  {product.id === "modular-study-desk" && (
                    <div className="absolute bottom-2 left-2 md:bottom-3 md:left-3 bg-[#B48E43] text-white text-[10px] md:text-xs font-bold px-1.5 py-0.5 md:px-2 md:py-1 rounded shadow-sm">
                      Best Seller
                    </div>
                  )}
                </div>
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm md:text-base font-bold text-stone-900 dark:text-white group-hover:text-[#B48E43] transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mb-1.5">
                    {product.category}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm md:text-base font-bold text-stone-900 dark:text-white">
                      KSH {product.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-stone-500 dark:text-stone-400">No products found in this category yet.</p>
            <Link href="/products" className="text-[#B48E43] hover:underline mt-4 inline-block">
                View all products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
