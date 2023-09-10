import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="mx-auto flex flex-col justify-center w-full p-7">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-5 opacity-90">
          Hello, I'm Anurag Varshney, a computer science enthusiast currently
          pursuing B.Tech. in Electronics and Communication Engineering at NIT
          Jalandhar ('25). My journey in tech has been an exciting one, with a
          focus on web development using HTML, CSS, JavaScript, and React, where
          I've successfully executed various projects.
        </p>

        <br />

        <p className="text-xl opacity-90">
          I'm an active problem solver. My LeetCode rating stands at 1664 with
          300+ Questions, and I've tackled challenges on CodeChef with a rating
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
    </div>
  );
};

export default About;
