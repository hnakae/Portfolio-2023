import Image from "next/image";
import React from "react";
import hero from "../../public/assets/penguin.jpg";

const About = () => {
  return (
    <div className=" h-[auto] py-16 flex flex-col md:px-12 lg:px-40">
      <div className="flex justify-center md:text-4xl lg:text-5xl font-semibold mb-16">
        About Me
      </div>

      <div className="flex bg-brandBlue rounded-[10px] hover:bg-brandGray">
        <div className="flex justify-center items-center  pl-12">
          <div className=" bg-brandPurple w-[150px] h-[150px] rounded-full ">
            <Image src={hero} alt="profile" width={150} height={150} />
          </div>
        </div>
        <div className="flex justify-center my-8">
          <div className="text-xl font-medium text-center rounded-[10px] w-[auto] h-[auto] px-6 py-6 mx-8 leading-relaxed space-y-3">
            <>
              Hi there! I&apos;m Hiro Nakae, a senior CS student at the University of Oregon who loves turning ideas
              into products people actually use.
            </>
            <p>
              I&apos;m currently looking for roles where I can ship polished web experiences, collaborate closely with design, and keep learning from great teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
