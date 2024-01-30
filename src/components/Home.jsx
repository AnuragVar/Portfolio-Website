import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import HeroImage from "../assets/heroImage.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="bg-gradient-to-b from-black via-black to-gray-800 p-5 sm:p-20"
    >
      <div className="mx-auto max-w-screen-lg flex flex-col md:flex-row items-center gap-5 justify-center h-full px-4">
        <div className="flex flex-col mt-20 justify-center h-full pr-8">
          {" "}
          {/* Adjusted width */}
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I love building and designing software. Currently, I love to work on
            web applications using technologies like React, Tailwind in FrontEnd
            and Mongoose,Express.js and Node.js in BackEnd.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 m-12">
          {" "}
          {/* Adjusted width */}
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl w-4/4 w-3/1" /* Adjusted image width */
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
