import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nodejs from "../assets/node.png";
import expressjs from "../assets/expressjs.png";
import mongodb from "../assets/mongodb.jpeg";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },

    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: nodejs,
      title: "Node.js",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: expressjs,
      title: "Express.js",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-gray-400",
    },
    {
      id: 10,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <section
      ref={ref}
      name="experience"
      className="p-5 sm:p-20 bg-gradient-to-b from-black to-gray-800"
    >
      <div className=" mx-auto p-4 flex flex-col justify-center text-white">
        <div className="text-center">
          <motion.h2
            initial={{ y: 100, opacity: 60 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-6 text-4xl font-extrabold md:text-5xl lg:text-6xl font-montserrat __gradientText"
          >
            Experience
          </motion.h2>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
            className={`text-base font-medium text-sm md:text-xl lg:text-2xl text-accent max-w-[706px] mx-auto`}
          >
            Leveraged React.js, Next.js, TypeScript, Tailwind CSS, Node.js, and
            various other tools to build and style dynamic, robust web
            applications.
          </motion.p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8 text-center py-8  px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
