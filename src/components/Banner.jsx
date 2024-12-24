// import React from 'react';

// const Banner = () => {
//     return (
//         <div className="carousel w-full">
//             <div id="slide1" className="carousel-item relative w-full">
//                 <img
//                     src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
//                     alt="Lost item"
//                     className="w-full"
//                 />
//                 <div className="absolute inset-0 flex justify-center items-center text-white bg-black bg-opacity-50">
//                     <div className="text-center">
//                         <h2 className="text-3xl md:text-5xl font-bold">Lost Something?</h2>
//                         <p className="mt-4 text-lg md:text-xl">Find or report lost items easily on Lostify!</p>
//                     </div>
//                 </div>
//                 <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//                     <a href="#slide4" className="btn btn-circle">❮</a>
//                     <a href="#slide2" className="btn btn-circle">❯</a>
//                 </div>
//             </div>
//             <div id="slide2" className="carousel-item relative w-full">
//                 <img
//                     src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
//                     alt="Community support"
//                     className="w-full"
//                 />
//                 <div className="absolute inset-0 flex justify-center items-center text-white bg-black bg-opacity-50">
//                     <div className="text-center">
//                         <h2 className="text-3xl md:text-5xl font-bold">Join the Community</h2>
//                         <p className="mt-4 text-lg md:text-xl">Connect with others to recover your items.</p>
//                     </div>
//                 </div>
//                 <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//                     <a href="#slide1" className="btn btn-circle">❮</a>
//                     <a href="#slide3" className="btn btn-circle">❯</a>
//                 </div>
//             </div>
//             <div id="slide3" className="carousel-item relative w-full">
//                 <img
//                     src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
//                     alt="Submit lost item"
//                     className="w-full"
//                 />
//                 <div className="absolute inset-0 flex justify-center items-center text-white bg-black bg-opacity-50">
//                     <div className="text-center">
//                         <h2 className="text-3xl md:text-5xl font-bold">Submit Lost Item</h2>
//                         <p className="mt-4 text-lg md:text-xl">Help others by reporting items you found.</p>
//                     </div>
//                 </div>
//                 <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//                     <a href="#slide2" className="btn btn-circle">❮</a>
//                     <a href="#slide4" className="btn btn-circle">❯</a>
//                 </div>
//             </div>
//             <div id="slide4" className="carousel-item relative w-full">
//                 <img
//                     src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
//                     alt="Success stories"
//                     className="w-full"
//                 />
//                 <div className="absolute inset-0 flex justify-center items-center text-white bg-black bg-opacity-50">
//                     <div className="text-center">
//                         <h2 className="text-3xl md:text-5xl font-bold">Success Stories</h2>
//                         <p className="mt-4 text-lg md:text-xl">Celebrate reunions with your community.</p>
//                     </div>
//                 </div>
//                 <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//                     <a href="#slide3" className="btn btn-circle">❮</a>
//                     <a href="#slide1" className="btn btn-circle">❯</a>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Banner;









import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
    const textAnimation = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        exit: { opacity: 0, y: -50 },
    };

    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                    alt="Lost item"
                    className="w-full"
                />
                <div className="absolute inset-0 flex justify-center items-center text-white bg-black bg-opacity-50">
                    <div className="text-center">
                        <motion.h2
                            {...textAnimation}
                            className="text-3xl md:text-5xl font-bold"
                        >
                            Lost Something?
                        </motion.h2>
                        <motion.p
                            {...textAnimation}
                            className="mt-4 text-lg md:text-xl"
                            transition={{ delay: 0.2 }}
                        >
                            Find or report lost items easily on Lostify!
                        </motion.p>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                    alt="Community support"
                    className="w-full"
                />
                <div className="absolute inset-0 flex justify-center items-center text-white bg-black bg-opacity-50">
                    <div className="text-center">
                        <motion.h2
                            {...textAnimation}
                            className="text-3xl md:text-5xl font-bold"
                        >
                            Join the Community
                        </motion.h2>
                        <motion.p
                            {...textAnimation}
                            className="mt-4 text-lg md:text-xl"
                            transition={{ delay: 0.2 }}
                        >
                            Connect with others to recover your items.
                        </motion.p>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                    alt="Submit lost item"
                    className="w-full"
                />
                <div className="absolute inset-0 flex justify-center items-center text-white bg-black bg-opacity-50">
                    <div className="text-center">
                        <motion.h2
                            {...textAnimation}
                            className="text-3xl md:text-5xl font-bold"
                        >
                            Submit Lost Item
                        </motion.h2>
                        <motion.p
                            {...textAnimation}
                            className="mt-4 text-lg md:text-xl"
                            transition={{ delay: 0.2 }}
                        >
                            Help others by reporting items you found.
                        </motion.p>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                    alt="Success stories"
                    className="w-full"
                />
                <div className="absolute inset-0 flex justify-center items-center text-white bg-black bg-opacity-50">
                    <div className="text-center">
                        <motion.h2
                            {...textAnimation}
                            className="text-3xl md:text-5xl font-bold"
                        >
                            Success Stories
                        </motion.h2>
                        <motion.p
                            {...textAnimation}
                            className="mt-4 text-lg md:text-xl"
                            transition={{ delay: 0.2 }}
                        >
                            Celebrate reunions with your community.
                        </motion.p>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
