import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CustomCursor from "../CutsomCursor";

function Home() {
  const [onHover, setOnHover] = useState("default");

  const bigBubbleTwo = () => setOnHover("BigBubbleTwo");
  const smallBubble = () => setOnHover("default");
  const anotherOne = () => setOnHover("AnotherOne");
  const lastOne = () => setOnHover("LastOne");

  return (
    <>
      <div className="text-white  pt-52 h-screen  ">
        <div className="  py-4  text-center pb-5  font-proteststrike tracking-wider   text-4xl ">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
            className="bg-gradient-to-b from-blue-300 to-purple-300 text-transparent bg-clip-text"
            onMouseEnter={anotherOne}
            onMouseLeave={smallBubble}
          >
            Hello, I'm
          </motion.span>
        </div>
        <div className="font-proteststrike font-bold  text-9xl text-center tracking-widest ">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.3,
              duration: 1,
            }}
            className="bg-gradient-to-b from-oceangreen via-purple-300 to-Myblue   text-transparent bg-clip-text"
            onMouseEnter={bigBubbleTwo}
            onMouseLeave={smallBubble}
          >
            NEERAJ BHATT
          </motion.span>
        </div>
        <div className="text-center font-bold  py-4 text-xl font-Hind tracking-wider">
          <motion.span
            className="bg-gradient-to-b from-gray-100 to-gray-100 text-transparent bg-clip-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
            onMouseEnter={lastOne}
            onMouseLeave={smallBubble}
          >
            A self taught web developer from India. look around and find out
            more about me.
          </motion.span>
        </div>
      </div>
      <CustomCursor hoverAnimation={onHover} />
    </>
  );
}

export default Home;
