










// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import RecoveryModal from '../components/RecoveryModal';
// import { Helmet } from 'react-helmet';
// import axios from 'axios';

// const ItemDetails = () => {
//   const { id } = useParams(); // Get item ID from URL params
//   const [item, setItem] = useState(null); // Item data state
//   const [loading, setLoading] = useState(true); // Loading state
//   const [showModal, setShowModal] = useState(false); // Modal state

//   useEffect(() => {
//     const fetchItem = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/items/${id}`, { withCredentials: true });
//         setItem(response.data);
//       } catch (error) {
//         console.error('Error fetching item details:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchItem();
//   }, [id]);

//   const handleModalOpen = () => {
//     if (item.status === 'recovered') {
//       alert('This item is already recovered.');
//     } else {
//       setShowModal(true);
//     }
//   };

//   if (loading) {
//     return <div className="container mx-auto p-4">Loading...</div>;
//   }

//   if (!item) {
//     return <div className="container mx-auto p-4">Item not found.</div>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <Helmet>
//         <title>Item-Details</title>
//       </Helmet>
//       <h1 className="text-2xl font-bold mb-4">{item.title}</h1>
//       <img src={item.thumbnail} alt={item.title} className="w-full h-60 object-cover rounded-lg" />
//       <p className="text-lg mt-2">Category: {item.category}</p>
//       <p className="text-lg">Location: {item.location}</p>
//       <p className="text-lg">Description: {item.description}</p>
//       <p className="text-lg">Date Lost: {new Date(item.dateLostFound).toLocaleDateString()}</p>
//       <button
//         className={`mt-4 py-2 px-4 rounded-lg text-white ${
//           item.postType === 'lost' ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'
//         }`}
//         onClick={handleModalOpen}
//       >
//         {item.postType === 'lost' ? 'Found This!' : 'This is Mine!'}
//       </button>

//       {/* Modal */}
//       {showModal && <RecoveryModal item={item} closeModal={() => setShowModal(false)} />}
//     </div>
//   );
// };

// export default ItemDetails;















import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, useParams } from 'react-router-dom';
import RecoveryModal from '../components/RecoveryModal';

const ItemDetails = () => {
  const { id } = useParams(); // Get item ID from URL params
  const navigate = useNavigate(); // Navigate function
  const [item, setItem] = useState(null); // Item data state
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [showModal, setShowModal] = useState(false); // Modal state

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/items/${id}`, { withCredentials: true });
        setItem(response.data);
      } catch (err) {
        console.error('Error fetching item details:', err);
        if (err.response && (err.response.status === 401 || err.response.status === 403)) {
          navigate('/login'); // Redirect to login page
        } else {
          setError('Unable to fetch item details.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id, navigate]);

  const handleModalOpen = () => {
    if (item.status === 'recovered') {
      alert('This item is already recovered.');
    } else {
      setShowModal(true);
    }
  };

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

  if (error) {
    return <div className="container mx-auto p-4 text-red-500">{error}</div>;
  }

  if (!item) {
    return <div className="container mx-auto p-4">Item not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Item Details</title>
      </Helmet>
      <div className="flex justify-center text-left">
        <div className="max-w-xl w-full border  border-gray-300 rounded-xl shadow-lg p-6 space-y-4">
          <div className="text-center">
            <h1 className="text-3xl font-serif font-bold text-gray-800">
              {item.title}
            </h1>
          </div>
          <div className="flex justify-center">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full max-w-md h-72  rounded-lg shadow-md"
            />
          </div>
          <div className="space-y-4">
            <p className="text-lg">
              <span className="font-semibold  ">Category:</span>{' '}
              <span className=" text-gray-700 text-base">{item.category}</span>
            </p>
            <p className="text-lg">
              <span className="font-semibold  ">Location:</span>{' '}
              <span className=" text-gray-700 text-base">{item.location}</span>
            </p>
            <p className="text-lg">
              <span className="font-semibold  ">Description:</span>{' '}
              <span className=" text-gray-700 text-base">{item.description}</span>
            </p>
            <p className="text-lg">
              <span className="font-semibold ">Date Lost/Found:</span>{' '}
              <span className=" text-gray-700 text-base">
                {new Date(item.dateLostFound).toLocaleDateString()}
              </span>
            </p>
          </div>
          <div className="flex justify-center">
            <button
              className={`py-3 px-6 rounded-md text-white text-lg font-medium tracking-wide transition transform hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 ${item.postType === 'lost'
                ? 'bg-green-600 hover:bg-green-700 focus:ring-green-500'
                : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
                }`}
              onClick={handleModalOpen}
            >
              {item.postType === 'lost' ? 'Found This!' : 'This is Mine!'}
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <RecoveryModal item={item} closeModal={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default ItemDetails;
