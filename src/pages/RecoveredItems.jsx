








// import React, { useState } from 'react';
// import { Helmet } from 'react-helmet';
// import { useLoaderData } from 'react-router-dom';
// import { FaTh, FaList } from 'react-icons/fa'; // Import React Icons

// const RecoveredItems = () => {
//   const allRecoveredItems = useLoaderData();
//   const [isTableLayout, setIsTableLayout] = useState(false);

//   const toggleLayout = () => {
//     setIsTableLayout(!isTableLayout);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <Helmet>
//         <title>Recovered Items</title>
//       </Helmet>
//       <h1 className="text-2xl font-bold mb-4">Recovered Items</h1>
//       <button
//         onClick={toggleLayout}
//         className="mb-4  bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 flex items-center space-x-2"
//       >
//         {isTableLayout ? <FaTh /> : <FaList />} {/* Toggle Icon */}
//         <span>Change Layout</span>
//       </button>

//       {allRecoveredItems && allRecoveredItems.length > 0 ? (
//         isTableLayout ? (
//           // Table Layout
//           <table className="table-auto w-full border-collapse border border-gray-300">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border px-4 py-2">Item Name</th>
//                 <th className="border px-4 py-2">Category</th>
//                 <th className="border px-4 py-2">Recovered Location</th>
//                 <th className="border px-4 py-2">Recovered By</th>
//                 <th className="border px-4 py-2">Recovery Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {allRecoveredItems.map((item) => (
//                 <tr key={item._id} className="hover:bg-gray-100">
//                   <td className="border px-4 py-2">{item.itemName}</td>
//                   <td className="border px-4 py-2">{item.itemCategory}</td>
//                   <td className="border px-4 py-2">{item.recoveredLocation}</td>
//                   <td className="border px-4 py-2">
//                     <div className="flex items-center space-x-2">
//                       <span>{item.recoveredBy.name}</span>
//                     </div>
//                   </td>
//                   <td className="border px-4 py-2">
//                     {new Date(item.recoveryDate).toLocaleDateString()}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           // Card Layout
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {allRecoveredItems.map((item) => (
//               <div
//                 key={item._id}
//                 className="card bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
//               >
//                 <img
//                   src={item.itemPhotoURL}
//                   alt={item.itemName}
//                   className="w-full h-48"
//                 />
//                 <div className="p-4">
//                   <h2 className="text-lg font-semibold mb-2">{item.itemName}</h2>
//                   <p className="text-sm text-gray-600">
//                     Category: {item.itemCategory}
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     Recovered Location: {item.recoveredLocation}
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     Recovered By: {item.recoveredBy.name}
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     Recovery Date: {new Date(item.recoveryDate).toLocaleDateString()}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )
//       ) : (
//         <p className="text-gray-500 text-center mt-8">
//           No recovered items found. Please check back later or add a recovery entry.
//         </p>
//       )}
//     </div>
//   );
// };

// export default RecoveredItems;









import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaList, FaTh } from 'react-icons/fa'; // Import React Icons
import { useNavigate } from 'react-router-dom';

const RecoveredItems = () => {
  // const {user}=useContext(AuthContext)
  const navigate = useNavigate();
  const [allRecoveredItems, setAllRecoveredItems] = useState([]);
  const [isTableLayout, setIsTableLayout] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetch data from server
    axios.get('https://server-delta-eight-10.vercel.app/allrecovered', { withCredentials: true })
      .then((response) => {
        setAllRecoveredItems(response.data);
        setLoading(false); // Data is loaded, set loading to false
      })
      .catch((error) => {
        console.log(error.status)
        if ((error.status === 401 || error.status === 403)) {
          navigate('/login');
        }
        console.error('Error fetching recovered items:', error);
        setLoading(false); // Even if there's an error, stop loading
      });
  }, []);

  const toggleLayout = () => {
    setIsTableLayout(!isTableLayout);
  };

  return (
    <div className="container mx-auto p-4">
      <Helmet>
        <title>Recovered Items</title>
      </Helmet>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Recovered Items</h1>
        <button
          onClick={toggleLayout}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 flex items-center space-x-2"
        >
          {isTableLayout ? <FaTh /> : <FaList />} {/* Toggle Icon */}
          <span>Change Layout</span>
        </button>
      </div>

      {/* Loading Spinner */}
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-ring loading-lg" />
        </div>
      ) : (
        <div>
          {allRecoveredItems && allRecoveredItems.length > 0 ? (
            isTableLayout ? (
              // Table Layout
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
              // Card Layout
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allRecoveredItems.map((item) => (
                  <div
                    key={item._id}
                    className="card bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                  >
                    <img
                      src={item.itemPhotoURL}
                      alt={item.itemName}
                      className="w-full h-48"
                    />
                    <div className="p-4">
                      <h2 className="text-lg font-semibold mb-2">{item.itemName}</h2>
                      <p className="text-sm text-gray-600">
                        Category: {item.itemCategory}
                      </p>
                      <p className="text-sm text-gray-600">
                        Recovered Location: {item.recoveredLocation}
                      </p>
                      <p className="text-sm text-gray-600">
                        Recovered By: {item.recoveredBy.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        Recovery Date: {new Date(item.recoveryDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : (
            <p className="text-gray-500 text-center mt-8">
              No recovered items found. Please check back later or add a recovery entry.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default RecoveredItems;
