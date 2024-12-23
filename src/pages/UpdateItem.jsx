





import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

const UpdateItem = () => {
  const location = useLocation();
  const { item } = location.state || {};
  console.log(item);
  const[dateLostFound,setDateLostFound]=useState(item.dateLostFound);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      postType: e.target.postType.value,
      thumbnail: e.target.thumbnail.value,
      title: e.target.title.value,
      description: e.target.description.value,
      category: e.target.category.value,
      location: e.target.location.value,
      dateLostFound:dateLostFound,
    };

    fetch(`http://localhost:5000/items/${item._id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then(() => {
        alert('Item updated successfully!');
      })
      .catch((error) => console.error('Error updating item:', error));
  };

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Update Item</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-bold mb-2">Post Type</label>
          <select
            name="postType"
            defaultValue={item.postType}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          >
            <option value="lost">Lost</option>
            <option value="found">Found</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-2">Thumbnail URL</label>
          <input
            type="text"
            name="thumbnail"
            defaultValue={item.thumbnail}
            className="border w-full p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Title</label>
          <input
            type="text"
            name="title"
            defaultValue={item.title}
            className="border w-full p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Description</label>
          <textarea
            name="description"
            defaultValue={item.description}
            className="border w-full p-2 rounded"
            rows="4"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Category</label>
          <input
            type="text"
            name="category"
            defaultValue={item.category}
            className="border w-full p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">Location</label>
          <input
            type="text"
            name="location"
            defaultValue={item.location}
            className="border w-full p-2 rounded"
            required
          />
        </div>
                    <div className="mt-6">
                        <label className="block text-gray-700 font-bold mb-2">Date Lost/Found</label>
                        <DatePicker
                            selected={dateLostFound}
                            onChange={(date) => setDateLostFound(date)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            dateFormat="yyyy-MM-dd"
                            required
                        />
                    </div>
        {/* Read-only fields for user email and name */}
        <div>
          <label className="block font-semibold mb-2">User Name</label>
          <input
            type="text"
            name="userName"
            value={item.name}
            readOnly
            className="border w-full p-2 rounded bg-gray-100"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">User Email</label>
          <input
            type="email"
            name="userEmail"
            value={item.email}
            readOnly
            className="border w-full p-2 rounded bg-gray-100"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateItem;






