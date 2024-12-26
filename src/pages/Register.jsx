import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Register = () => {
    const { createUser, updateUserProfile,setUser } = useContext(AuthContext);
    const navigate = useNavigate(); // Use useNavigate for programmatic navigation

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const photoURL = form.photoURL.value.trim();
        const password = form.password.value;

        // Password validation: Must have an uppercase letter, a lowercase letter, and at least 6 characters
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Password',
                text: 'Password must have at least 6 characters, one uppercase letter, and one lowercase letter.',
            });
            return;
        }

        // Create user with email and password
        createUser(email, password)
            .then((result) => {
             console.log(result)
                return updateUserProfile( name, photoURL );

            })
            .then(() => {
                // const userData = {
                //     name,
                //     email,
                //     photoURL
                //   };
                //   setUser(userData);
              
                Swal.fire({
                    icon: 'success',
                    title: 'Registration Successful',
                    text: `Welcome, ${name}!`,
                });
                navigate('/'); // Programmatically redirect to login page after successful registration
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Registration Failed',
                    text: error.message,
                });
            });
    };

    return (
        <div className="min-h-screen  flex items-center justify-center my-10 w-full">
            <Helmet>
                <title>Register</title>
            </Helmet>
            <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-xl">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Create Your Account</h2>
                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label className="block text-lg font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-medium text-gray-700">Photo URL</label>
                        <input
                            type="text"
                            name="photoURL"
                            placeholder="Enter your photo URL"
                            className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-lg font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                        <div className="mt-2 text-sm">
                            <span
                                className="text-blue-600 cursor-pointer"
                                onClick={() => navigate('/login')}
                            >
                                Already have an account? Log in
                            </span>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-indigo-600 text-white text-lg font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
