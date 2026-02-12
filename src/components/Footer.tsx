import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="w-8 h-8 bg-[#B48E43] rounded-lg flex items-center justify-center text-white font-bold text-xl shadow shadow-orange-900/40">
                S
              </span>
              <span className="font-bold text-xl tracking-tight text-white">
                Saphire<span className="text-[#B48E43]">.</span>
              </span>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Empowering you to design furniture that fits your life, your style, and your home perfectly.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-stone-400 hover:text-white transition-colors">
                <span className="material-icons text-xl">facebook</span>
              </Link>
              <Link href="#" className="text-stone-400 hover:text-white transition-colors">
                <span className="material-icons text-xl">camera_alt</span>
              </Link>
              <Link href="#" className="text-stone-400 hover:text-white transition-colors">
                <span className="material-icons text-xl">alternate_email</span>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Shop</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="hover:text-[#B48E43] transition-colors">
                  Tables
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#B48E43] transition-colors">
                  Chairs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#B48E43] transition-colors">
                  Storage
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#B48E43] transition-colors">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="hover:text-[#B48E43] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#B48E43] transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#B48E43] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#B48E43] transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Stay Inspired</h4>
            <p className="text-sm text-stone-400 mb-4">
              Join our newsletter for design tips and exclusive offers.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-stone-800 border-none rounded-lg px-4 py-2 w-full text-sm focus:ring-1 focus:ring-[#B48E43] text-white placeholder-stone-500"
              />
              <button
                type="button"
                className="bg-[#B48E43] hover:bg-[#96752E] text-white rounded-lg px-4 py-2 transition-colors"
              >
                <span className="material-icons text-sm">send</span>
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <p>© 2026 Saphire Furnitures. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
