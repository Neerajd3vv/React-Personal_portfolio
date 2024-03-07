import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SkillsCard from "./skillcard/SkillsCard";

import html from "../Images/html.png";
import css from "../Images/finalcss.png";
import js from "../Images/finaljs.png";
import react from "../Images/reactnew.png";
import tailwind from "../Images/tailwind.png";
import nodejs from "../Images/nodejs.jpg";
import expressjs from "../Images/expressjs.png";
import mongodb from "../Images/mongodb.jpg";
import postgress from "../Images/postgress.jpg";
import CustomCursor from "../CutsomCursor";

function Skills() {
  const [onHover, setOnHover] = useState("default");

  const bigBubbleThree = () => setOnHover("BigBubbleThree");
  const smallBubble = () => setOnHover("default");

  return (
    <>
      <div className="h-screen my-28">
        <motion.div
          initial={{ opacity: 0, y:-100 }}
          animate={{ opacity: 1,y:0 }}
          transition={{  delay: 0.1 }}
          className=" flex justify-center text-white mb-4 font-proteststrike text-6xl tracking-wide"
        >
          <h1
            onMouseEnter={bigBubbleThree}
            onMouseLeave={smallBubble}
            className="text-gray-300"
          >
            FRONTEND
          </h1>
        </motion.div>
        <div className="  flex justify-around flex-wrap  ">
          <SkillsCard
            title="Html"
            description=" HTML is the standard markup language for Web pages."
            imageUrl={html}
            skillLevel={4}
          />
          <SkillsCard
            title="CSS"
            description="CSS is the language we use to style an HTML document."
            imageUrl={css}
            skillLevel={3}
          />
          <SkillsCard
            title="Tailwind CSS"
            description="Tailwind CSS is an open source CSS framework."
            imageUrl={tailwind}
            skillLevel={5}
          />
          <SkillsCard
            title="Javascript"
            description="javascript as a main language to add functionality to websites."
            imageUrl={js}
            skillLevel={5}
          />
          <SkillsCard
            title="React js"
            description="React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript
        ."
            imageUrl={react}
            skillLevel={5}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y:-100 }}
          animate={{ opacity: 1,y:0 }}
          transition={{  delay: 0.1 }}
          className=" flex justify-center text-white mb-4 font-proteststrike text-6xl tracking-wide my-20"
        >
          <h1
            onMouseEnter={bigBubbleThree}
            onMouseLeave={smallBubble}
            className="text-gray-300"
          >
            BACKEND
          </h1>
        </motion.div>
        <div className="flex justify-around flex-wrap">
          <SkillsCard
            title="Nodejs"
            description="Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine."
            imageUrl={nodejs}
            skillLevel={4}
          />
          <SkillsCard
            title="ExpressJs"
            description="Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. APIs."
            imageUrl={expressjs}
            skillLevel={4}
          />

          <SkillsCard
            title="Mongodb"
            description="MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database."
            imageUrl={mongodb}
            skillLevel={4}
          />
          <SkillsCard
            title="PostgreSQL"
            description="PostgreSql is most popular open source Sql database"
            imageUrl={postgress}
            skillLevel={3}
          />
        </div>
      </div>
      <CustomCursor hoverAnimation={onHover} />
    </>
  );
}

export default Skills;
