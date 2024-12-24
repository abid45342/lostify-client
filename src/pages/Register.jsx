import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Register = () => {
    const { createUser, updateUserProfile, } = useContext(AuthContext);
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
                // Update user profile with name and photoURL
                return updateUserProfile( name, photoURL );

            })
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Registration Successful',
                    text: `Welcome, ${name}!`,
                });
                navigate('/login'); // Programmatically redirect to login page after successful registration
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
        <div className="hero bg-base-200 min-h-screen">
            <Helmet>
                <title>Register</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-full max-w-sm shrink-0">
                    {/* Optionally, add a Lottie or other content here */}
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="ml-8 mt-4 text-5xl font-bold">Register now!</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text-alt link link-hover" onClick={() => navigate('/login')}>
                                    Already have an account? Log in
                                </span>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
