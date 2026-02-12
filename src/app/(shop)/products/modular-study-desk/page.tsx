"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ModularStudyDeskPage() {
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuXUXB4jKSD9eoIQW4Pd7OdejnDhkoIVSn47n10Gp_T2gjtpGapUATo8P0lvfuybpMGGYkzdo56xs-oa0-RqJEBzvYqirIxzkSyOqrLz0xKQ08t5RUsNCwarzcVnghVQabxe_0mX6D5bWS8HEJwYCbucAe0HeeH3OkgW2Vy1Ud9zI5RjW68oyJaOKTNVaGLLolrGYUmEJrsNSBlr-aOo2sx0cLcp2nOaKmW9SIMoPZPbTd_zY8CPMVsWXE7vfd0syHNMoxL5G8wR_t",
      alt: "Modern minimalist wooden desk in a bright office",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCePGj9WJ53lnkK3LLu_LFXGlmqe7J9O6RkJtB3dQRTNf4OnHqYtbLqKL2BlDbiIhaEYcrWdFEYr_thlsfp-OnMOao6mDnLcbzcrHf---1tN71-gn3lhmk4v5nPwINpmiPjt48tuG4yqpdm9yq_egBjHLSWZ0KFEThvBwoTwfSJgjfE-RtXGCt9N2VR_zQjrHWS0Ml7RVgqLjJx1_ghIhiCU8p3Dm0-Fl0XB471U16hhtyijY2mbEvHVwI1HTBHwwABVJdcydOxa4Ja",
      alt: "Front view of desk",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1bSVv6bvKB07xEoGfG09yIKiV2F-GAIfNvxGywFzetQK0EQ2aXr6DY9y94O65a61m8bMsdmVFnpCcXltzWtlZJNEuqGuUx5iAXzA1vSMJjUM2TW2PjoDN5Z658sKvSpzXLPJ-XhFC_bWvn0CeRTZxCV4yv2jMZIlHLMdYz5kZmH3xK4kvD4Xba4Lu28pVbkChEfAWu3ioWBBR5CTGmNjl_ZCYxVuzQT-DBywzfQqp15WZ6jRhvD8TURlyM1_njiPJF_T2BYF4VXP4",
      alt: "Desk with laptop and plant",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBb4znuHGcaP-r28wNw52st06oDbAyBej-4VJLx1fe9U-8yUThVPn4L6urc578_Dk1EzawWCJLkOIbBJxyHAqaOhWZnRJNuqorSgHklchxGjxfm1BocfkJ9vThbJzbgeB_WsUCdlm2hnhtFgyhaJQSubdhIikhmzMGY1E0RvspqvCYYVeLOyq3NVnRhH98nG7eu3jTqNS3Vkpw_mRJHugwkIQ7NWZjY5iMxicaJ1zZypp1FjJyu3FvAyETSsJq6n0TbMNEBqXlwYBU_",
      alt: "Close up of wood texture",
    },
  ];

  return (
    <div className="bg-[#fcfbf9] dark:bg-[#1C1917] min-h-screen pb-20 font-display">
      <main className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex mb-8 text-sm font-medium text-stone-500 dark:text-stone-400">
            <Link href="/" className="hover:text-[#B48E43] transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="#" className="hover:text-[#B48E43] transition-colors">
              Office
            </Link>
            <span className="mx-2">/</span>
            <Link href="#" className="hover:text-[#B48E43] transition-colors">
              Desks
            </Link>
            <span className="mx-2">/</span>
            <span className="text-stone-900 dark:text-white">
              Modular Study Desk
            </span>
          </nav>

          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            {/* Product Gallery */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="relative w-full aspect-[4/3] bg-white dark:bg-stone-800 rounded-xl overflow-hidden shadow-sm group">
                <div className="absolute top-4 right-4 z-10 flex bg-white/90 dark:bg-stone-900/90 backdrop-blur rounded-lg p-1 shadow-lg border border-stone-100 dark:border-stone-700">
                  <button className="px-3 py-1.5 text-xs font-bold text-[#B48E43] bg-[#B48E43]/10 rounded mr-1">
                    Images
                  </button>
                  <button className="px-3 py-1.5 text-xs font-bold text-stone-500 hover:text-[#B48E43] transition-colors flex items-center gap-1">
                    <span className="material-icons text-sm">3d_rotation</span>{" "}
                    3D View
                  </button>
                </div>
                <Image
                  src={images[activeImage].src}
                  alt={images[activeImage].alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
                {images.map((img, index) => (
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
                <button className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 border-transparent hover:border-[#B48E43]/50 dark:hover:border-stone-600 transition-colors opacity-80 hover:opacity-100 relative bg-black/5">
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center z-10">
                    <span className="material-icons text-white drop-shadow-md">
                      play_circle
                    </span>
                  </div>
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2VS03JHD9sukxuecuJfqhLoaf3QjMC-CjM12f3rcPVEB1fcqixQTC-YsExDm4ZdVSxMfmHPC7GWx4TCrYd32Y9Z6aGdR8JJ_cPduujNGe-6U4rsQUmkzmwtX8xUEHnj9XYTvUJD3YlzXtV9frrGGibMtbVVY_iHOD59OjvplcOAmb9VYpdhcep1_26bY1HOud84UaggrixVHPOP7taVKXKXttS-RRTky4qMUkbj6a4vvTcsEs1LW8YDKfY2wRix6eFZJ8HpSWVeIM"
                    alt="Video thumbnail"
                    fill
                    className="object-cover"
                  />
                </button>
              </div>

              {/* DIY Support Section */}
              <div className="mt-4 bg-white dark:bg-stone-800 rounded-xl p-6 border border-stone-100 dark:border-stone-700 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-stone-900 dark:text-white flex items-center gap-2">
                    <span className="material-icons text-[#B48E43]">
                      handyman
                    </span>
                    DIY Assembly Support
                  </h3>
                  <span className="text-xs font-medium px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full border border-green-200 dark:border-green-800">
                    Tools Included
                  </span>
                </div>
                <p className="text-sm text-stone-500 dark:text-stone-400 mb-6">
                  Need help putting it together? We&apos;ve got you covered with
                  step-by-step guides tailored for you.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link
                    href="#"
                    className="flex items-center gap-3 p-3 rounded-lg border border-stone-200 dark:border-stone-700 hover:border-[#B48E43] dark:hover:border-[#B48E43] hover:bg-[#B48E43]/5 dark:hover:bg-stone-700 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-full bg-stone-50 dark:bg-stone-900 flex items-center justify-center group-hover:bg-white dark:group-hover:bg-stone-800 text-[#B48E43] border border-stone-100 dark:border-stone-800 group-hover:border-[#B48E43]/20">
                      <span className="material-icons">description</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-sm text-stone-900 dark:text-white group-hover:text-[#B48E43] transition-colors">
                        Download Manual
                      </span>
                      <span className="text-xs text-stone-500 dark:text-stone-400">
                        PDF (2.4 MB)
                      </span>
                    </div>
                    <span className="material-icons text-stone-400 ml-auto group-hover:text-[#B48E43] text-sm">
                      download
                    </span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 p-3 rounded-lg border border-stone-200 dark:border-stone-700 hover:border-[#B48E43] dark:hover:border-[#B48E43] hover:bg-[#B48E43]/5 dark:hover:bg-stone-700 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-full bg-stone-50 dark:bg-stone-900 flex items-center justify-center group-hover:bg-white dark:group-hover:bg-stone-800 text-[#B48E43] border border-stone-100 dark:border-stone-800 group-hover:border-[#B48E43]/20">
                      <span className="material-icons">play_arrow</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-sm text-stone-900 dark:text-white group-hover:text-[#B48E43] transition-colors">
                        Watch Tutorial
                      </span>
                      <span className="text-xs text-stone-500 dark:text-stone-400">
                        Video (4:15)
                      </span>
                    </div>
                    <span className="material-icons text-stone-400 ml-auto group-hover:text-[#B48E43] text-sm">
                      open_in_new
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="lg:col-span-5 mt-8 lg:mt-0">
              <div className="sticky top-24 space-y-8">
                <div className="border-b border-stone-200 dark:border-stone-700 pb-6">
                  <span className="text-sm font-semibold text-[#B48E43] uppercase tracking-wider mb-2 block">
                    Series X Collection
                  </span>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-stone-900 dark:text-white mb-4">
                    Modular Study Desk
                  </h1>
                  <div className="flex items-end gap-4 mb-2">
                    <span className="text-3xl font-bold text-stone-900 dark:text-white">
                      KSH 45,000
                    </span>
                    <span className="text-lg text-stone-400 line-through mb-1">
                      KSH 52,000
                    </span>
                  </div>
                  <button className="text-sm text-stone-500 dark:text-stone-400 flex items-center gap-1 hover:text-[#B48E43] transition-colors group mt-2">
                    <span className="material-icons text-sm">info</span>
                    See transparent pricing breakdown
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-white dark:bg-stone-800 p-3 rounded-lg border border-stone-100 dark:border-stone-700 text-center hover:border-[#B48E43]/30 transition-colors">
                    <div className="text-[#B48E43] mb-1 flex justify-center text-sm gap-0.5">
                      <span className="material-icons text-base">circle</span>
                      <span className="material-icons text-base">circle</span>
                      <span className="material-icons text-base">circle</span>
                      <span className="material-icons text-base text-stone-200 dark:text-stone-600">
                        circle
                      </span>
                      <span className="material-icons text-base text-stone-200 dark:text-stone-600">
                        circle
                      </span>
                    </div>
                    <span className="block text-xs font-bold text-stone-400 uppercase tracking-wide">
                      Difficulty
                    </span>
                    <span className="block text-sm font-semibold text-stone-900 dark:text-white">
                      Medium
                    </span>
                  </div>
                  <div className="bg-white dark:bg-stone-800 p-3 rounded-lg border border-stone-100 dark:border-stone-700 text-center hover:border-[#B48E43]/30 transition-colors">
                    <div className="text-[#B48E43] mb-1 flex justify-center">
                      <span className="material-icons text-xl">
                        local_shipping
                      </span>
                    </div>
                    <span className="block text-xs font-bold text-stone-400 uppercase tracking-wide">
                      Delivery
                    </span>
                    <span className="block text-sm font-semibold text-stone-900 dark:text-white">
                      7-10 Days
                    </span>
                  </div>
                  <div className="bg-white dark:bg-stone-800 p-3 rounded-lg border border-stone-100 dark:border-stone-700 text-center hover:border-[#B48E43]/30 transition-colors">
                    <div className="text-[#B48E43] mb-1 flex justify-center">
                      <span className="material-icons text-xl">forest</span>
                    </div>
                    <span className="block text-xs font-bold text-stone-400 uppercase tracking-wide">
                      Material
                    </span>
                    <span className="block text-sm font-semibold text-stone-900 dark:text-white">
                      Solid Oak
                    </span>
                  </div>
                </div>
                <div className="prose prose-stone dark:prose-invert text-sm">
                  <p>
                    A versatile workspace designed for the modern creator.
                    Features sustainably sourced oak and modular legs for easy
                    assembly. The surface is treated with a scratch-resistant
                    matte finish that highlights the natural grain.
                  </p>
                  <ul className="list-none pl-0 space-y-1 mt-4 text-stone-600 dark:text-stone-300">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B48E43]"></span>{" "}
                      Height: 75cm
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B48E43]"></span>{" "}
                      Width: 120cm
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B48E43]"></span>{" "}
                      Depth: 60cm
                    </li>
                  </ul>
                </div>
                <div>
                  <span className="block text-sm font-bold text-stone-900 dark:text-white mb-3">
                    Wood Finish
                  </span>
                  <div className="flex gap-3">
                    <button
                      className="w-12 h-12 rounded-full bg-[#8B5A2B] ring-2 ring-offset-2 ring-[#B48E43] ring-offset-white dark:ring-offset-stone-900 shadow-sm"
                      title="Walnut"
                    ></button>
                    <button
                      className="w-12 h-12 rounded-full bg-[#D2B48C] hover:ring-2 ring-offset-2 ring-stone-300 dark:ring-stone-600 ring-offset-white dark:ring-offset-stone-900 transition-all shadow-sm"
                      title="Oak"
                    ></button>
                    <button
                      className="w-12 h-12 rounded-full bg-[#363636] hover:ring-2 ring-offset-2 ring-stone-300 dark:ring-stone-600 ring-offset-white dark:ring-offset-stone-900 transition-all shadow-sm"
                      title="Black Ash"
                    ></button>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pt-4">
                  <button className="w-full bg-[#B48E43] hover:bg-[#96752E] text-white font-bold py-4 px-6 rounded-lg shadow-lg shadow-[#B48E43]/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 text-lg">
                    <span className="material-icons">shopping_bag</span>
                    Add to Cart
                  </button>
                  <Link
                    href="/custom"
                    className="w-full bg-transparent border-2 border-stone-200 dark:border-stone-700 hover:border-[#B48E43] text-stone-700 dark:text-white hover:text-[#B48E43] font-bold py-3.5 px-6 rounded-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    <span className="material-icons">tune</span>
                    Build Your Own / Customize
                  </Link>
                </div>
                <div className="flex items-center justify-center gap-6 text-xs text-stone-500 dark:text-stone-400 pt-2 border-t border-stone-100 dark:border-stone-800 mt-2">
                  <div className="flex items-center gap-1">
                    <span className="material-icons text-sm text-green-600">
                      verified_user
                    </span>
                    2-Year Warranty
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-icons text-sm text-green-600">
                      sync
                    </span>
                    30-Day Returns
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-icons text-sm text-green-600">
                      lock
                    </span>
                    Secure Checkout
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Mobile/Tablet Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 p-4 transform transition-transform duration-300 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded bg-stone-100 overflow-hidden relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuACJnKbmv2c9mR2ZBXPP6BuTe-W7Xwquz4iZR52JzCzLAw0y4cHV5V8uw0ZlDsFq5bvsHTdmlLkdYKjejE-rfHoJFPw73ZaSJHn80knqRiM1fCfzCbSwZ8cFfSP3kj0p5ksAfxRFkD_X3t0qKXPtrm7IJQk7ywX3vqo5wtdwm_mKnw2GdGjdSdTDsyGSfFyMA6KmD3kaXmc0pnt4TJejTp_u5OfbVGn2JuvVbC-ChwAyBcVswS0gq054n_MFddUg0lgTNMmn97P0Kht"
                alt="Small product thumbnail"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-bold text-stone-900 dark:text-white">
                Modular Study Desk
              </h4>
              <span className="text-sm text-stone-500">Solid Oak</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="font-bold text-xl text-stone-900 dark:text-white">
              KSH 45,000
            </span>
            <button className="bg-[#B48E43] hover:bg-[#96752E] text-white font-bold py-2 px-6 rounded-lg shadow-md transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
