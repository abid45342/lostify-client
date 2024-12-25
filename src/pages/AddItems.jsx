import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider'; // Assumes you have a context for user authentication.
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { use } from 'react';

const AddItems = () => {
    const { user } = useContext(AuthContext); // Get logged-in user info
    const [postType, setPostType] = useState('lost');
    const [dateLostFound, setDateLostFound] = useState(new Date());
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Collect data from the form
        const thumbnail = e.target.thumbnail.value;
        const title = e.target.title.value;
        const description = e.target.description.value;
        const category = e.target.category.value;
        const location = e.target.location.value;
        const email = user?.email;
        const name = user?.displayName;

        const newItem = {
            postType,
            thumbnail,
            title,
            description,
            category,
            location,
            dateLostFound,
            name,
            email
        };


        axios.post('http://localhost:5000/addItems',{ newItem}, { withCredentials: true })
        .then(res=>{
            console.log(res.data)
            if(res.data.insertedId){
                toast.success('Item Successfully Added!');
            }
            
        })
        .catch(error=> {
                    console.log(error)
                    if (error.status === 401 || error.status === 403) {
                        navigate('/login');
                    }
                    toast.error('Failed to Add Item!');
                })

// Runs once when the component mounts.
    





    };
    


    

    return (
        <div className="py-20 min-h-screen flex items-center justify-center bg-gray-100">
            <Helmet>
                <title>Add Lost & Found Item</title>
            </Helmet>
            <ToastContainer />
            <div className="bg-white rounded-xl p-8 shadow-lg w-full max-w-4xl">
                <h2 className="text-2xl font-bold mb-6 text-center">Add Lost & Found Item</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {/* Post Type */}
                        <div>
                            <label className="block text-gray-700 font-bold mb-2">Post Type</label>
                            <select
                                name="type"
                                value={postType}
                                onChange={(e) => setPostType(e.target.value)}
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                required
                            >
                                <option value="lost">Lost</option>
                                <option value="found">Found</option>
                            </select>
                        </div>

                        {/* Thumbnail */}
                        <div>
                            <label className="block text-gray-700 font-bold mb-2">Thumbnail URL</label>
                            <input
                                type="url"
                                name="thumbnail"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                placeholder="Enter image URL"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
                        {/* Title */}
                        <div>
                            <label className="block text-gray-700 font-bold mb-2">Title</label>
                            <input
                                type="text"
                                name="title"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                placeholder="Enter item title"
                                required
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block text-gray-700 font-bold mb-2">Category</label>
                            <select
                                name="category"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                                required
                            >
                                <option value="pets">Pets</option>
                                <option value="documents">Documents</option>
                                <option value="gadgets">Gadgets</option>
                            </select>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mt-6">
                        <label className="block text-gray-700 font-bold mb-2">Description</label>
                        <textarea
                            name="description"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="Enter item description"
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    {/* Location */}
                    <div className="mt-6">
                        <label className="block text-gray-700 font-bold mb-2">Location</label>
                        <input
                            type="text"
                            name="location"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            placeholder="Enter location where item was lost"
                            required
                        />
                    </div>

                    {/* Date Lost/Found */}
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

                    {/* User Info */}
                    <div className="mt-6 flex justify-between gap-4">
                        {/* User Email */}
                        <div className="flex-1">
                            <label className="block text-gray-700 font-bold mb-2">User Email</label>
                            <input
                                type="email"
                                value={user?.email || ''}
                                readOnly
                                className="w-full px-3 py-2 border bg-gray-100 rounded-lg"
                            />
                        </div>

                        {/* User Name */}
                        <div className="flex-1">
                            <label className="block text-gray-700 font-bold mb-2">User Name</label>
                            <input
                                type="text"
                                value={user?.displayName || user?.name || ''}
                                readOnly
                                className="w-full px-3 py-2 border bg-gray-100 rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Add Button */}
                    <button
                        type="submit"
                        className="w-full bg-gray-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-600 focus:outline-none mt-6"
                    >
                        Add Item
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;
