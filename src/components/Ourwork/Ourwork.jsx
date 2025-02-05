import React, { useState } from "react";
import { motion } from "framer-motion";

const cards = [
  { name: "Slack", img: "https://tech2edge.co/assets/images/clients/dark/biltrax-xs.png" },
  { name: "Python AI", img: "https://tech2edge.co/assets/images/clients/dark/arrowai-xs.png" },
  { name: "goto Chef", img: "https://tech2edge.co/assets/images/clients/dark/gotochef-xs.png" },
  { name: "Easy to Pitch", img: "https://tech2edge.co/assets/images/clients/dark/easytopitch-xs.png" },
  { name: "wendor", img: "https://tech2edge.co/assets/images/clients/dark/wendor-xs.png" },
  { name: "Peterson Technology Partners", img: "https://tech2edge.co/assets/images/clients/dark/peterson-xs.png" },
  { name: "EduGate", img: "https://tech2edge.co/assets/images/clients/dark/edugate-xs.png" },
  { name: "tug", img: "https://tech2edge.co/assets/images/clients/dark/tug-xs.png" },
];

const AnimatedCard = ({ name, img }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-60 h-60 bg-white rounded-sm shadow-lg overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileInView={{ opacity: 1, y: 0 }} // Animate the card when it comes into view
      initial={{ opacity: 0, y: 100 }} // Start as invisible and slightly below
      animate={{ opacity: isHovered ? 1 : 0.7, y: isHovered ? 0 : 10 }} // Hover effect (for text reveal)
      transition={{ duration: 1.2, ease: [0.6, 0, 0.4, 1] }} // Custom easing
      viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the card is in view
    >
      {/* Background Image */}
      <img src={img} alt={name} className="w-full h-full p-14" />

      {/* Motion Overlay */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white text-lg font-semibold"
        initial={{ y: "100%" }} // Initially hidden below the card
        animate={{ y: isHovered ? "0%" : "100%" }} // Moves up when hovered
        transition={{ duration: 0.6, ease: [0.6, 0, 0.4, 1] }} // Custom cubic-bezier ease
      >
        {name}
      </motion.div>
    </motion.div>
  );
};

const AnimatedCards = () => {
  return (
    <div className="container mx-auto px-6 md:px-12 mt-20">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center">
        {cards.map((card, index) => (
          <AnimatedCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default AnimatedCards;
