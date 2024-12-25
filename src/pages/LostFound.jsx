
















// import React, { useState } from 'react';
// import { Helmet } from 'react-helmet';
// import { Link, useLoaderData } from 'react-router-dom';

// const LostFound = () => {
//   const items = useLoaderData(); // Fetched data
//   const [searchQuery, setSearchQuery] = useState('');

//   // Filter items based on the search query (title or location)
//   const filteredItems = items.filter(
//     (item) =>
//       item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       item.location.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="container mx-auto p-4">
//       <Helmet>
//         <title>Lost & Found</title>
//       </Helmet>
//       <h1 className="text-2xl font-bold mb-4">Lost & Found Items</h1>

//       {/* Search Input */}
//       <div className="mb-6">
//         <input
//           type="text"
//           placeholder="Search by title or location"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       {/* Items Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredItems.length > 0 ? (
//           filteredItems.map((item) => (
//             <div
//               key={item._id}
//               className="card bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
//             >
//               <img
//                 src={item.thumbnail}
//                 alt={item.title}
//                 className="w-full h-48 object-cover rounded-t-xl"
//               />
//               <div className="p-4">
//                 <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
//                 <p className="text-sm text-gray-600">Category: {item.category}</p>
//                 <p className="text-sm text-gray-600">Location: {item.location}</p>
//                 <p className="text-sm text-gray-600">
//                   Date Lost/Found: {new Date(item.dateLostFound).toLocaleDateString()}
//                 </p>
//                 <button className="mt-4">
//                   <Link
//                     to={`/itemDetails/${item._id}`}
//                     className="block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 shadow-md hover:shadow-lg text-center"
//                   >
//                     View Details
//                   </Link>
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500 text-center col-span-full">No items found matching your search criteria.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LostFound;





import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const LostFound = () => {
  const [items, setItems] = useState([]); // State to store the fetched items
  const [searchQuery, setSearchQuery] = useState(''); // Search query
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch items from API
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://localhost:5000/allitems');
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Unable to fetch items. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  // Filter items based on search query
  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Helmet>
          <title>Loading...</title>
        </Helmet>
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <Helmet>
        <title>Lost & Found</title>
      </Helmet>
      <h1 className="text-2xl font-bold mb-4">Lost & Found Items</h1>

      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by title or location"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Error Message */}
      {error && <div className="text-red-500 text-center">{error}</div>}

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div
              key={item._id}
              className="card bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                <p className="text-sm text-gray-600">Category: {item.category}</p>
                <p className="text-sm text-gray-600">Location: {item.location}</p>
                <p className="text-sm text-gray-600">
                  Date Lost/Found: {new Date(item.dateLostFound).toLocaleDateString()}
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
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">No items found matching your search criteria.</p>
        )}
      </div>
    </div>
  );
};

export default LostFound;
