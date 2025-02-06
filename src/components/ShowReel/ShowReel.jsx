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

const CardSection = () => {
    return (
        <div className="container mx-auto px-6 md:px-12 mt-20 mb-12">
            <div className="text-start mb-10">
                <p className="text-start font-light mt-1 text-gray-700 text-lg tracking-widest uppercase">
                    Show reel
                </p>

                <div className="text-start my-6 mt-6">
                    <h1 className="text-4xl md:text-6xl lg:text-4xl font-bold leading-tight">
                        A glimpse of our distinctive work <br /> for different industries & domains
                    </h1>
                </div>
            </div>

            {/* Image Grid (3 images per row) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-8">
                {cards.map((card, index) => {
                    const isMiddleCard = index % 3 === 1; // Middle card adjustment
                    
                    return (
                        <motion.div
                            key={index}
                            className="flex flex-col items-start cursor-pointer"
                            initial={{ y: isMiddleCard ? 40 : 0 }} // Middle card is lower
                        >
                            {/* Image with Hover Effect */}
                            <motion.img
                                src={card.img}
                                alt={card.title}
                                className="w-full h-fit object-cover px-8"
                                initial={{ scale: 1 }} // Default size
                                whileHover={{ scale: 0.9 }} // Shrinks on hover
                                transition={{ duration: 0.4, ease: "easeOut" }} // Smooth transition
                            />

                            {/* Title & Subtitle */}
                            <div className="mt-4 text-start">
                                <p className="text-slate-700 text-md">{card.subtitle}</p>
                                <h2 className="text-xl font-semibold">{card.title}</h2>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default CardSection;
