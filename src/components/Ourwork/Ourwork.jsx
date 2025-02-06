import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "Screens Designed", target: 180, suffix: "+" },
  { label: "Projects Delivered", target: 60, suffix: "+" },
  { label: "Brands Transformed", target: 20, suffix: "+" },
  { label: "Happy Clients", target: 30, suffix: "+" },
];

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

const Counter = ({ target, suffix, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = Math.ceil(target / (duration / 16));

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-center"
    >
      <h2 className="text-5xl font-bold">{count}{suffix}</h2>
      <p className="text-lg text-gray-600 mt-4">{label}</p>
    </motion.div>
  );
};

const AnimatedCard = ({ name, img }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-60 h-60 bg-white rounded-sm shadow-lg overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isHovered ? 1 : 0.7, y: isHovered ? 0 : 10 }}
      transition={{ duration: 1.2, ease: [0.6, 0, 0.4, 1] }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background Image */}
      <img src={img} alt={name} className="w-full h-full p-14" />

      {/* Motion Overlay */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white text-lg font-semibold"
        initial={{ y: "100%" }}
        animate={{ y: isHovered ? "0%" : "100%" }}
        transition={{ duration: 0.6, ease: [0.6, 0, 0.4, 1] }}
      >
        {name}
      </motion.div>
    </motion.div>
  );
};

const AnimatedCards = () => {
  return (
    <div className="container mx-auto px-6 md:px-12 mt-40">
      <p className="text-start font-light mt-1 text-gray-700 text-lg tracking-widest uppercase">
        Our Work
      </p>

      <div className="text-start my-6 mt-6">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-light leading-tight">
          Clients backed by YC, <br /> NASSCOM, Sequoia, <br /> Techstars
        </h1>
      </div>

      {/* Stats Section */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <Counter key={index} {...stat} />
        ))}
      </div>

      {/* Grid Layout for Animated Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center mt-16">
        {cards.map((card, index) => (
          <AnimatedCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default AnimatedCards;
