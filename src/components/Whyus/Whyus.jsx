import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: true, margin: "-100px" });

    return (
        <div ref={ref} className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-16">
            {/* Left Side - Image */}
            <motion.div
                className="w-full md:w-1/2 relative"
                initial={{ x: -100, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 1, ease: "easeInOut" }}
            >
                <img
                    src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Example"
                    className="w-full h-auto rounded-lg shadow-lg"
                />
            </motion.div>

            {/* Right Side - Text */}
            <motion.div
                className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left px-10 relative"
                initial={{ y: -50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            >
                {/* Heading Section */}
                <p className="text-gray-600 text-lg">Why us</p>
                <h2 className="text-black text-4xl mt-2 font-medium w-full md:w-[100%] leading-relaxed">
                    Not just another agency, we are your partner.
                </h2>

                {/* Description */}
                <p className="mt-10 text-gray-700">
                    We will work with you like your extended team and not like an outsourced agency.
                    We don't sell fluff like most agencies do. All we care about is your company's hyper-growth backed by our right positioning and marketing efforts to make your brand admirable in less than 18 months.
                </p> 

                {/* Button */}
                <button className="mt-8 px-6 py-3 bg-white cursor-pointer text-black border border-black rounded-3xl shadow-md transition duration-300 hover:bg-black hover:text-white">
                    About Us
                </button>
            </motion.div>
        </div>
    );
};

export default AnimatedSection;
