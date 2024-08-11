import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <section
      ref={ref}
      name="about"
      className="w-full p-5 sm:p-20 bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="mx-auto flex flex-col justify-center w-full p-7">
        <div className="text-center">
          <motion.h2
            initial={{ y: 100, opacity: 60 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-6 text-4xl font-extrabold md:text-5xl lg:text-6xl font-montserrat __gradientText"
          >
            About
          </motion.h2>
        </div>
        <p className=" text-sm md:text-xl lg:text-2xl mt-5 opacity-90">
          Hello, I'm Anurag Varshney, a computer science enthusiast currently
          pursuing B.Tech. in Electronics and Communication Engineering at NIT
          Jalandhar ('25). My journey in tech has been an exciting one, with a
          focus on web development using HTML, CSS, JavaScript, and React, where
          I've successfully executed various projects.
        </p>

        <br />

        <p className="md:text-xl lg:text-2xl opacity-90">
          I'm an active problem solver. My LeetCode rating stands at 1841 with
          600+ Questions, and I've tackled challenges on CodeChef with a rating
          of 1436. My proficiency extends beyond web development to encompass
          C++, Linux, and Git. Beyond academics and coding, I proudly serve as a
          student coordinator in Zeal Society,a vibrant community committed to
          nurturing essential life skills such as public speaking, fostering
          confidence, and nurturing leadership qualities. Outside of my tech and
          leadership roles, I maintain a balanced lifestyle through calisthenics
          and find solace in the world of music, as singing is one of my
          cherished hobbies.
        </p>
      </div>
    </section>
  );
};

export default About;
