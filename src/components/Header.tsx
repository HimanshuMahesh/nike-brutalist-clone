import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  User2,
  ShoppingBag,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

const mainNavItems = [
  { name: "New & Featured", href: "/new" },
  { name: "Men", href: "/men" },
  { name: "Women", href: "/women" },
  { name: "Kids", href: "/kids" },
  { name: "Sale", href: "/sale" },
  { name: "SNKRS", href: "/snkrs" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 ${
          isScrolled ? "shadow-lg bg-gray-50" : "bg-white"
        } transition-shadow duration-300`}
      >
        <nav className="px-4 h-14 flex items-center border-b border-gray-200">
          <Link to="/" className="flex-shrink-0">
            <img src="/images/nike-logo.svg" alt="Nike" className="h-4 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center space-x-6 ml-10">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-base font-medium hover:text-gray-500 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-2">
            <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2">
              <Search className="h-5 w-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent border-none focus:outline-none px-2 text-sm w-40"
              />
            </div>
            <button className="p-2 lg:hidden">
              <Search className="h-6 w-6" />
            </button>
            <Link to="/account" className="p-2">
              <User2 className="h-6 w-6" />
            </Link>
            <Link to="/cart" className="p-2">
              <ShoppingBag className="h-6 w-6" />
            </Link>
            <button
              className="p-2 lg:hidden"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>

        <div className="bg-gray-100 text-center py-2 px-4 text-xs font-medium">
          <div className="max-w-7xl mx-auto">
            New Styles On Sale: Up To 40% Off{" "}
            <Link to="/sale" className="underline hover:text-gray-600">
              Shop All Our New Markdowns
            </Link>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white lg:hidden">
          <div className="flex justify-between items-center h-14 px-4 border-b border-gray-200">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <img src="/images/nike-logo.svg" alt="Nike" className="h-4 w-auto" />
            </Link>
            <button onClick={() => setIsMenuOpen(false)} className="p-2">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="p-4">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center justify-between py-4 text-xl font-bold border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
                <ChevronRight className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="h-[84px]" /> {/* Spacer for fixed header */}
    </>
  );
}
