import React from 'react';
import { useLoaderData } from 'react-router-dom';

const LostFound = () => {
  const items = useLoaderData(); // Fetched data
  console.log(items);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lost & Found Items</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(item => (
          <div
            key={item._id}
            className="card bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-gray-600">Category: {item.category}</p>
              <p className="text-sm text-gray-600">Location: {item.location}</p>
              <p className="text-sm text-gray-600">
                Date Lost: {new Date(item.dateLost).toLocaleDateString()}
              </p>
              <button
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={() => window.location.href = `/details/${item._id}`}
              >
                View Details
              </button>
            </div>
          </div>
        ))} 
      </div>
    </div>
  );
};

export default LostFound;
