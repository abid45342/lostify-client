import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import RecoveryModal from '../components/RecoveryModal';
import { Helmet } from 'react-helmet';

const ItemDetails = () => {
  const item = useLoaderData(); // Fetch item details
  const [showModal, setShowModal] = useState(false); // Modal state

  const handleModalOpen = () => {
    if (item.status === 'recovered') {
      alert('This item is already recovered.');
    } else {
      setShowModal(true);
    }
  };

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
      <p className="text-lg">Date Lost: {new Date(item.dateLost).toLocaleDateString()}</p>
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
