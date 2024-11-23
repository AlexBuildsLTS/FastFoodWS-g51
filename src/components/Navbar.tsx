import { Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  toggleTheme: () => void;
  isDark: boolean;
}

export default function Navbar({ toggleTheme, isDark }: NavbarProps) {
  const { itemCount } = useCart();

  return (
    <nav className="p-4 bg-black shadow-lg">
      <div className="container flex items-center justify-between mx-auto">
        {/* Left Side: Home, Menu */}
        <div className="flex items-center space-x-2">
          <Link
            to="/"
            className="text-sm font-semibold text-white bg-green-800 hover:bg-green-700 px-3 py-1.5 rounded-md"
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="text-sm font-semibold text-white bg-green-800 hover:bg-green-700 px-3 py-1.5 rounded-md"
          >
            Menu
          </Link>
          {/* Hide on small screens */}
          <Link
            to="/about"
            className="hidden sm:inline-block text-sm font-semibold text-white bg-green-800 hover:bg-green-700 px-3 py-1.5 rounded-md"
          >
            About Us
          </Link>
        </div>

        {/* Right Side: Cart, Checkout, Theme Toggle */}
        <div className="flex items-center space-x-2">
          <Link
            to="/cart"
            className="relative text-sm font-semibold text-white bg-green-800 hover:bg-green-700 px-3 py-1.5 rounded-md"
          >
            Cart
            {itemCount > 0 && (
              <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-600 rounded-full -top-1 -right-2">
                {itemCount}
              </span>
            )}
          </Link>
          <Link
            to="/checkout"
            className="text-sm font-semibold text-white bg-green-800 hover:bg-green-700 px-3 py-1.5 rounded-md"
          >
            Checkout
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2 transition-colors rounded-full hover:bg-gray-700"
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <Sun className="w-6 h-6 text-white" />
            ) : (
              <Moon className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
