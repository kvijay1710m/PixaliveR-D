import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CursorFollower = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setCursorPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-5 h-5 bg-gray-400 rounded-full pointer-events-none mix-blend-difference"
            style={{ translateX: "-50%", translateY: "-50%" }} // Centers the ball on the cursor
            animate={{
                x: cursorPosition.x,
                y: cursorPosition.y,
            }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
            }}
        />
    );
};

export default CursorFollower;
