import MenuItem from '../components/MenuItem';
import { menuData } from '../data/menu';

export default function Menu() {
  return (
    <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {menuData.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
}
