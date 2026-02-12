"use client";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useState, useEffect } from "react";

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="bg-[#fcfbf9] dark:bg-[#1C1917] min-h-screen pt-12 pb-24 flex items-center justify-center">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-stone-200 dark:bg-stone-700 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-stone-200 dark:bg-stone-700 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-stone-200 dark:bg-stone-700 rounded col-span-2"></div>
                <div className="h-2 bg-stone-200 dark:bg-stone-700 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-stone-200 dark:bg-stone-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="bg-[#fcfbf9] dark:bg-[#1C1917] min-h-screen pt-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <div className="w-24 h-24 bg-stone-100 dark:bg-stone-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-icons text-4xl text-stone-300 dark:text-stone-600">
              shopping_cart
            </span>
          </div>
          <h1 className="text-3xl font-bold text-stone-900 dark:text-white mb-4">
            Your cart is empty
          </h1>
          <p className="text-stone-500 dark:text-stone-400 mb-8 max-w-md mx-auto">
            Looks like you haven&apos;t added any items to the cart yet. Start shopping
            to fill it in.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#B48E43] hover:bg-[#96752E] transition-all shadow-lg shadow-orange-500/20"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#fcfbf9] dark:bg-[#1C1917] min-h-screen pt-12 pb-24 font-display">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-stone-900 dark:text-white mb-8">
          Shopping Cart
        </h1>

        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
          <div className="lg:col-span-7">
            <ul
              role="list"
              className="border-t border-b border-stone-200 dark:border-stone-800 divide-y divide-stone-200 dark:divide-stone-800"
            >
              {items.map((item) => (
                <li key={item.id} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0 relative w-24 h-24 sm:w-32 sm:h-32 rounded-md overflow-hidden border border-stone-200 dark:border-stone-700 bg-stone-100 dark:bg-stone-800">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm">
                            <Link
                              href={`/products/${item.id}`} // Assuming dynamic route exists
                              className="font-medium text-stone-900 dark:text-white hover:text-[#B48E43] transition-colors"
                            >
                              {item.name}
                            </Link>
                          </h3>
                        </div>
                        {item.options && (
                          <div className="mt-1 flex text-sm">
                            {Object.entries(item.options).map(([key, value]) => (
                                <p key={key} className="text-stone-500 dark:text-stone-400 capitalize mr-4">
                                    <span className="font-semibold">{key}: </span> {value}
                                </p>
                            ))}
                          </div>
                        )}
                        <p className="mt-1 text-sm font-medium text-stone-900 dark:text-white">
                          KSH {item.price.toLocaleString()}
                        </p>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:pr-9">
                        <label htmlFor={`quantity-${item.id}`} className="sr-only">
                          Quantity, {item.name}
                        </label>
                        <select
                          id={`quantity-${item.id}`}
                          name={`quantity-${item.id}`}
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item.id, Number(e.target.value))
                          }
                          className="max-w-full rounded-md border border-stone-300 py-1.5 text-base leading-5 font-medium text-stone-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-[#B48E43] focus:border-[#B48E43] sm:text-sm cursor-pointer"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((qty) => (
                            <option key={qty} value={qty}>
                              {qty}
                            </option>
                          ))}
                        </select>

                        <div className="absolute top-0 right-0">
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="-m-2 p-2 inline-flex text-stone-400 hover:text-red-500"
                          >
                            <span className="sr-only">Remove</span>
                            <span className="material-icons text-xl">close</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 flex text-sm text-stone-700 dark:text-stone-300 space-x-2">
                      <span className="material-icons text-green-500 text-sm">
                        check
                      </span>
                      <span>In stock</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 mt-16 lg:mt-0 bg-stone-50 dark:bg-stone-800/50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 border border-stone-200 dark:border-stone-800 sticky top-24">
            <h2 className="text-lg font-medium text-stone-900 dark:text-white">
              Order summary
            </h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-stone-600 dark:text-stone-400">
                  Subtotal
                </dt>
                <dd className="text-sm font-medium text-stone-900 dark:text-white">
                  KSH {subtotal.toLocaleString()}
                </dd>
              </div>
              <div className="flex items-center justify-between border-t border-stone-200 dark:border-stone-700 pt-4">
                <dt className="flex items-center text-sm text-stone-600 dark:text-stone-400">
                  <span>Shipping estimate</span>
                  <a
                    href="#"
                    className="ml-2 flex-shrink-0 text-stone-400 hover:text-stone-500"
                  >
                    <span className="sr-only">
                      Learn more about how shipping is calculated
                    </span>
                    <span className="material-icons text-sm">help</span>
                  </a>
                </dt>
                <dd className="text-sm font-medium text-stone-900 dark:text-white">
                  KSH 500
                </dd>
              </div>
              <div className="flex items-center justify-between border-t border-stone-200 dark:border-stone-700 pt-4">
                <dt className="text-sm text-stone-600 dark:text-stone-400">
                  Tax estimate
                </dt>
                <dd className="text-sm font-medium text-stone-900 dark:text-white">
                  KSH {(subtotal * 0.16).toLocaleString()}
                </dd>
              </div>
              <div className="flex items-center justify-between border-t border-stone-200 dark:border-stone-700 pt-4">
                <dt className="text-base font-bold text-stone-900 dark:text-white">
                  Order total
                </dt>
                <dd className="text-base font-bold text-stone-900 dark:text-white">
                  KSH {(subtotal + 500 + subtotal * 0.16).toLocaleString()}
                </dd>
              </div>
            </dl>

            <div className="mt-8">
              <Link
                href="/checkout"
                className="w-full bg-[#B48E43] border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-[#96752E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-stone-50 focus:ring-[#B48E43] block text-center transition-colors"
                role="button"
              >
                Checkout
              </Link>
            </div>
            
            <div className="mt-6 flex justify-center text-sm text-center text-stone-500 dark:text-stone-400">
                <p>
                  or{' '}
                  <Link href="/products" className="text-[#B48E43] font-medium hover:text-[#96752E]">
                    Continue Shopping<span aria-hidden="true"> &rarr;</span>
                  </Link>
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
