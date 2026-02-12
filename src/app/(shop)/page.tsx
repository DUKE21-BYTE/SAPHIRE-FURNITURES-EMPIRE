import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#fdfbf7] dark:bg-[#1c1917] min-h-screen">
      <header className="relative pt-20 lg:pt-28 pb-16 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-900/30 text-[#b45309] text-xs font-bold tracking-wide uppercase mb-6 border border-amber-100 dark:border-amber-800">
                <span className="w-2 h-2 rounded-full bg-[#b45309] animate-pulse"></span>
                New Collection Available
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-stone-900 dark:text-white mb-6 leading-[1.1]">
                Design It. <br />
                Build It. <br />
                <span className="text-[#b45309]">Love It.</span>
              </h1>
              <p className="text-lg text-stone-600 dark:text-stone-400 mb-8 max-w-lg leading-relaxed">
                Experience the joy of creating premium custom furniture that fits
                your space perfectly. Choose your materials, customize the
                dimensions, and assemble with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/custom"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-[#b45309] hover:bg-[#92400e] transition-all shadow-xl shadow-orange-600/20 transform hover:-translate-y-1"
                >
                  Design Your Furniture
                  <span className="material-icons ml-2 text-sm">arrow_forward</span>
                </Link>
                <Link
                  href="#catalog"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-stone-700 dark:text-white bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-700 transition-all"
                >
                  View Catalog
                </Link>
              </div>
              <div className="mt-12 flex items-center gap-6 text-sm font-medium text-stone-500 dark:text-stone-400">
                <div className="flex items-center gap-2">
                  <span className="material-icons text-[#b45309] text-base">
                    check_circle
                  </span>
                  Premium Materials
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-icons text-[#b45309] text-base">
                    check_circle
                  </span>
                  5-Year Warranty
                </div>
              </div>
            </div>
            <div className="relative lg:h-[600px] w-full">
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-amber-200/40 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-normal dark:bg-amber-900/20"></div>
              <div className="absolute bottom-10 -left-10 w-72 h-72 bg-orange-200/40 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-normal dark:bg-orange-900/20"></div>
              <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl bg-stone-200">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnqaHmsJFqsT7bs0RT1XqQCLDdKZzSOgVTZjoeTPPjqhxZZTZNrB0XFBA9QKE9RNRpqMBd3zArHlJXzDbMKMocJUNbqTRZrpeRmA-xyhtJdhnrXaGwzOoXPwR9NrhSs9tRharAoHkicT8tT8c-_SRuDGF_ctnLzvhtxD7qU3xIo3qLyQxWAE977RN7hDiod0XAweydx_OVQzBAhbjoAfl-YMKH1lfdL0ueTaUBmEjzWUSbeU-DTFOCdQtw1C6YyE8YajJNlRXw-Bft"
                  alt="Modern minimalist living room with custom furniture"
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-stone-900/95 backdrop-blur-sm p-4 rounded-xl border border-stone-200/50 dark:border-stone-700/50 shadow-lg flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#b45309]/10 rounded-lg flex items-center justify-center text-[#b45309]">
                    <span className="material-icons">palette</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                      Custom Configuration
                    </p>
                    <p className="font-bold text-stone-900 dark:text-white">
                      Oak Velvet Sectional
                    </p>
                  </div>
                  <div className="ml-auto">
                    <span className="text-[#b45309] font-bold">$1,299</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 bg-white dark:bg-[#1c1917]" id="catalog">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white mb-4">
              Shop by Category
            </h2>
            <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
              Explore our base collections. Each piece serves as a canvas for
              your personal style.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative h-96 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 border border-stone-100 dark:border-stone-800">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBYd6koh3-nHhrBqoa3BcqE08WG7AMv19bVdYBAp8ae2uKZbTT-bjM-dmiTq4z9Owkl_UpMaYzjMqOLkh0Z17atpO_QBCq908dGHR4XQ4oRGCJc65iveg1r-9iQZXbAiOd-FPc6rz6UkwOb_-qrUcyRrihTk1IvggLL4iqoUtqR_EoJkXm06AIqv3SWztO7gWPmkoGo33EXl-qTJbzh7tKO445VQmmcXiJ5cqyQp9NdRZNJKqAfg6OCyzA0sNtUk_s0y-xCsOT8IeL"
                alt="Modern wooden dining table"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                <h3 className="text-2xl font-bold text-white mb-2">Tables</h3>
                <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-300">
                  <p className="text-stone-300 text-sm">
                    Dining, Coffee & Side Tables
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-4 text-white font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <span>Explore Collection</span>
                  <span className="material-icons text-sm">arrow_forward</span>
                </div>
              </div>
            </div>
            <div className="group relative h-96 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 md:-mt-8 border border-stone-100 dark:border-stone-800">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWA8oGawzPLOXVCoqE9y7Y6v_a6zZ_vRxSxPv4YukhVD2gE_hqxq1IuEJHDdVpAzpvzmXqgyxPC1MHk95AhIswnRKIlQyJlc_AH7syhk2Uu_z4MCtlDM96Dhb5zVNQD20hl-v-Nqne5XlGu5deorrlZM0GmAVbwsJgcQOX-5atUvFWqvwGfX7vQxdFCm85PkRYM7FR0PXmZ2ioThfmSZVsEiZO7Qrug64VMcIxbPDCmNgdxYTPpDhum31uZjCYD4jP0DL-AGl7viRI"
                alt="Modern armchair furniture"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                <h3 className="text-2xl font-bold text-white mb-2">Chairs</h3>
                <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-300">
                  <p className="text-stone-300 text-sm">
                    Armchairs, Dining & Lounge
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-4 text-white font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <span>Explore Collection</span>
                  <span className="material-icons text-sm">arrow_forward</span>
                </div>
              </div>
            </div>
            <div className="group relative h-96 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 border border-stone-100 dark:border-stone-800">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbTbxu_mguQGTSAXoCeV3Z_CP_bfMiETj0VKMq6rh0RfcL3wo3uKHy29EZmbdDTYr2JyU-J2JHC40Y0nEeq1kdvyDi334xWlQPbj73EkY9689qtqO3_Ug-dj0JDBwxGRlGIhhyGyzwGhvykrXt5d6pOjih2WdSOHNrYsVvP-tJrGikEV77YNIcppfRGBbavcpFgbsZz_ydw73ySjDe_G9Vk-qgsy7mII3lj175g_m2fNmFCn0TzxyTpzAArZi0umb5Zrvy-BlRwlhK"
                alt="Modern shelving unit storage"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                <h3 className="text-2xl font-bold text-white mb-2">Storage</h3>
                <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-300">
                  <p className="text-stone-300 text-sm">
                    Shelves, Cabinets & Consoles
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-4 text-white font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <span>Explore Collection</span>
                  <span className="material-icons text-sm">arrow_forward</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#fdfbf7] dark:bg-[#1c1917] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-20 right-0 w-96 h-96 bg-amber-100/40 dark:bg-amber-900/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-0 w-64 h-64 bg-stone-200/30 dark:bg-stone-800/20 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="text-[#b45309] font-bold tracking-wider uppercase text-sm">
              The Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white mt-2">
              How It Works
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-stone-200 dark:bg-stone-700 -z-10"></div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-2xl bg-white dark:bg-stone-800 shadow-xl shadow-stone-200/50 dark:shadow-black/30 flex items-center justify-center mb-8 border border-stone-100 dark:border-stone-700 group-hover:scale-110 transition-transform duration-300 group-hover:border-[#b45309]/30">
                <span className="material-icons text-4xl text-[#b45309]">
                  grid_view
                </span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-3">
                1. Select Base
              </h3>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed px-4">
                Browse our curated collection of base models designed by
                award-winning architects.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-2xl bg-white dark:bg-stone-800 shadow-xl shadow-stone-200/50 dark:shadow-black/30 flex items-center justify-center mb-8 border border-stone-100 dark:border-stone-700 group-hover:scale-110 transition-transform duration-300 group-hover:border-[#b45309]/30">
                <span className="material-icons text-4xl text-[#b45309]">
                  tune
                </span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-3">
                2. Customize
              </h3>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed px-4">
                Adjust dimensions, choose premium finishes, and pick fabrics
                that match your vibe.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-2xl bg-white dark:bg-stone-800 shadow-xl shadow-stone-200/50 dark:shadow-black/30 flex items-center justify-center mb-8 border border-stone-100 dark:border-stone-700 group-hover:scale-110 transition-transform duration-300 group-hover:border-[#b45309]/30">
                <span className="material-icons text-4xl text-[#b45309]">
                  build
                </span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-3">
                3. Assemble
              </h3>
              <p className="text-stone-600 dark:text-stone-400 leading-relaxed px-4">
                Receive your kit and assemble it with our easy, tool-free
                locking mechanism.
              </p>
            </div>
          </div>
          <div className="mt-16 text-center">
            <Link
              href="/custom"
              className="inline-flex items-center text-[#b45309] font-bold hover:text-[#92400e] transition-colors"
            >
              Start Your Project
              <span className="material-icons ml-1 text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#78350f] to-[#451a03] text-white relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <span className="absolute -top-12 -left-8 text-9xl text-white/10 font-serif leading-none">
                &quot;
              </span>
              <div className="relative z-10">
                <div className="flex gap-1 mb-6 text-yellow-400">
                  <span className="material-icons">star</span>
                  <span className="material-icons">star</span>
                  <span className="material-icons">star</span>
                  <span className="material-icons">star</span>
                  <span className="material-icons">star</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
                  I never thought building a desk could feel this luxurious. The
                  quality is unmatched.
                </h2>
                <div>
                  <p className="font-bold text-lg">Sarah Jenkins</p>
                  <p className="text-orange-200">Interior Designer, NY</p>
                </div>
              </div>
              <div className="mt-12 flex gap-4">
                <button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#b45309] transition-colors">
                  <span className="material-icons">arrow_back</span>
                </button>
                <button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#b45309] transition-colors">
                  <span className="material-icons">arrow_forward</span>
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 rotate-6 rounded-2xl transform translate-x-4 translate-y-4"></div>
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPAeNn2bNvZAO_5dTgQu2gqgZOnznM5fQ2Xa-WEevyQ-8-Rm4tRdcSAU_wVIDbN_hrVYjyVC_OP1GJXLToXojn0gq3XTOe87DhxPDItdzIWoRCQK8VEusviqWjT8QkfCSLwxppT3mpkf7EP1f58APKMnepNsgqhPrHthcJ1fv2BS4ROF85HjtfToIKY2vI3YlG4UX0OA2yQoDMqWzoMtG9qA0WzePA6pY7PYGHO4wsnqolfqY24LDscI-x68NazWtXQPjvtvs052N7"
                  alt="Customer photo of assembled furniture"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-6 right-6 bg-white text-stone-900 px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
                Sarah&apos;s &quot;Nova&quot; Desk
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
