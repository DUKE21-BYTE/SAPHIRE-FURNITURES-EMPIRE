"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("mpesa");

  return (
    <div className="bg-[#fcfbf9] dark:bg-[#1C1917] min-h-screen font-display text-stone-800 dark:text-stone-100">
      <header className="bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#B48E43] rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">
                S
              </div>
              <span className="font-bold text-xl tracking-tight text-stone-900 dark:text-white">
                Saphire Furnitures
              </span>
            </Link>
            <div className="flex items-center gap-2 text-[#96752E] bg-[#F3EAD3]/50 px-4 py-2 rounded-full border border-[#B48E43]/20">
              <span className="material-icons-round text-sm">lock</span>
              <span className="text-sm font-semibold">Secure Checkout</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-3xl mx-auto mb-12">
          <nav aria-label="Progress">
            <ol className="flex items-center" role="list">
              <li className="relative pr-8 sm:pr-20">
                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                  <div className="h-0.5 w-full bg-[#B48E43]"></div>
                </div>
                <Link
                  href="#"
                  className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#B48E43] hover:bg-[#96752E] transition-colors"
                >
                  <span className="material-icons-round text-white text-sm">
                    check
                  </span>
                  <span className="sr-only">Shipping</span>
                </Link>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-[#96752E]">
                  Shipping
                </span>
              </li>
              <li className="relative pr-8 sm:pr-20">
                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                  <div className="h-0.5 w-full bg-stone-200 dark:bg-stone-700"></div>
                  <div className="h-0.5 w-1/2 bg-[#B48E43]"></div>
                </div>
                <Link
                  href="#"
                  className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#B48E43] ring-4 ring-white dark:ring-[#1C1917] shadow-sm"
                >
                  <span className="text-white text-sm font-bold">2</span>
                  <span className="sr-only">Payment</span>
                </Link>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-[#96752E]">
                  Payment
                </span>
              </li>
              <li className="relative">
                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                  <div className="h-0.5 w-full bg-stone-200 dark:bg-stone-700"></div>
                </div>
                <Link
                  href="#"
                  className="relative flex h-8 w-8 items-center justify-center rounded-full bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 transition-colors"
                >
                  <span className="text-stone-500 dark:text-stone-400 text-sm font-bold">
                    3
                  </span>
                  <span className="sr-only">Confirm</span>
                </Link>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-stone-500">
                  Confirm
                </span>
              </li>
            </ol>
          </nav>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
          <div className="lg:col-span-7 space-y-8">
            <section className="bg-white dark:bg-stone-900 rounded-xl shadow-sm border border-stone-200 dark:border-stone-800 p-6 sm:p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-stone-900 dark:text-white flex items-center gap-2">
                  <span className="material-icons-round text-[#B48E43]">
                    local_shipping
                  </span>
                  Shipping Details
                </h2>
                <button className="text-sm text-[#B48E43] font-medium hover:text-[#96752E] transition-colors">
                  Edit
                </button>
              </div>
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-stone-700 dark:text-stone-300"
                  >
                    Full Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      defaultValue="Jane Doe"
                      className="block w-full rounded-lg border-stone-300 shadow-sm focus:border-[#B48E43] focus:ring-[#B48E43] sm:text-sm dark:bg-stone-800 dark:border-stone-700 dark:text-white py-3 transition-colors text-black"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-stone-700 dark:text-stone-300"
                  >
                    Address
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="address"
                      id="address"
                      defaultValue="P.O Box 4230, Westlands"
                      className="block w-full rounded-lg border-stone-300 shadow-sm focus:border-[#B48E43] focus:ring-[#B48E43] sm:text-sm dark:bg-stone-800 dark:border-stone-700 dark:text-white py-3 transition-colors text-black"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-stone-700 dark:text-stone-300"
                  >
                    City
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      defaultValue="Nairobi"
                      className="block w-full rounded-lg border-stone-300 shadow-sm focus:border-[#B48E43] focus:ring-[#B48E43] sm:text-sm dark:bg-stone-800 dark:border-stone-700 dark:text-white py-3 transition-colors text-black"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-stone-700 dark:text-stone-300"
                  >
                    Phone
                  </label>
                  <div className="mt-1">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      defaultValue="+254 712 345 678"
                      className="block w-full rounded-lg border-stone-300 shadow-sm focus:border-[#B48E43] focus:ring-[#B48E43] sm:text-sm dark:bg-stone-800 dark:border-stone-700 dark:text-white py-3 transition-colors text-black"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white dark:bg-stone-900 rounded-xl shadow-sm border border-stone-200 dark:border-stone-800 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-stone-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="material-icons-round text-[#B48E43]">
                  payments
                </span>
                Payment Method
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <label
                  className={`relative flex flex-col items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all hover:bg-stone-50 dark:hover:bg-stone-800 ${
                    paymentMethod === "mpesa"
                      ? "border-[#B48E43] bg-[#F3EAD3]/10"
                      : "border-stone-200 dark:border-stone-700"
                  }`}
                  onClick={() => setPaymentMethod("mpesa")}
                >
                  <input
                    type="radio"
                    name="payment-method"
                    value="mpesa"
                    className="sr-only"
                    checked={paymentMethod === "mpesa"}
                    readOnly
                  />
                  {paymentMethod === "mpesa" && (
                    <div className="w-full flex justify-end absolute top-3 right-3">
                      <span className="material-icons-round text-[#B48E43] text-xl">
                        check_circle
                      </span>
                    </div>
                  )}
                  <div className="h-10 mb-3 flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-600 tracking-tight">
                      M-PESA
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-stone-900 dark:text-white">
                    M-Pesa
                  </span>
                </label>

                <label
                  className={`relative flex flex-col items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all hover:border-[#B48E43]/50 hover:bg-stone-50 dark:hover:bg-stone-800 ${
                    paymentMethod === "card"
                      ? "border-[#B48E43] bg-[#F3EAD3]/10"
                      : "border-stone-200 dark:border-stone-700"
                  }`}
                  onClick={() => setPaymentMethod("card")}
                >
                  <input
                    type="radio"
                    name="payment-method"
                    value="card"
                    className="sr-only"
                    checked={paymentMethod === "card"}
                    readOnly
                  />
                  {paymentMethod === "card" && (
                    <div className="w-full flex justify-end absolute top-3 right-3">
                      <span className="material-icons-round text-[#B48E43] text-xl">
                        check_circle
                      </span>
                    </div>
                  )}
                  <div className="h-10 mb-3 flex items-center justify-center gap-2">
                    <span className="material-icons-round text-stone-600 text-3xl">
                      credit_card
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-stone-900 dark:text-white">
                    Card
                  </span>
                </label>

                <label
                  className={`relative flex flex-col items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all hover:border-[#B48E43]/50 hover:bg-stone-50 dark:hover:bg-stone-800 ${
                    paymentMethod === "bank"
                      ? "border-[#B48E43] bg-[#F3EAD3]/10"
                      : "border-stone-200 dark:border-stone-700"
                  }`}
                  onClick={() => setPaymentMethod("bank")}
                >
                  <input
                    type="radio"
                    name="payment-method"
                    value="bank"
                    className="sr-only"
                    checked={paymentMethod === "bank"}
                    readOnly
                  />
                  {paymentMethod === "bank" && (
                    <div className="w-full flex justify-end absolute top-3 right-3">
                      <span className="material-icons-round text-[#B48E43] text-xl">
                        check_circle
                      </span>
                    </div>
                  )}
                  <div className="h-10 mb-3 flex items-center justify-center">
                    <span className="material-icons-round text-stone-600 text-3xl">
                      account_balance
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-stone-900 dark:text-white">
                    Bank Transfer
                  </span>
                </label>
              </div>

              {paymentMethod === "mpesa" && (
                <div className="bg-stone-50 dark:bg-stone-800/50 rounded-lg p-6 border border-stone-200 dark:border-stone-700">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400">
                      <span className="material-icons-round text-xl">
                        smartphone
                      </span>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-stone-900 dark:text-white">
                        Lipa na M-Pesa
                      </h3>
                      <p className="text-xs text-stone-500 mt-1">
                        You will receive a prompt on your phone to complete the
                        payment.
                      </p>
                    </div>
                  </div>
                  <label
                    htmlFor="mpesa-number"
                    className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2"
                  >
                    M-Pesa Phone Number
                  </label>
                  <div className="relative rounded-md shadow-sm max-w-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="text-stone-500 sm:text-sm font-medium">
                        +254
                      </span>
                    </div>
                    <input
                      type="tel"
                      name="mpesa-number"
                      id="mpesa-number"
                      className="block w-full rounded-lg border-stone-300 pl-14 focus:border-[#B48E43] focus:ring-[#B48E43] sm:text-sm dark:bg-stone-900 dark:border-stone-600 dark:text-white py-3 transition-colors text-black"
                      placeholder="712 345 678"
                    />
                  </div>
                </div>
              )}

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-6 border-t border-stone-100 dark:border-stone-800 text-stone-400">
                <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-[#B48E43]/80">
                  <span className="material-icons-round text-lg text-[#B48E43]">
                    lock
                  </span>
                  256-Bit SSL Encrypted
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-[#B48E43]/80">
                  <span className="material-icons-round text-lg text-[#B48E43]">
                    verified_user
                  </span>
                  Norton Secured
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-[#B48E43]/80">
                  <span className="material-icons-round text-lg text-[#B48E43]">
                    security
                  </span>
                  Fraud Protection
                </div>
              </div>
            </section>

            <div className="flex justify-between items-center pt-4">
              <Link
                href="/custom" // Return to custom builder or cart
                className="text-sm font-semibold text-stone-500 hover:text-[#B48E43] transition-colors flex items-center gap-1"
              >
                <span className="material-icons-round text-lg">arrow_back</span>
                Return to cart
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 mt-10 lg:mt-0">
            <div className="bg-white dark:bg-stone-900 rounded-xl shadow-lg border border-stone-200 dark:border-stone-800 overflow-hidden sticky top-24">
              <div className="p-6 sm:p-8 bg-stone-50 dark:bg-stone-800/50 border-b border-stone-200 dark:border-stone-800">
                <h2 className="text-lg font-bold text-stone-900 dark:text-white">
                  Order Summary
                </h2>
                <p className="text-sm text-stone-500">
                  Check your items before purchasing
                </p>
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex gap-4 pb-6 border-b border-stone-100 dark:border-stone-800">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-stone-200 dark:border-stone-700 bg-stone-100">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoBQWbSPoLuODGAbN6wO9SdkDp0MFuh5aIyTqiHK3Il32XFHgE4pvZ_Auvdu7zT_BrBKheIDZ7kXb2My__OHTPgtJIOM875NanqhWLqBFNE1G-MOQl3dSxkEAk0XY7EbAROP0mLvOdpniVn4gq8PdWHnj56wIrbUYBaZCAYxP-R7VGoYVmgpsbtRdw-c5UbiKfxwRdtjaghOG0P5jGpYNwtLm1BRD5Rj4AvaqEO96dtLWA5RN2YeIuDeBbgdRgCzsbiraGUlG5seQ4"
                      alt="Modern custom mahogany dining table in a well lit room"
                      className="h-full w-full object-cover object-center"
                      width={96}
                      height={96}
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-stone-900 dark:text-white">
                        <h3>Custom Dining Table</h3>
                        <p className="ml-4 whitespace-nowrap">KSH 45,000</p>
                      </div>
                      <p className="mt-1 text-sm text-stone-500">
                        Mahogany Series
                      </p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-xs">
                      <div className="space-y-1 text-stone-500 dark:text-stone-400">
                        <p>
                          Length:{" "}
                          <span className="font-medium text-stone-700 dark:text-stone-300">
                            2.4m
                          </span>
                        </p>
                        <p>
                          Legs:{" "}
                          <span className="font-medium text-stone-700 dark:text-stone-300">
                            Steel (Matte Black)
                          </span>
                        </p>
                        <p>
                          Finish:{" "}
                          <span className="font-medium text-stone-700 dark:text-stone-300">
                            Semi-Gloss Varnish
                          </span>
                        </p>
                      </div>
                      <button
                        type="button"
                        className="font-medium text-[#B48E43] hover:text-[#96752E] transition-colors"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between text-sm text-stone-600 dark:text-stone-400">
                    <p>Subtotal</p>
                    <p className="font-medium text-stone-900 dark:text-white">
                      KSH 45,000
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-stone-600 dark:text-stone-400">
                    <p>Shipping</p>
                    <p className="font-medium text-stone-900 dark:text-white">
                      KSH 1,500
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-stone-600 dark:text-stone-400">
                    <p>Taxes (VAT 16%)</p>
                    <p className="font-medium text-stone-900 dark:text-white">
                      Included
                    </p>
                  </div>
                  <div className="border-t border-stone-200 dark:border-stone-700 pt-4 flex items-center justify-between">
                    <p className="text-base font-bold text-stone-900 dark:text-white">
                      Total
                    </p>
                    <div className="text-right">
                      <p className="text-2xl font-extrabold text-[#B48E43]">
                        KSH 46,500
                      </p>
                      <p className="text-xs text-stone-400">Includes VAT</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full rounded-lg border border-transparent bg-[#B48E43] px-6 py-4 text-base font-bold text-white shadow-md hover:bg-[#96752E] focus:outline-none focus:ring-2 focus:ring-[#B48E43] focus:ring-offset-2 transition-all flex justify-between items-center group"
                  >
                    <span>Place Order</span>
                    <span className="flex items-center gap-2 bg-black/10 px-2 py-1 rounded text-sm group-hover:bg-black/20 transition-colors">
                      KSH 46,500
                      <span className="material-icons-round text-sm">
                        arrow_forward
                      </span>
                    </span>
                  </button>
                  <p className="mt-4 text-center text-xs text-stone-500 flex items-center justify-center gap-1">
                    <span className="material-icons-round text-sm text-[#B48E43]">
                      lock
                    </span>
                    Payments are secure and encrypted.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-center gap-6 text-xs text-stone-400">
              <Link href="#" className="hover:text-[#B48E43] underline">
                Refund Policy
              </Link>
              <Link href="#" className="hover:text-[#B48E43] underline">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-[#B48E43] underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
