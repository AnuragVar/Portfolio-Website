import React from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <section
      ref={ref}
      name="contact"
      className="w-full bg-gradient-to-b from-black to-gray-800 text-white p-5 sm:p-20 pb-0  "
    >
      <div className="text-center">
        <motion.h2
          initial={{ y: 100, opacity: 60 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-6 text-4xl font-extrabold md:text-5xl lg:text-6xl font-montserrat __gradientText"
        >
          Contact
        </motion.h2>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className={` font-medium text-sm md:text-xl lg:text-2xl text-accent max-w-[706px] mx-auto`}
        >
          Submit the form below to get in touch with me
        </motion.p>
      </div>

      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/bvrejrwb"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
