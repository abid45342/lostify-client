









import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
    const textAnimation = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        exit: { opacity: 0, y: -50 },
    };

    return (
        <div className="carousel w-full font-poppins h-fit md:h-[500px] lg:h-[700px] lg:-mb-32 -mb-64 md:-mb-32">
        <div id="slide1" className="carousel-item relative w-full h-2/3 ">
            <img
                src="https://i.ibb.co.com/1GD8xRj/image.png"
                alt="Lost item"
                className="w-full h-full rounded-3xl "
            />
            <div className="absolute inset-0 flex justify-center items-center text-white  ">
            <div className="text-center text-black ">
                    <motion.h2
                        {...textAnimation}
                        className="text-3xl md:text-5xl "
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
                <a href="#slide4" className="btn btn-circle w-5">❮</a>
                <a href="#slide2" className="btn btn-circle w-5">❯</a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-2/3">
            <img
                src="https://i.ibb.co.com/wsSLs8b/image.png"
                alt="Community support"
                className="w-full h-full object-cover rounded-3xl"
            />
            <div className="absolute inset-0 flex justify-center items-center text-white ">
                <div className="text-center text-black">
                    <motion.h2
                        {...textAnimation}
                        className="text-3xl md:text-5xl font-bold"
                    >
                        {/* Join the Community */}
                    </motion.h2>
                    <motion.p
                        {...textAnimation}
                        className="mt-4 text-lg md:text-xl"
                        transition={{ delay: 0.2 }}
                    >
                        {/* Connect with others to recover your items. */}
                    </motion.p>
                </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle w-5">❮</a>
                <a href="#slide3" className="btn btn-circle w-5">❯</a>
            </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-2/3">
            <img
                src="https://i.ibb.co.com/qxWpHg1/image.png"
                alt="Submit lost item"
                className="w-full h-full rounded-3xl"
            />
            <div className="absolute inset-0 flex justify-center items-center text-white ">
                <div className="text-center">
                    <motion.h2
                        {...textAnimation}
                        className="text-3xl md:text-5xl font-bold"
                    >
                        {/* Submit Lost Item */}
                    </motion.h2>
                    <motion.p
                        {...textAnimation}
                        className="mt-4 text-lg md:text-xl"
                        transition={{ delay: 0.2 }}
                    >
                        {/* Help others by reporting items you found. */}
                    </motion.p>
                </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle w-5">❮</a>
                <a href="#slide4" className="btn btn-circle w-5">❯</a>
            </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full h-2/3 objext-cover ">
            <img
                src="https://i.ibb.co.com/wYqR7B3/image.png"
                alt="Success stories"
                className="h-80 w-full lg:h-full lg:w-full rounded-3xl "
            />
            <div className="absolute inset-0 flex  justify-center items-center text-white">
                <div className="text-center ">
                    <motion.h2
                        {...textAnimation}
                        className="text-3xl md:text-5xl font-poppins  text-black md:mt-40 mt-64"
                    >
                        Success Stories
                    </motion.h2>
                    <motion.p
                        {...textAnimation}
                        className="mt-4 text-lg md:text-xl"
                        transition={{ delay: 0.2 }}
                    >
                        {/* Celebrate reunions with your community. */}
                    </motion.p>
                </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle w-5">❮</a>
                <a href="#slide1" className="btn btn-circle w-5">❯</a>
            </div>
        </div>
    </div>
    
    
    );
};

export default Banner;




