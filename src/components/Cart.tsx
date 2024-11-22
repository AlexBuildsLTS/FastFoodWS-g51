import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Your cart is empty</h2>
        <p className="text-gray-600 dark:text-gray-300">Add some delicious items to get started!</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Your Cart</h2>
      <div className="space-y-4">
        {items.map(item => (
          <div key={item.id} className="flex items-center gap-4 bg-white dark:bg-navy-800 p-4 rounded-lg shadow">
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-md"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-navy-700"
              >
                <Minus className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
              <span className="w-8 text-center dark:text-white">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-navy-700"
              >
                <Plus className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
              <button
                onClick={() => removeItem(item.id)}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-navy-700 ml-2"
              >
                <Trash2 className="w-5 h-5 text-red-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 bg-white dark:bg-navy-800 p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-semibold text-gray-800 dark:text-white">Total:</span>
          <span className="text-2xl font-bold text-green-600 dark:text-green-400">${total.toFixed(2)}</span>
        </div>
        <div className="flex gap-4">
          <button
            onClick={clearCart}
            className="flex-1 py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-navy-700 transition-colors text-gray-800 dark:text-white"
          >
            Clear Cart
          </button>
          <button
            onClick={() => alert('Checkout functionality coming soon!')}
            className="flex-1 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}