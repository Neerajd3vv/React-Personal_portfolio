import React from "react";
import { motion } from "framer-motion";

const SkillsCard = React.memo(
  ({ title, description, imageUrl, skillLevel }) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{
          scale: 1.05,
          transition:{duration:0.2},
          boxShadow: "0 10px 12px rgba(0, 173, 239, 0.5)",
        }}
        className="bg-gradient-to-b from-oceangreen to-dukeblue shadow-lg rounded-lg overflow-hidden w-80 my-10"
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-full h-40 object-cover object-center"
          src={imageUrl}
          alt={title}
        />
        <div className="p-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl text-gray-100 font-bold font-Hind mb-2"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-gray-200 font-Afacad text-lg"
          >
            {description}
          </motion.p>
          <div className="flex items-center mt-4">
            <span className="text-sm text-gray-100">Skill Level:</span>
            <div className="ml-2">
              {Array.from({ length: skillLevel }).map((_, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="text-yellow-500"
                >
                  ★
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
);

export default SkillsCard;
