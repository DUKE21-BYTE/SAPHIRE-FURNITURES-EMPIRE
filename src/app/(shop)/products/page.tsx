"use client";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: "modular-study-desk",
    name: "Modular Study Desk",
    price: 45000,
    rating: 5,
    category: "Tables",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBuXUXB4jKSD9eoIQW4Pd7OdejnDhkoIVSn47n10Gp_T2gjtpGapUATo8P0lvfuybpMGGYkzdo56xs-oa0-RqJEBzvYqirIxzkSyOqrLz0xKQ08t5RUsNCwarzcVnghVQabxe_0mX6D5bWS8HEJwYCbucAe0HeeH3OkgW2Vy1Ud9zI5RjW68oyJaOKTNVaGLLolrGYUmEJrsNSBlr-aOo2sx0cLcp2nOaKmW9SIMoPZPbTd_zY8CPMVsWXE7vfd0syHNMoxL5G8wR_t",
  },
  {
    id: "oak-dining-table",
    name: "Solid Oak Dining Table",
    price: 65000,
    rating: 4,
    category: "Tables",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDBYd6koh3-nHhrBqoa3BcqE08WG7AMv19bVdYBAp8ae2uKZbTT-bjM-dmiTq4z9Owkl_UpMaYzjMqOLkh0Z17atpO_QBCq908dGHR4XQ4oRGCJc65iveg1r-9iQZXbAiOd-FPc6rz6UkwOb_-qrUcyRrihTk1IvggLL4iqoUtqR_EoJkXm06AIqv3SWztO7gWPmkoGo33EXl-qTJbzh7tKO445VQmmcXiJ5cqyQp9NdRZNJKqAfg6OCyzA0sNtUk_s0y-xCsOT8IeL",
  },
  {
    id: "minimalist-chair",
    name: "Minimalist Lounge Chair",
    price: 18000,
    rating: 5,
    category: "Chairs",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCWA8oGawzPLOXVCoqE9y7Y6v_a6zZ_vRxSxPv4YukhVD2gE_hqxq1IuEJHDdVpAzpvzmXqgyxPC1MHk95AhIswnRKIlQyJlc_AH7syhk2Uu_z4MCtlDM96Dhb5zVNQD20hl-v-Nqne5XlGu5deorrlZM0GmAVbwsJgcQOX-5atUvFWqvwGfX7vQxdFCm85PkRYM7FR0PXmZ2ioThfmSZVsEiZO7Qrug64VMcIxbPDCmNgdxYTPpDhum31uZjCYD4jP0DL-AGl7viRI",
  },
  {
    id: "wall-shelves",
    name: "Floating Wall Shelves",
    price: 12500,
    rating: 4,
    category: "Storage",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAbTbxu_mguQGTSAXoCeV3Z_CP_bfMiETj0VKMq6rh0RfcL3wo3uKHy29EZmbdDTYr2JyU-J2JHC40Y0nEeq1kdvyDi334xWlQPbj73EkY9689qtqO3_Ug-dj0JDBwxGRlGIhhyGyzwGhvykrXt5d6pOjih2WdSOHNrYsVvP-tJrGikEV77YNIcppfRGBbavcpFgbsZz_ydw73ySjDe_G9Vk-qgsy7mII3lj175g_m2fNmFCn0TzxyTpzAArZi0umb5Zrvy-BlRwlhK",
  },
  {
    id: "custom-shelf",
    name: "Modular Shelf System",
    price: 25000,
    rating: 5,
    category: "Storage",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDdVOHUxvKe_tIIq6x9jfHS-PLm1QdlIo81JpmoqUvlHvvy4O_4uUeehU2DUbMcH8Swl80ppyDkisVkayhUX8aWiRk2tG83XiXY3yHieJ4ipKcN8XtzHoLIRb6fq27SgmI3bUNuVXGWi8qzH0ItkLD-psIQrnA6CaqxyL3aY-TFKwKdlQbxAd9actSvdnhJgwIf88cDicUqkSXnu5uFgn3_4jBt8Qy-6R6ku3-Q705GuxDnPGA5VKUUy8grHB7Keqhb2YdyCBI7BgUd",
  },
  {
    id: "teak-coffee-table",
    name: "Teak Coffee Table",
    price: 32000,
    rating: 4,
    category: "Tables",
    image:
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-[#fdfbf7] dark:bg-[#1c1917] min-h-screen pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
          <h1 className="text-3xl font-bold text-stone-900 dark:text-white">
            All Products
          </h1>
          <div className="flex items-center gap-4 mt-4 md:mt-0 text-sm">
            <span className="text-stone-500 dark:text-stone-400">Sort by:</span>
            <select className="bg-transparent border-none text-stone-900 dark:text-white font-medium focus:ring-0 cursor-pointer">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg md:rounded-xl bg-stone-100 dark:bg-stone-800 mb-3 md:mb-4 shadow-sm border border-stone-100 dark:border-stone-800">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                <div className="absolute top-2 right-2 md:top-3 md:right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-1.5 md:p-2 bg-white/90 dark:bg-stone-900/90 backdrop-blur rounded-full text-stone-600 dark:text-stone-300 hover:text-[#B48E43] shadow-sm">
                    <span className="material-icons text-sm md:text-lg block">
                      favorite_border
                    </span>
                  </button>
                </div>
                {product.id === "modular-study-desk" && (
                  <div className="absolute bottom-2 left-2 md:bottom-3 md:left-3 bg-[#B48E43] text-white text-[10px] md:text-xs font-bold px-1.5 py-0.5 md:px-2 md:py-1 rounded shadow-sm">
                    Best Seller
                  </div>
                )}
              </div>
              <div>
                <div className="flex justify-between items-start mb-0.5 md:mb-1">
                  <h3 className="text-sm md:text-lg font-bold text-stone-900 dark:text-white group-hover:text-[#B48E43] transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <span className="flex items-center text-[10px] md:text-xs font-bold bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-1 md:px-1.5 py-0.5 rounded ml-1 md:ml-2 whitespace-nowrap">
                    <span className="material-icons text-[8px] md:text-[10px] mr-0.5">
                      star
                    </span>
                    {product.rating}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-stone-500 dark:text-stone-400 mb-1 md:mb-2">
                  {product.category}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm md:text-base font-bold text-stone-900 dark:text-white">
                    KSH {product.price.toLocaleString()}
                  </span>
                  <span className="text-[10px] md:text-xs font-semibold text-[#B48E43] group-hover:underline hidden sm:inline-block">
                    View Details
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
