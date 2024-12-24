// import React, { useEffect, useState } from 'react';


// const Latest = () => {
//     const [items, setItems] = useState([]); 
//     useEffect(()=>{
//         fetch('http://localhost:5000/items')
//         .then(res=>res.json())
//         .then(data=>setItems(data))

//     },[])
//     console.log(items)
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Latest;

















import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Latest = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    // Fetch data from the backend
    useEffect(() => {
        fetch('http://localhost:5000/allitems')
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // Sort items by dateLostFound (most recent first) and slice the first 6
    const sortedItems = [...items]
        .sort((a, b) => new Date(b.dateLostFound) - new Date(a.dateLostFound))
        .slice(0, 6);

    return (
        <div className="container mx-auto my-8 mt-32 ">
            <h2 className="text-3xl font-bold text-center mb-10 ">Latest Find & Lost Items</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedItems.map(item => (
                    <div key={item._id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg mx-8 mb-8 transition">
                        <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-full h-48 "
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <p className="text-gray-500 text-sm mt-2">{item.category}</p>
                            <p className="text-gray-500 text-sm mt-2">
                                {item.description.slice(0, 60)}...
                            </p>
                            <p className="text-gray-400 text-xs mt-2">
                                Date: {new Date(item.dateLostFound).toLocaleDateString()}
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
