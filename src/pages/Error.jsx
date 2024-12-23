import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-6">Sorry, the page you are looking for does not exist.</p>
      <Link 
        to="/" 
        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
      >
        Go back to the homepage
      </Link>
    </div>
  );
};

export default Error;
