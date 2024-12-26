// import React, { useContext, useState } from 'react';
// import { Helmet } from 'react-helmet';
// import { Link, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import { AuthContext } from '../provider/AuthProvider';

// const Login = () => {
//     const { singInUser, singInWithGoogle } = useContext(AuthContext);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate(); // To navigate after login

//     const handleLogin = (e) => {
//         e.preventDefault();
//         singInUser(email, password)
//             .then(() => {

//                 Swal.fire({
//                     icon: 'success',
//                     title: 'Login Successful',
//                     text: 'Welcome back!',
//                 });
  

//             })
//             .catch((error) => {
//                 Swal.fire({
//                     icon: 'error',
//                     title: 'Login Failed',
//                     text: error.message,
//                 });
//             });
//     };

//     const handleGoogleLogin = () => {
//         singInWithGoogle()
//             .then(() => {
//                 Swal.fire({
//                     icon: 'success',
//                     title: 'Login Successful',
//                     text: 'Welcome back!',
//                 });

//             })
//             .catch((error) => {
//                 Swal.fire({
//                     icon: 'error',
//                     title: 'Google Login Failed',
//                     text: error.message,
//                 });
//             });
//     };

//     return (
//         <div className="hero bg-base-200 min-h-screen">
//             <Helmet>
//                 <title>Login</title>
//             </Helmet>
//             <div className="hero-content flex-col lg:flex-row-reverse">
//                 <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//                     <h1 className="ml-8 mt-4 text-5xl font-bold">Login</h1>
//                     <form onSubmit={handleLogin} className="card-body">
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Email</span>
//                             </label>
//                             <input
//                                 type="email"
//                                 placeholder="Email"
//                                 className="input input-bordered"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Password</span>
//                             </label>
//                             <input
//                                 type="password"
//                                 placeholder="Password"
//                                 className="input input-bordered"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <div className="form-control mt-6">
//                             <button className="btn btn-primary">Login</button>
//                         </div>
//                     </form>
//                     <div className="form-control mt-6">
//                         <button className="btn btn-google" onClick={handleGoogleLogin}>
//                             Login with Google
//                         </button>
//                     </div>
//                     <div className="form-control mt-4">
//                         <Link to="/register" className="link link-hover">
//                             Don't have an account? Register
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;












import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const { singInUser, singInWithGoogle } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        singInUser(email, password)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: 'Welcome back!',
                });
                navigate('/');
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: error.message,
                });
                
            });
    };

    const handleGoogleLogin = () => {
        singInWithGoogle()
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: 'Welcome back!',
                });
                navigate('/');
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Google Login Failed',
                    text: error.message,
                });
            });
    };

    return (
        <div className="min-h-screen  flex items-center justify-center">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="card bg-white w-full max-w-md p-8 shadow-lg rounded-lg">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Welcome Back!</h1>
                <p className="text-center text-gray-600 mb-4">Login to continue</p>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="form-control">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full px-4 py-2 mt-1 rounded-md border border-gray-300 focus:ring focus:ring-indigo-200"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full px-4 py-2 mt-1 rounded-md border border-gray-300 focus:ring focus:ring-indigo-200"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-control">
                        <button className="btn w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition ease-in-out duration-150">
                            Login
                        </button>
                    </div>
                </form>
                <div className="divider my-6 text-gray-500">OR</div>
                <div className="form-control">
                    <button
                        onClick={handleGoogleLogin}
                        className="btn w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition ease-in-out duration-150 flex items-center justify-center"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
                            alt="Google"
                            className="w-5 h-5 mr-2"
                        />
                        Login with Google
                    </button>
                </div>
                <div className="text-center mt-4">
                    <Link
                        to="/register"
                        className="text-indigo-600 hover:text-indigo-800 font-medium transition duration-150"
                    >
                        Don't have an account? Register
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;

