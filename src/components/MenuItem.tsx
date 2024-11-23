import { Plus } from 'lucide-react';
import { MenuItem as MenuItemType } from '../types';
import { useCart } from '../context/CartContext';

interface Props {
  item: MenuItemType;
}

export default function MenuItem({ item }: Props) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image,
    });
  };

  return (
    <div className="bg-white dark:bg-navy-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] w-64">
      <img
        src={item.image}
        alt={item.name}
        className="object-cover w-full h-40"
      />
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            {item.name}
          </h3>
          <span className="text-lg font-bold text-green-600 dark:text-green-400">
            ${item.price.toFixed(2)}
          </span>
        </div>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          {item.description}
        </p>
        <button
          onClick={handleAddToCart}
          className="flex items-center justify-center w-full gap-2 px-4 py-2 text-white transition-colors bg-green-500 rounded-md hover:bg-green-600"
        >
          <Plus className="w-5 h-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
