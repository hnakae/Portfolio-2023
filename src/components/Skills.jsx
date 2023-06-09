import React from "react";
import AnimatedText from "./AnimatedText";
import Image from "next/image";
import skill1 from "../../public/assets/icons/icon.png";
import skill2 from "../../public/assets/icons/skill2.png";
import skill3 from "../../public/assets/icons/skill3.png";
import skill4 from "../../public/assets/icons/icon-6.png";

const Skills = () => {
  return (
    <div className="flex flex-col md:px-12 lg:px-40 py-16">
      <div className="flex justify-center">
        <AnimatedText
          text="Skills"
          className=" md:text-4xl lg:text-5xl text-center mt-10 mb-20 font-semibold md:leading-normal lg:leading-normal lg:px-44"
        />
      </div>
      <div className="grid grid-cols-12 gap-10 mb-12">
        <div className="col-span-3">
          <div className="flex justify-center mb-6">
            <Image src={skill1} alt="skill" height={65} />
          </div>
          <div className="flex justify-center">
            <div className="text-2xl font-bold mb-6">Languages</div>
          </div>
          <div className="flex justify-center">
            <ul className="text-xl font-semibold text-left space-y-4">
              <li>TypeScript</li>
              <li>JavaScript&nbsp;(ES6)</li>
              <li>HTML/CSS</li>
              <li>Python</li>
            </ul>
          </div>
        </div>
        <div className="col-span-3">
          <div className="flex justify-center mb-6">
            <Image src={skill2} alt="skill" height={65} />
          </div>
          <div className="flex justify-center">
            <div className="text-2xl font-bold mb-6">Frameworks</div>
          </div>
          <div className="flex justify-center">
            <ul className="text-xl font-semibold text-left space-y-4">
              <li>Next</li>
              <li>Tailwind&nbsp;CSS</li>
              <li>React</li>
            </ul>
          </div>
        </div>
        <div className="col-span-3">
          <div className="flex justify-center mb-6">
            <Image src={skill3} alt="skill" height={65} />
          </div>
          <div className="flex justify-center">
            <div className="text-2xl font-bold mb-6">Tools</div>
          </div>
          <div className="flex justify-center">
            <ul className="text-xl font-semibold text-left space-y-4">
              {/* <li>Redux</li> */}
              <li>PostgreSQL</li>
              <li>Prisma</li>
              {/* <li>Apollo&nbsp;GraphQL</li> */}
              <li>Cypress</li>
            </ul>
          </div>
        </div>
        <div className="col-span-3">
          <div className="flex justify-center mb-6">
            <Image src={skill4} alt="skill" height={65} as="image" />
          </div>
          <div className="flex justify-center">
            <div className="text-2xl font-bold mb-6">Design</div>
          </div>
          <div className="flex justify-center">
            <ul className="text-xl font-semibold text-left space-y-4">
              <li>Figma</li>
              <li>Wireframing</li>
              <li>Prototyping</li>
              <li>Mockup</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
