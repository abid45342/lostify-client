










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

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RecoveryModal from '../components/RecoveryModal';
import { Helmet } from 'react-helmet';
import axios from 'axios';

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
    <div className="container mx-auto p-4">
      <Helmet>
        <title>Item-Details</title>
      </Helmet>
      <h1 className="text-2xl font-bold mb-4">{item.title}</h1>
      <img src={item.thumbnail} alt={item.title} className="w-full h-60 object-cover rounded-lg" />
      <p className="text-lg mt-2">Category: {item.category}</p>
      <p className="text-lg">Location: {item.location}</p>
      <p className="text-lg">Description: {item.description}</p>
      <p className="text-lg">Date Lost: {new Date(item.dateLostFound).toLocaleDateString()}</p>
      <button
        className={`mt-4 py-2 px-4 rounded-lg text-white ${
          item.postType === 'lost' ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'
        }`}
        onClick={handleModalOpen}
      >
        {item.postType === 'lost' ? 'Found This!' : 'This is Mine!'}
      </button>

      {/* Modal */}
      {showModal && <RecoveryModal item={item} closeModal={() => setShowModal(false)} />}
    </div>
  );
};

export default ItemDetails;
