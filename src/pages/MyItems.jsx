import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link, Links, useNavigate } from 'react-router-dom';
import UpdateItem from './UpdateItem';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const MyItems = () => {
    const [items, setItems] = useState([]);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {

        axios.get(`http://localhost:5000/items?email=${user.email}`,{withCredentials:true})
        .then(res=>setItems(res.data))
        
            .catch((error) => console.error('Error fetching items:', error));
    }, []);
 

    const handleDelete = (itemId) => {
        const confirmation = window.confirm('Are you sure you want to delete this item?');
        if (confirmation) {
            fetch(`http://localhost:5000/items/${itemId}`, {
                method: 'DELETE',
            })
                .then((res) => res.json())
                .then(() => {
                    setItems(items.filter((item) => item._id !== itemId)); // Remove item from state
                    alert('Item deleted successfully!');
                })
                .catch((error) => console.error('Error deleting item:', error));
        }
    };
    const handleUpdate = (item) => {
        navigate('/updateItem', { state: { item } }); // Navigate and pass item via state
    };
   

    
console.log(items)
    return (
        <div className="container mx-auto p-4">
            <Helmet>
            <title>Manage My Items</title>
            </Helmet>
            <h1 className="text-2xl font-bold mb-4">Manage My Items</h1>
            {items.length > 0 ? (
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border px-4 py-2">Item Name</th>
                            <th className="border px-4 py-2">Category</th>
                            <th className="border px-4 py-2">Location</th>
                            <th className="border px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr key={item._id} className="hover:bg-gray-100">
                                <td className="border px-4 py-2">{item.title}</td>
                                <td className="border px-4 py-2">{item.category}</td>
                                <td className="border px-4 py-2">{item.location}</td>
                                <td className="border px-4 py-2 flex space-x-2">
                        
                                    <button onClick={()=>{handleUpdate(item);}} className="bg-blue-500 text-white
                                        py-1 px-3 rounded hover:bg-blue-600">
                                            Update

                                        </button>
                                    
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-gray-500 text-center mt-8">No items found. Add your first item to see it here.</p>
            )}
        </div>
    );
};

export default MyItems;
