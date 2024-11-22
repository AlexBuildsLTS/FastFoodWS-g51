import { ShoppingCart, Menu as MenuIcon } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const { itemCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-navy-800 shadow-lg fixed w-full top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-800 dark:text-white">FastFoodApp</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#menu" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Menu</a>
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</a>
            <ThemeToggle />
            <div className="relative">
              <a href="#cart" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <ShoppingCart className="w-6 h-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 dark:bg-navy-800">
            <a href="#menu" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Menu</a>
            <a href="#about" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</a>
            <a href="#cart" className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Cart ({itemCount})</a>
          </div>
        </div>
      )}
    </nav>
  );
}