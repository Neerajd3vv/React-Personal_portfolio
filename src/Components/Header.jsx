// Header.jsx
import React, { useEffect, useState } from "react";
import HomeLogo from "../Images/Eternal.svg.png";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import CustomCursor from "../CutsomCursor";

function Header() {
  const [isSidePanelOpen, setSidePanelOpen] = useState(false);

  const ToggleSideButton = () => {
    setSidePanelOpen(!isSidePanelOpen);
  };


  
  // customCursor things

  const [onHover, setOnHover] = useState("default");

  const bigBubble = () => setOnHover("BigBubble");
  const smallBubble = () => setOnHover("default");

  return (
    <>
      <header>
        <div className="flex justify-between items-center g-slate-400 px-10 h-28">
          <div className="w-12 mx-4 ">
            <Link onMouseEnter={bigBubble} onMouseLeave={smallBubble} to="/">
              <img className="hover:animate-spin" src={HomeLogo} alt="Home" />
            </Link>
          </div>

          {/* Hamburger Icon for Small Screens */}

          <div className="md:hidden text-white">
            <button onClick={ToggleSideButton}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* navlinks for big screens */}

          <nav className="hidden md:flex items-center text-white font-Afacad text-xl px-5  tracking-widest">
            <div className="pr-4 md:pr-10  hover:scale-125 duration-300">
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "  border-b border-white text-red-500"
                      : "text-white"
                  }`
                }
                to="/projects"
              >
                Projects
              </NavLink>
            </div>
            <div className="pr-4 md:pr-10  hover:scale-125 duration-300">
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? " border-b border-white text-red-500"
                      : "text-white"
                  }`
                }
                to="/about"
              >
                About
              </NavLink>
            </div>
            <div className="pr-4 md:pr-10  hover:scale-125 duration-300">
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? " border-b border-white text-red-500"
                      : "text-white"
                  }`
                }
                to="/skills"
              >
                Skills
              </NavLink>
            </div>
            <div className="pr-4 md:pr-10  hover:scale-125 duration-300">
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? " border-b border-white text-red-500"
                      : "text-white"
                  }`
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </div>
          </nav>

          {isSidePanelOpen && (
            <div className="md:hidden fixed inset-0 bg-gradient-to-b background-attachment-fixed  from-gray-900 via-gray-900 to-black h-full bg-opacity-4 z-50">
              <div className="flex justify-end p-8">
                <button onClick={ToggleSideButton} className="text-white">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              {/* Side Panel Navigation Links */}
              <div className=" items-center text-white font-Bebus tracking-wider text-3xl py-32">
                <div className="my-3 flex justify-center hover:bg-slate-200 hover:text-black hover:scale-125 duration-200 ">
                  <Link onClick={ToggleSideButton} to="/">
                    Home
                  </Link>
                </div>
                <div className="my-3 flex justify-center hover:bg-slate-200 hover:text-black hover:scale-125 duration-200 ">
                  <Link onClick={ToggleSideButton} to="/projects">
                    Projects
                  </Link>
                </div>
                <div className="my-3 flex justify-center  hover:bg-slate-200 hover:text-black hover:scale-125 duration-200 ">
                  <Link onClick={ToggleSideButton} to="/about">
                    About
                  </Link>
                </div>
                <div className="my-3 flex justify-center  hover:bg-slate-200 hover:text-black hover:scale-125 duration-200">
                  <Link onClick={ToggleSideButton} to="/skills">
                    Skills
                  </Link>
                </div>
                <div className="my-3 flex justify-center  hover:bg-slate-200 hover:text-black hover:scale-125 duration-200">
                  <Link onClick={ToggleSideButton} to="/contact">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
      {/* <CustomCursor hoverAnimation={onHover}/> */}
    </>
  );
}

export default Header;
