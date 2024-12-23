import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RecoveredItems = () => {
  const allRecoveredItems = useLoaderData();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Recovered Items</h1>
      {allRecoveredItems && allRecoveredItems.length > 0 ? (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Item Name</th>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Recovered Location</th>
              <th className="border px-4 py-2">Recovered By</th>
              <th className="border px-4 py-2">Recovery Date</th>
            </tr>
          </thead>
          <tbody>
            {allRecoveredItems.map((item) => (
              <tr key={item._id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{item.itemName}</td>
                <td className="border px-4 py-2">{item.itemCategory}</td>
                <td className="border px-4 py-2">{item.recoveredLocation}</td>
                <td className="border px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <img
                      src={item.recoveredBy.image}
                      alt={item.recoveredBy.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span>{item.recoveredBy.name}</span>
                  </div>
                </td>
                <td className="border px-4 py-2">
                  {new Date(item.recoveryDate).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500 text-center mt-8">
          No recovered items found. Please check back later or add a recovery entry.
        </p>
      )}
    </div>
  );
};

export default RecoveredItems;
