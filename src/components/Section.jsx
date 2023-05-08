import React from "react";
import AnimatedText from "./AnimatedText";

const Section = () => {
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
            break up index/home page into section components
          </div>
        </div>
        <div className="w-[300px] h-[300px] rounded-[10px] bg-white mx-6">
          <div className="flex justify-center items-center p-4">
            Mobile-first Tailwind
          </div>
        </div>
        <div className="w-[300px] h-[300px] rounded-[10px] bg-brandPurple mx-6">
          <div className="flex justify-center items-center p-4">
            useAnimate with Framer Motion
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
