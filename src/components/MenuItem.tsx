import { Plus } from 'lucide-react';
import { MenuItem as MenuItemType } from '../types';
import { useCart } from '../context/CartContext';

interface Props {
  item: MenuItemType;
}

export default function MenuItem({ item }: Props) {
  const { addItem } = useCart();

  return (
    <div className="bg-white dark:bg-navy-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.name}</h3>
          <span className="text-lg font-bold text-green-600 dark:text-green-400">${item.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{item.description}</p>
        <button
          onClick={() => addItem(item)}
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}