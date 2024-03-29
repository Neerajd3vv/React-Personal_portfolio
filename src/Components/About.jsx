import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CustomCursor from "../CutsomCursor";

function About() {
  

  const [onHover, setOnHover] = useState("default");



  const bigBubble = () => setOnHover("BigBubble");
  const smallBubble = () => setOnHover("default");
  const biggerBubble = () => setOnHover("BiggerBubble");
  return (
    <>
      
      <div className=" pt-14  lg:pt-32 text-white ">
        <div className=" text-5xl flex justify-center text-gray-300 font-Protest tracking-wider ">
          <h1 className="" onMouseEnter={bigBubble} onMouseLeave={smallBubble}>
            ABOUT ME
          </h1>
        </div>
        <div className="flex justify-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex justify-center"
          >
            <p
              onMouseEnter={biggerBubble}
              onMouseLeave={smallBubble}
              className="pt-5 mb-96 text-hehe font-Afacad flex justify-center text-2xl tracking-wide mx-10 sm:mx-20 md:mx-22 lg:mx- my-2 leading-relaxed"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              ipsa, explicabo odio porro vero earum ipsam iste totam nobis saepe
              quae aspernatur. Delectus animi ipsum illo repellendus accusantium
              voluptatibus molestiae. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Odit reiciendis tenetur sit doloremque, maiores
              accusamus labore cupiditate eligendi atque nostrum molestias minus
              incidunt eveniet veniam deserunt odio tempora aut mollitia?
              Laborum impedit deserunt quibusdam earum quis distinctio eligendi
              modi inventore, totam molestias aliquam labore dolorem quaerat hic
              ipsa cumque natus est nam soluta officia maxime facere veritatis
              vel. Repudiandae, fugiat. Similique enim dolore eveniet, maxime
              nulla quae harum sapiente accusantium aut sunt nisi laudantium
              molestiae adipisci distinctio expedita ad vel est inventore
              tempore deserunt? Voluptas dicta rerum id autem a. Nesciunt, quam
              exercitationem. Vel molestias sit, eius dolores laborum commodi
              harum at quasi cupiditate. Non, expedita voluptatum mollitia quia
              magnam cumque aliquid ipsa qui possimus corrupti consequatur
              officia sequi temporibus. Facere ab expedita, consectetur quasi
              inventore repudiandae itaque harum ratione repellendus tenetur
              soluta. Cum ea blanditiis ipsum tempora atque sapiente quod, in
              voluptate ex dolore. Minima est doloremque dicta suscipit?
            </p>
          </motion.div>
        </div>
      </div>
      <CustomCursor hoverAnimation={onHover}/>
    </>
  );
}

export default About;
