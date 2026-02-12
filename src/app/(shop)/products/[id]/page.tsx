"use client";
import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import { notFound } from "next/navigation";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const [activeImage, setActiveImage] = useState(0);

  // If product gallery is missing, use the main image as the first image
  const gallery = product.gallery || [{ src: product.image, alt: product.name }];

  return (
    <div className="bg-[#fcfbf9] dark:bg-[#1C1917] min-h-screen pb-20 font-display">
      <main className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex mb-8 text-sm font-medium text-stone-500 dark:text-stone-400">
            <Link href="/" className="hover:text-[#B48E43] transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-[#B48E43] transition-colors">
              {product.category}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-stone-900 dark:text-white">
              {product.name}
            </span>
          </nav>

          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            {/* Product Gallery */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="relative w-full aspect-[4/3] bg-white dark:bg-stone-800 rounded-xl overflow-hidden shadow-sm group">
                <Image
                  src={gallery[activeImage]?.src || product.image}
                  alt={gallery[activeImage]?.alt || product.name}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
              
              {gallery.length > 1 && (
                <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
                  {gallery.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-colors relative ${
                        activeImage === index
                          ? "border-[#B48E43] ring-2 ring-[#B48E43]/20"
                          : "border-transparent hover:border-[#B48E43]/50"
                      }`}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Product Description */}
              <div className="mt-8 prose prose-stone dark:prose-invert text-sm max-w-none">
                <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-4">Description</h3>
                <p>{product.description}</p>
              </div>
            </div>

            {/* Product Details */}
            <div className="lg:col-span-5 mt-8 lg:mt-0">
              <div className="sticky top-24 space-y-8">
                <div className="border-b border-stone-200 dark:border-stone-700 pb-6">
                  <span className="text-sm font-semibold text-[#B48E43] uppercase tracking-wider mb-2 block">
                    Saphire Collection
                  </span>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-stone-900 dark:text-white mb-4">
                    {product.name}
                  </h1>
                  <div className="flex items-end gap-4 mb-2">
                    <span className="text-3xl font-bold text-stone-900 dark:text-white">
                      KSH {product.price.toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-4">
                    <div className="flex text-amber-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-icons text-lg">
                          {i < product.rating ? "star" : "star_border"}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-stone-500 dark:text-stone-400">
                      ({product.rating}.0 Rating)
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 pt-4">
                  <button className="w-full bg-[#B48E43] hover:bg-[#96752E] text-white font-bold py-4 px-6 rounded-lg shadow-lg shadow-[#B48E43]/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 text-lg">
                    <span className="material-icons">shopping_bag</span>
                    Add to Cart
                  </button>
                  
                  {product.category === "Storage" && (
                    <Link
                      href="/custom"
                      className="w-full bg-transparent border-2 border-stone-200 dark:border-stone-700 hover:border-[#B48E43] text-stone-700 dark:text-white hover:text-[#B48E43] font-bold py-3.5 px-6 rounded-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                      <span className="material-icons">tune</span>
                      Customize Similar Item
                    </Link>
                  )}
                </div>

                <div className="flex items-center justify-center gap-6 text-xs text-stone-500 dark:text-stone-400 pt-2 border-t border-stone-100 dark:border-stone-800 mt-2">
                  <div className="flex items-center gap-1">
                    <span className="material-icons text-sm text-green-600">
                      verified_user
                    </span>
                    Authentic Wood
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-icons text-sm text-green-600">
                      local_shipping
                    </span>
                    Free Delivery
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
