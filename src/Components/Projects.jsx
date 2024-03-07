import React, { useState, useEffect } from "react";
// import yt from "../Images/yt.jpg";
// import gmail from '../Images/gmail.jpg'
import { motion } from "framer-motion";
import CustomCursor from "../CutsomCursor";

function Projects() {
 

  const [onHover, setOnHover] = useState("default");



  // const bigBubble = () => setOnTextHover("BigBubble");
  const smallBubble = () => setOnHover("default");

  return (
    <div className="h-screen">
     
      <h1 className="text-gray-300  flex justify-center my-64 font-Fjalla tracking-wider text-6xl ">
        PROJECTS WILL BE UPLOADED SOON...
      </h1>
      <CustomCursor hoverAnimation={onHover}/>
    </div>
  );
}

export default Projects;

// <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols- lg:grid-cols-3 gap-8 mt-32 ml-6 h-screen">
//   <div className="bg-gray-100 rounded-md overflow-hidden shadow-md max-w-md w-full    ">
//     <div className="relative overflow-hidden">
//       <a href="#" target="_blank" rel="noopener noreferrer">
//         <img
//           src={yt}
//           alt="YouTube Clone"
//           className="w-full h-48 object-cover"
//         />
//       </a>

//     </div>
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-2"> Clone Info</h2>
//       <p className="text-gray-700 mb-4">
//         Brief description about the YouTube clone project goes here.
//       </p>
//       <div className="flex justify-between">
//         <a
//           href="#"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-blue-500 font-Mullish font-bold text-lg tracking-wide text-white py-2 px-5 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring transition-all duration-300"
//         >
//           Live link
//         </a>
//         <a
//           href="#"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-blue-500 font-Mullish font-bold text-lg tracking-wide text-white py-2 px-5 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring transition-all duration-300"
//         >
//           Code
//         </a>
//       </div>
//     </div>
//   </div>
//   <div className="bg-gray-100 rounded-md overflow-hidden shadow-md max-w-md w-ful ">
//     <div className="relative overflow-hidden">
//       <a href="#" target="_blank" rel="noopener noreferrer">
//         <img
//           src={gmail}
//           alt="YouTube Clone"
//           className="w-full h-48 object-cover"
//         />
//       </a>

//     </div>
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-2">Gmail Clone Info</h2>
//       <p className="text-gray-700 mb-4">
//         Brief description about the Gmail clone project goes here.
//       </p>
//       <div className="flex justify-between">
//         <a
//           href="#"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-blue-500 font-Mullish font-bold text-lg tracking-wide text-white py-2 px-5 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring transition-all duration-300"
//         >
//           Live link
//         </a>
//         <a
//           href="#"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-blue-500 font-Mullish font-bold text-lg tracking-wide text-white py-2 px-5 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring transition-all duration-300"
//         >
//           Code
//         </a>
//       </div>
//     </div>
//   </div>
//   <div className="bg-gray-100 rounded-md overflow-hidden shadow-md max-w-md w-full  ">
//     <div className="relative overflow-hidden">
//       <a href="#" target="_blank" rel="noopener noreferrer">
//         <img
//           src={yt}
//           alt="YouTube Clone"
//           className="w-full h-48 object-cover"
//         />
//       </a>

//     </div>
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-2">YouTube Clone Info</h2>
//       <p className="text-gray-700 mb-4">
//         Brief description about the YouTube clone project goes here.
//       </p>
//       <div className="flex justify-between">
//         <a
//           href="#"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-blue-500 font-Mullish font-bold text-lg tracking-wide text-white py-2 px-5 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring transition-all duration-300"
//         >
//           Live link
//         </a>
//         <a
//           href="#"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-blue-500 font-Mullish font-bold text-lg tracking-wide text-white py-2 px-5 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring transition-all duration-300"
//         >
//           Code
//         </a>
//       </div>
//     </div>
//   </div>
// </div>
