import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

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
            className="card bg-white shadow-lg rounded-xl  overflow-hidden  hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-48    rounded-xl"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-gray-600">Category: {item.category}</p>
              <p className="text-sm text-gray-600">Location: {item.location}</p>
              <p className="text-sm text-gray-600">
                Date Lost/Found: {new Date(item.dateLost).toLocaleDateString()}
              </p>
              <button className="mt-4">
  <Link
    to={`/itemDetails/${item._id}`}
    className="block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 shadow-md hover:shadow-lg text-center"
  >
    View Details
  </Link>
</button>
            </div>
          </div>
        ))} 
      </div>
    </div>
  );
};

export default LostFound;
