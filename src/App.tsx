import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen transition-colors bg-gray-50 dark:bg-navy-900">
            {/* Inline Navigation */}
            <nav className="bg-white shadow dark:bg-gray-800">
              <div className="container flex justify-between px-4 py-4 mx-auto">
                <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
                  Home
                </Link>
                <Link to="/about" className="text-xl font-bold text-gray-800 dark:text-white">
                  About
                </Link>
                <Link to="/menu" className="text-xl font-bold text-gray-800 dark:text-white">
                  Menu
                </Link>
                <Link to="/cart" className="text-xl font-bold text-gray-800 dark:text-white">
                  Cart
                </Link>
                <Link to="/checkout" className="text-xl font-bold text-gray-800 dark:text-white">
                  Checkout
                </Link>
              </div>
            </nav>

            {/* Main Content */}
            <main className="pt-20 pb-12">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
            </main>
          </div>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}
