import React, { useEffect, useRef, useState } from "react";
import { delay, motion } from "framer-motion";
import CustomCursor from "../CutsomCursor";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Add your email sending logic here
  };

  // Customcursor code

  const [onHover, setOnHover] = useState("default");

  const bigBubbleFour = () => setOnHover("BigBubbleFour");
  const smallBubble = () => setOnHover("default");
  return (
    <>
      <div className="h-screen">
        <div className="flex justify-center my-20  ">
          <motion.form
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            ref={form}
            onSubmit={sendEmail}
            className="bg-Mainblack p-8 rounded-md shadow-md max-w-md w-full"
          >
            <h2 className="text-3xl font-Bebus tracking-wider  mb-4 text-gray-200 ">
              Contact Me
            </h2>
            <div className="mb-4">
              <label htmlFor="name" className="block font-Mullish text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-Mullish text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block font-Mullish text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows="6"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <button
              onMouseEnter={bigBubbleFour}
              onMouseLeave={smallBubble}
              type="submit"
              className="w-full bg-blue-500 font-Mullish font-bold text-lg tracking-wide text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring "
            >
              Send
            </button>
          </motion.form>
        </div>
        <div className="text-gray-200  flex space-x-6 items-center justify-center">
          <motion.h2
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="font-Bebus tracking-wider text-3xl "
          >
            SOCIALS
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="line-after "
          >
            <a
              onMouseEnter={bigBubbleFour}
              onMouseLeave={smallBubble}
              className="font-Mullish text-blue-400 mx-4  hover:text-blue-500 transition duration-300 hover:border-b hover:border-white"
              href="https://twitter.com/NeerajbhattW"
            >
              Twitter
            </a>
            <a
              onMouseEnter={bigBubbleFour}
              onMouseLeave={smallBubble}
              className="font-Mullish text-blue-400 mx-4  hover:text-blue-500 transition duration-300 hover:border-b hover:border-white"
              href="https://www.linkedin.com/in/neeraj-bhatt-984b992b2/"
            >
              Linkedin
            </a>
            <a
              onMouseEnter={bigBubbleFour}
              onMouseLeave={smallBubble}
              className="font-Mullish text-blue-400 mx-4  hover:text-blue-500 transition duration-300  hover:border-b hover:border-white"
              href="https://github.com/Neerajd3vv"
            >
              Github
            </a>
          </motion.div>
        </div>
      </div>
      <CustomCursor hoverAnimation={onHover} />
    </>
  );
};

export default Contact;
