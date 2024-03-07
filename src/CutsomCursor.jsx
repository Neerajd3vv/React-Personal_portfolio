// CustomCursor.js
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = ({ hoverAnimation }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMovement = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMovement);

    return () => {
      window.removeEventListener("mousemove", mouseMovement);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: { type: "tween", duration: 0.1 },
    },
    BigBubble: {
      height: 150,
      width: 150,
      backgroundColor: "white",
      mixBlendMode: "difference",
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      transition: { type: "tween", duration: 0.1 },
    },
    BigBubbleTwo: {
      height: 250,
      width: 250,
      backgroundColor: "yellow",

      mixBlendMode: "difference",
      x: mousePosition.x - 125,
      y: mousePosition.y - 125,
    },
    LastOne: {
      height: 80,
      width: 80,
      backgroundColor: "#fca311",

      mixBlendMode: "difference",
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
    },
    AnotherOne: {
      height: 100,
      width: 100,
      backgroundColor: "#fca311",

      mixBlendMode: "difference",
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
    },
    BigBubbleThree: {
      height: 150,
      width: 150,
      backgroundColor: "yellow",
      mixBlendMode: "difference",
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      transition: { type: "tween", duration: 0.1 },
    },
    BigBubbleFour: {
      height: 15,
      width: 15,

      x: mousePosition.x - 7.5,
      y: mousePosition.y - 7.5,
    },
  };

  return (
    <motion.div
      variants={variants}
      animate={hoverAnimation}
      className="bg-oceangreen h-8 w-8 rounded-full fixed pointer-events-none top-0 left-0"
    />
  );
};

export default CustomCursor;
