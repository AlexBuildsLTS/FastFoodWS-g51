import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Checkout() {
  const { items: cartItems, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [form, setForm] = useState({ name: '', address: '', payment: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart(); // Clear the cart after order is placed
  };

  if (orderPlaced) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-green-100 dark:bg-gray-900">
        <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-white">
          Thank You for Your Order!
        </h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Your delicious meal is on its way.
        </p>
        <Link
          to="/"
          className="px-6 py-3 text-white bg-red-500 rounded dark:bg-red-600 hover:bg-red-600 dark:hover:bg-red-700"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-red-100 dark:bg-gray-900">
        <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-white">
          Your Cart is Empty
        </h2>
        <Link
          to="/menu"
          className="px-6 py-3 text-white bg-red-500 rounded dark:bg-red-600 hover:bg-red-600 dark:hover:bg-red-700"
        >
          View Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-8 bg-red-50 dark:bg-gray-800">
      <h2 className="mb-6 text-3xl font-bold text-gray-800 dark:text-white">Checkout</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 bg-white rounded-lg shadow dark:bg-gray-700"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-gray-700 dark:text-gray-300">
            Name:
          </label>
          <input
            type="text"
            id="name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block mb-2 text-gray-700 dark:text-gray-300">
            Address:
          </label>
          <input
            type="text"
            id="address"
            required
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
            placeholder="Your Address"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="payment" className="block mb-2 text-gray-700 dark:text-gray-300">
            Payment Method:
          </label>
          <select
            id="payment"
            required
            value={form.payment}
            onChange={(e) => setForm({ ...form, payment: e.target.value })}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
          >
            <option value="">Select Payment Method</option>
            <option value="credit">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cash">Cash on Delivery</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-green-500 rounded dark:bg-green-600 hover:bg-green-600 dark:hover:bg-green-700"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
