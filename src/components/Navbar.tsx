"use client";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 dark:bg-[#1c1917]/95 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="w-7 h-7 md:w-8 md:h-8 bg-[#B48E43] rounded-lg flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-md shadow-orange-900/10 group-hover:bg-[#96752E] transition-colors">
                S
              </span>
              <span className="font-bold text-lg md:text-xl tracking-tight text-stone-900 dark:text-white">
                Saphire <span className="text-[#B48E43]">Furnitures</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            <Link
              href="/products"
              className={`text-sm font-medium transition-colors ${
                isActive("/products")
                  ? "text-[#B48E43]"
                  : "text-stone-600 dark:text-stone-300 hover:text-[#B48E43]"
              }`}
            >
              Shop
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors ${
                isActive("/about")
                  ? "text-[#B48E43]"
                  : "text-stone-600 dark:text-stone-300 hover:text-[#B48E43]"
              }`}
            >
              About Us
            </Link>
            <div className="relative group">
               <button className="text-stone-600 dark:text-stone-300 hover:text-[#B48E43] text-sm font-medium transition-colors flex items-center gap-1">
                 Categories <span className="material-icons text-sm">expand_more</span>
               </button>
               <div className="absolute top-full left-0 w-48 bg-white dark:bg-stone-900 shadow-xl rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 border border-stone-100 dark:border-stone-800">
                 <Link href="/category/tables" className="block px-4 py-2 text-sm text-stone-700 dark:text-stone-200 hover:bg-stone-50 dark:hover:bg-stone-800 hover:text-[#B48E43]">Tables</Link>
                 <Link href="/category/chairs" className="block px-4 py-2 text-sm text-stone-700 dark:text-stone-200 hover:bg-stone-50 dark:hover:bg-stone-800 hover:text-[#B48E43]">Chairs</Link>
                 <Link href="/category/storage" className="block px-4 py-2 text-sm text-stone-700 dark:text-stone-200 hover:bg-stone-50 dark:hover:bg-stone-800 hover:text-[#B48E43]">Storage</Link>
               </div>
            </div>
            <Link
              href="/support"
              className="text-sm font-medium text-stone-600 dark:text-stone-300 hover:text-[#B48E43] transition-colors"
            >
              Support
            </Link>
          </div>

          {/* Icons & CTA */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <Link href="/cart" className="text-stone-600 dark:text-stone-300 hover:text-[#B48E43] transition-colors relative p-1.5 md:p-2">
              <span className="material-icons text-xl md:text-2xl">shopping_cart</span>
              {itemCount > 0 && (
                <span className="absolute top-0 right-0 flex h-3 w-3 md:h-4 md:w-4 items-center justify-center rounded-full bg-[#B48E43] text-[8px] md:text-[10px] font-bold text-white animate-bounce">
                  {itemCount}
                </span>
              )}
            </Link>
            <Link
              href="/custom"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-2.5 border border-transparent text-xs md:text-sm font-bold rounded-lg text-white bg-[#B48E43] hover:bg-[#96752E] transition-all shadow-lg shadow-orange-500/20"
            >
              Start Designing
            </Link>
            <button
              className="md:hidden p-1.5 rounded-md text-stone-600 dark:text-stone-300 hover:text-[#B48E43] focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <span className="material-icons text-2xl">menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#1c1917] border-t border-stone-200 dark:border-stone-800 shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-2">
                <Link href="/products" onClick={toggleMobileMenu} className="block px-3 py-2.5 rounded-lg text-sm font-bold text-stone-900 dark:text-white hover:bg-stone-50 dark:hover:bg-stone-800 active:bg-stone-100 flex justify-between items-center">
                  Shop All Products
                  <span className="material-icons text-stone-400 text-sm">chevron_right</span>
                </Link>
                <div className="space-y-1 pl-3 border-l-2 border-stone-100 dark:border-stone-800 ml-3">
                   <Link href="/category/tables" onClick={toggleMobileMenu} className="block px-3 py-2 rounded-md text-sm text-stone-600 dark:text-stone-300 hover:text-[#B48E43] hover:bg-stone-50">Tables</Link>
                   <Link href="/category/chairs" onClick={toggleMobileMenu} className="block px-3 py-2 rounded-md text-sm text-stone-600 dark:text-stone-300 hover:text-[#B48E43] hover:bg-stone-50">Chairs</Link>
                   <Link href="/category/storage" onClick={toggleMobileMenu} className="block px-3 py-2 rounded-md text-sm text-stone-600 dark:text-stone-300 hover:text-[#B48E43] hover:bg-stone-50">Storage</Link>
                </div>
                <Link href="/about" onClick={toggleMobileMenu} className="block px-3 py-2.5 rounded-lg text-sm font-bold text-stone-900 dark:text-white hover:bg-stone-50 dark:hover:bg-stone-800">About Us</Link>
                <Link href="/support" onClick={toggleMobileMenu} className="block px-3 py-2.5 rounded-lg text-sm font-bold text-stone-900 dark:text-white hover:bg-stone-50 dark:hover:bg-stone-800">Support</Link>
                <Link href="/custom" onClick={toggleMobileMenu} className="block w-full text-center mt-4 px-6 py-3 border border-transparent text-sm font-bold rounded-lg text-white bg-[#B48E43] hover:bg-[#96752E] shadow-md">
                  Start Designing
                </Link>
            </div>
        </div>
      )}
    </nav>
  );
}
