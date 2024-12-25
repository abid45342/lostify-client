import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Latest = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // State for error handling
    const navigate = useNavigate();

    // Fetch data from the backend using axios with credentials
    useEffect(() => {
        axios
            .get('http://localhost:5000/allitems', { withCredentials: true })
            .then((res) => {
                setItems(res.data || []); // Ensure `items` is an array
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setError('Failed to load items. Please try again later.');
                setLoading(false);
            });
    }, []);

    // Sort items by dateLostFound (most recent first) and slice the first 6
    const sortedItems = items
        ?.filter((item) => item.dateLostFound) // Ensure dateLostFound exists
        .sort((a, b) => new Date(b.dateLostFound) - new Date(a.dateLostFound))
        .slice(0, 6);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="loading loading-ring loading-lg">
                    <span className="loading loading-spinner text-primary"></span>
                    <span className="loading loading-spinner text-secondary"></span>
                    <span className="loading loading-spinner text-accent"></span>
                    <span className="loading loading-spinner text-neutral"></span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-red-600 text-lg">{error}</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto my-8 mt-32">
            <h2 className="text-3xl font-bold text-center mb-10">Latest Find & Lost Items</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedItems.map((item) => (
                    <div
                        key={item._id}
                        className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg mx-8 mb-8 transition"
                    >
                        <img
                            src={item.thumbnail || 'https://via.placeholder.com/150'}
                            alt={item.title || 'Item Image'}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">{item.title || 'Unknown Item'}</h3>
                            <p className="text-gray-500 text-sm mt-2">{item.category || 'Uncategorized'}</p>
                            <p className="text-gray-500 text-sm mt-2">
                                {item.description ? `${item.description.slice(0, 60)}...` : 'No description available.'}
                            </p>
                            <p className="text-gray-400 text-xs mt-2">
                                Date: {item.dateLostFound ? new Date(item.dateLostFound).toLocaleDateString() : 'Unknown'}
                            </p>
                            <button
                                onClick={() => navigate(`/itemDetails/${item._id}`)}
                                className="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-900"
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-8">
                <button
                    onClick={() => navigate('/Lostfound')}
                    className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-md hover:bg-blue-800 transition"
                >
                    See All
                </button>
            </div>
        </div>
    );
};

export default Latest;
