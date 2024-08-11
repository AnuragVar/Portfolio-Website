"use client";

import { useEffect, useState } from "react";
import { assets } from "../assets/assets.js";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { IoMdOpen } from "react-icons/io";
import { BsInfoCircle } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import websiteImage from "./../assets/pizzamania.png";
import radheyestate from "./../assets/Radhey-Estate.png";
import speaksecrets from "./../assets/speaksecrets.png";
import MovieHub from "./../assets/Usepopcorn.png";
import xceed from "./../assets/xceed.png";
import nitj from "./../assets/nitj.png";

const tabs = [
  {
    name: "Project",
    image: assets.home.myLatestProject.suitcase,
    data: [
      {
        slug: "Speak-Secrets",
        title: "Speak-Secrets",
        image: speaksecrets,
        repositoryUrl: "https://github.com/AnuragVar/Anonymous-Message-Box",
        demoUrl: "https://speaksecrets.vercel.app/",
      },
      {
        slug: "Radhey-RealEstate",
        title: "Radhey-RealEstate",
        image: radheyestate,
        repositoryUrl: "https://github.com/AnuragVar/Radhey-Real-Estate",
        demoUrl: "https://radhey-real-estate.onrender.com/",
      },
      {
        slug: "Pizza-Mania",
        title: "Pizza-Mania",
        image: websiteImage,
        repositoryUrl: "https://github.com/AnuragVar/Pizza-Mania",
        demoUrl: "https://the-pizza-mania.netlify.app/",
      },
      {
        slug: "MovieHub",
        title: "MovieHub",
        image: MovieHub,
        repositoryUrl: "https://github.com/AnuragVar/MovieHub",
        demoUrl: "https://movie-hub-vert-seven.vercel.app/",
      },
      {
        slug: "AMS-with-TimeTable",
        title: "AMS-with-TimeTable",
        image: xceed,
        repositoryUrl: "https://github.com/AnuragVar/AMS-with-TimeTable",
        demoUrl: "https://nitjtt.netlify.app/",
      },
      {
        slug: "nitj-website",
        title: "nitj-website",
        image: nitj,
        repositoryUrl: "https://github.com/AnuragVar/nitj-website-deploy",
        demoUrl: "https://nitj.ac.in/today/",
      },
      // other project objects
    ],
  },
  // {
  //   name: "Design",
  //   image: assets.home.myLatestProject.figma,
  //   data: [],
  // },
];

tabs.push({
  name: "More",
  image: assets.home.myLatestProject.rocket,
  data: [],
});

export default function Projects() {
  const [activeTab, setActiveTab] = useState(0);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const navigate = useNavigate(); // useNavigate is the equivalent of useRouter in React Router

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get("tab");
    if (tab && parseInt(tab) < tabs.length - 1) {
      setActiveTab(parseInt(tab));
    }
  }, []);

  return (
    <section
      ref={ref}
      className={`safe-x-padding w-full bg-gradient-to-b from-gray-800 to-black  text-white p-5 sm:p-20 pb-0`}
      aria-label="My Latest Project Section"
    >
      <div className="text-center">
        <motion.h2
          initial={{ y: 100, opacity: 60 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-6 text-4xl font-extrabold md:text-5xl lg:text-6xl font-montserrat __gradientText"
        >
          My Latest Project
        </motion.h2>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className={` font-medium text-sm md:text-xl lg:text-2xl text-accent max-w-[706px] mx-auto`}
        >
          Take a look at something I&apos;ve worked on, such as a case study,
          real project, and more
        </motion.p>
      </div>
      <div className="mt-[50px] h-full">
        <div className="flex flex-col items-center justify-center md:items-start md:flex-row gap-9">
          <div className="flex flex-row md:flex-col bg-gray rounded-2xl md:rounded-[25px] gap-x-3 md:gap-x-0 gap-y-[26px]">
            {tabs.map((tab, index) => (
              <motion.button
                key={index.toString()}
                className={`relative ${
                  activeTab === index
                    ? "gradient-bg from-stone-150"
                    : "bg-white"
                } w-[75px] h-[75px] md:w-[150px] md:h-[150px] rounded-2xl md:rounded-[25px] flex justify-center items-center shadow-xl overflow-hidden`}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                onClick={() => {
                  if (index === tabs.length - 1) {
                    navigate("/project"); // use navigate to go to a new route
                    return;
                  }
                  setActiveTab(index);
                  window.history.pushState({}, "", `?tab=${index}`);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={tab.image}
                  alt=""
                  width={100}
                  height={100}
                  style={{ height: "auto" }}
                />
                <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full transition-opacity duration-300 opacity-0 bg-gray/10 backdrop-blur-sm rounded-2xl md:rounded-[25px] hover:opacity-100 md:text-2xl">
                  <p
                    className={`${
                      activeTab === index ? "text-white" : "text-accent"
                    } font-bold transition-colors duration-75 ease-in-out`}
                  >
                    {tab.name}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
          <div className="overflow-hidden">
            <div className="bg-gray rounded-[36px] p-[26px] w-full h-[600px] overflow-y-auto text-black">
              <div className="grid grid-flow-row grid-cols-12 gap-[26px]">
                {tabs.map((tab, tabIndex) =>
                  tab.data.map(
                    (item, dataIndex) =>
                      activeTab === tabIndex && (
                        <motion.div
                          key={dataIndex.toString()}
                          className="relative col-span-12 overflow-hidden group xl:col-span-6"
                          initial={{ opacity: 0, x: -50 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div className="col-span-6">
                            <motion.div
                              className="bg-white p-[26px] rounded-2xl md:rounded-[25px] h-[261px] overflow-hidden"
                              initial={{ opacity: 0, x: -50 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{
                                duration: 0.5,
                                delay: 0.2 + dataIndex * 0.1,
                              }}
                            >
                              <img
                                className="object-cover w-full h-auto"
                                src={item.image}
                                alt=""
                                width={441}
                                height={261}
                                priority="true"
                              />
                            </motion.div>
                          </div>
                          <div className="absolute top-0 bottom-0 left-0 right-0 hidden transition-all duration-300 gap-y-2 group-hover:block bg-gray/10 backdrop-blur-sm rounded-2xl">
                            <div className="flex flex-col items-center justify-center w-full h-full select-none lg:select-auto">
                              <p className="p-8 text-xl font-bold text-center transition-all duration-150 ease-in-out line-clamp-1">
                                {item.title}
                              </p>
                              <div className="flex flex-row gap-4 text-3xl">
                                {item.repositoryUrl && (
                                  <a
                                    className="p-4 transition-all duration-150 ease-in-out bg-gray rounded-2xl hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary"
                                    href={item.repositoryUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Repository"
                                  >
                                    {tabs[activeTab].name.toLowerCase() ===
                                    "project" ? (
                                      <BsGithub />
                                    ) : (
                                      <FiFigma />
                                    )}
                                  </a>
                                )}
                                {item.demoUrl && (
                                  <a
                                    className="p-4 transition-all duration-300 ease-in-out bg-gray rounded-2xl hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary"
                                    href={item.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Demo"
                                  >
                                    <IoMdOpen />
                                  </a>
                                )}
                                {/* <Link
                                  className="p-4 transition-all duration-300 ease-in-out bg-gray rounded-2xl hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary"
                                  to={`/project/${item.slug}`}
                                  title="Details"
                                >
                                  <BsInfoCircle />
                                </Link> */}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
