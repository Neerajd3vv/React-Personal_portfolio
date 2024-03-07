import React from "react";
import { useState ,useEffect } from "react";
import {motion} from 'framer-motion'

function HeaderFinal() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [onHover, setOnHover] = useState("default");

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
      height: 10,
      width: 10,
      backgroundColor: "yellow",
      mixBlendMode: "difference",
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      transition: { type: "tween", duration: 0.1 },
    },
  };
  const bigBubble = () => setOnHover("BigBubble");
  const smallBubble = () => setOnHover("default");
  return (
    <>
      <div className="text-white flex justify-evenly">
        <div onMouseEnter={bigBubble} onMouseLeave={smallBubble} >projects</div>
        <div>about</div>
        <div>skills</div>
        <div>contact</div>
      </div>

    
    </>
  );
}

export default HeaderFinal;
