import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 text-center ">
            <div className=" mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">About Lostify</h3>
                        <p className="text-gray-400">
                            Lostify is a platform that helps you find lost items and reconnect with your community.
                        </p>
                    </div>

                    {/* Links Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul>
                            <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
                            <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
                            <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
                            <li><a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact</h3>
                        <p className="text-gray-400">Email: support@lostify.com</p>
                        <p className="text-gray-400">Phone: (123) 456-7890</p>
                    </div>

                    {/* Social Media Section */}
                    <div className='flex flex-col  items-center'>
                 <div>
                 <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                 </div>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" className="text-gray-400 hover:text-white">
                                <FaFacebookF size={24} />
                            </a>
                            <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://instagram.com" className="text-gray-400 hover:text-white">
                                <FaInstagram size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 border-t border-gray-700 pt-4 text-center">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Lostify. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
