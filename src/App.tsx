import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage'; 
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen transition-colors bg-gray-50 dark:bg-navy-900">
            <Navbar />
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
