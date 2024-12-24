import React, { useContext, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../provider/AuthProvider';

const RecoveryModal = ({ item, closeModal }) => {
  const { user } = useContext(AuthContext);
  const [recoveredLocation, setRecoveredLocation] = useState('');
  const [recoveryDate, setRecoveryDate] = useState(new Date());

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh on form submit

    // Check if item is already recovered
    if (item.status === 'recovered') {
      alert('This item is already marked as recovered.');
      return;
    }

    const recoveryData = {
      itemId: item._id,
      itemName: item.title,
      itemCategory: item.category,
      itemLocation: item.location,
      itemDateLost: item.dateLost,
      itemPhotoURL: item.thumbnail,
      recoveredLocation,
      recoveryDate,
      recoveredBy: {
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
      },
    };

    
      // Save recovery data to recovered collection
      fetch('http://localhost:5000/recovered', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(recoveryData),
      })
      .then(res=>res.json())
      .then(data=>{
       if(data.insertedId){
         alert('Item marked as recovered!')
         fetch(`http://localhost:5000/items/${item._id}`,{
          method:'PATCH',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({status:'recovered'})
         });
         item.status = 'recovered';
        
         closeModal();
       }

      })




  };




  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-1/3">
        <h2 className="text-lg font-bold mb-4">Recovery Details</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block font-semibold mb-2">Recovered Location</label>
            <input
              type="text"
              className="border w-full p-2 rounded"
              value={recoveredLocation}
              required
              onChange={(e) => setRecoveredLocation(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Recovery Date</label>
            <ReactDatePicker
              selected={recoveryDate}
              onChange={(date) => setRecoveryDate(date)}
              className="border w-full p-2 rounded"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">Recovered By</label>
            <input
              type="text"
              value={user.displayName || 'Unknown User'}
              readOnly
              className="border w-full p-2 rounded bg-gray-100 mb-2"
            />
            <input
              type="email"
              value={user.email || 'Unknown Email'}
              readOnly
              className="border w-full p-2 rounded bg-gray-100 mb-2"
            />
            {user.photoURL && (
              <img
                src={user.photoURL}
                alt="User"
                className="w-12 h-12 rounded-full mt-2"
              />
            )}
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit
          </button>
          <button
            type="button"
            className="mt-4 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 ml-2"
            onClick={closeModal}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecoveryModal;
