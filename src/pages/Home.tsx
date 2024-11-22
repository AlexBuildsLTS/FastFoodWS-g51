import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-red-100 dark:bg-gray-900">
      <h1 className="mb-4 text-5xl font-bold text-gray-800 dark:text-white">Welcome to FastFoodApp!</h1>
      <p className="mb-6 text-xl text-gray-600 dark:text-gray-300">
        Delicious food delivered to your doorstep.
      </p>
      <Link
        to="/menu"
        className="px-6 py-3 text-white transition bg-red-500 rounded dark:bg-red-600 hover:bg-red-600 dark:hover:bg-red-700"
      >
        View Menu
      </Link>
    </div>
  );
}
