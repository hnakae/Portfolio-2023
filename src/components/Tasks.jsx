import React from "react";
import AnimatedText from "./AnimatedText";

const Tasks = () => {
  return (
    <div className="h-full bg-brandGray px-40">
      <div className="flex justify-center">
        <AnimatedText
          text="Things to do"
          className=" md:text-4xl lg:text-5xl text-center mt-10 mb-20 font-semibold md:leading-normal lg:leading-normal lg:px-44"
        />
      </div>
      <div className="flex justify-center items-center pt-12">
        <div className="w-[300px] h-[300px] rounded-[10px] bg-brandBlue2 mx-6">
          <div className="flex justify-center items-center p-4">
            break up index/home page into section components -done :D
          </div>
        </div>
        <div className="w-[300px] h-[300px] rounded-[10px] bg-white mx-6">
          <div className="flex justify-center items-center p-4">
            Mobile-first Tailwind by sections
            <ul>
              <li>Hero</li>
              <li>Projects</li>
              <li>Skills</li>
              <li>About</li>
              <li>Section</li>
              <li>Contact</li>
              <li>Footer</li>
            </ul>
          </div>
        </div>
        <div className="w-[300px] h-[300px] rounded-[10px] bg-brandPurple mx-6">
          <div className="flex justify-center items-center p-4">
            useAnimate with Framer Motion
            <ul>
              <li>Hero</li>
              <li>Projects</li>
              <li>Skills</li>
              <li>About</li>
              <li>Section</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
