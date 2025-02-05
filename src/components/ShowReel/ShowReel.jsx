import React from "react";
import { motion } from "framer-motion";

const cards = [
    {
        title: "Wendor",
        subtitle: "Digital Marketing & Branding",
        img: "https://images.pexels.com/photos/6483583/pexels-photo-6483583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        title: "Web Design",
        subtitle: "Arrow AI",
        img: "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        title: "Global Edugate",
        subtitle: "Branding & Development",
        img: "https://images.pexels.com/photos/5292195/pexels-photo-5292195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

    {
        title: "Social media & Branding",
        subtitle: "Branding & Development",
        img: "https://images.pexels.com/photos/15378960/pexels-photo-15378960/free-photo-of-close-up-of-a-man-holding-an-iphone-displaying-the-home-screen.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        title: "Social Media & Development",
        subtitle: "GotoChef",
        img: "https://images.pexels.com/photos/9028910/pexels-photo-9028910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        title: "Web Design",
        subtitle: "Easy to pitch",
        img: "https://images.pexels.com/photos/30530413/pexels-photo-30530413/free-photo-of-interactive-ai-interface-displayed-on-laptop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

];

const Card = ({ title, subtitle, img, index }) => {
    return (
        <motion.div
            className="relative bg-white p-4 rounded-lg shadow-lg cursor-pointer transition-all duration-600"
            initial={{ y: index === 1 ? 20 : 0 }} // Middle card slightly lower
            whileHover={{ scale: 0.90 }} // Shrinks slightly on hover
        >
            {/* Image with Hover Effect */}
            <motion.img
                src={img}
                alt={title}
                className="w-full h-96 object-cover rounded-lg"
                whileHover={{ scale: 1.1 }} // Zoom-out effect on image
                transition={{ duration: 0.4 }}
            />

            {/* Text Content */}
            <div className="mt-8 text-center">
                <p className="text-gray-500 mt-5 text-sm">{subtitle}</p>
                <h2 className="text-xl mt=4 font-semibold">{title}</h2>
            </div>
        </motion.div>
    );
};

const CardSection = () => {
    return (
        <div className="container mx-auto px-6 md:px-12 mt-20">

            {/* ✅ Description Text Above Cards */}
            <div className="text-start mb-10">
                <p className="text-start font-light mt-1 text-gray-700 text-lg tracking-widest uppercase">
                    Showreel
                </p>

                <div className="text-start my-6 mt-6">
                    <h1 className="text-4xl md:text-6xl lg:text-4xl font-bold leading-tight">
                        A glimpse of our distinctive work <br /> for different industries & domains
                    </h1>
                </div>
            </div>

            {/* ✅ Cards Grid (3 cards per row) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cards.map((card, index) => (
                    <Card key={index} {...card} index={index} />
                ))}
            </div>
        </div>
    );
};

export default CardSection;
