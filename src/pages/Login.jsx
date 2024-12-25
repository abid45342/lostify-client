import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const { singInUser, singInWithGoogle } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // To navigate after login

    const handleLogin = (e) => {
        e.preventDefault();
        singInUser(email, password)
            .then(() => {

                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: 'Welcome back!',
                });
                // const user = {email:email}
                // axios.post('http://localhost:5000/jwt',user,{withCredentials:true})
                // .then(res=>{
                //     console.log(res.data);
                // })

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
        <div className="hero bg-base-200 min-h-screen">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="ml-8 mt-4 text-5xl font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="form-control mt-6">
                        <button className="btn btn-google" onClick={handleGoogleLogin}>
                            Login with Google
                        </button>
                    </div>
                    <div className="form-control mt-4">
                        <Link to="/register" className="link link-hover">
                            Don't have an account? Register
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
