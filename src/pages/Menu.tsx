import React from 'react';
import MenuItem from '../components/MenuItem';
import { menuData } from '../data/menu';

export default function Menu() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {menuData.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
}
