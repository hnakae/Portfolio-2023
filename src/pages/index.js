import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import project1 from "/public/images/wordpress.jpg";
import project2 from "/public/images/mintyswap.jpg";
import project3 from "/public/images/qtalent.jpg";
import project4 from "/public/images/sage-mobile.jpg";
import project5 from "/public/images/klasha-mobile.jpg";
import hero from "../../public/assets/penguin.jpg";
import AnimatedText from "@/components/AnimatedText";
import skill1 from "/public/assets/icons/icon.png";
import skill2 from "/public/assets/icons/skill2.png";
import skill3 from "/public/assets/icons/skill3.png";
import skill4 from "/public/assets/icons/icon-6.png";
import Link from "next/link";
import {
  LinkArrow,
  NextJS,
  NextLogo,
  NextjsLogo,
  PrismaLogo,
  ReactIcon,
  TailwindIcon,
  TypescriptIcon,
  TypescriptLogo,
  VercelLogo,
} from "@/components/Icons";
import HireMe from "@/components/HireMe";
import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  DribbbleIcon,
  SunIcon,
  MoonIcon,
} from "@/components/Icons";
import Icon from "react-icons-kit";
import { arrow_down } from "react-icons-kit/ikons/arrow_down";
import arrow_right from "../../public/assets/right-arrow.png";

import useThemeSwitcher from "@/components/hooks/useThemeSwitcher";

const FramerImage = motion(Image);

const Project = ({ title, summary, type, img, link, github }) => {
  return (
    <article className="w-full  flex-col items-center justify-center rounded-2xl rounded-br-2xl bg-brandBlue hover:bg-brandPurple  dark:bg-dark dark:border-light relative xs:p-4 ">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden "
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto rounded-[10px]"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4 px-4 pb-4 ">
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <span className="text-brand dark:text-brandDark font-medium text-xl  lg:text-lg md:text-base">
            {title}
          </span>
          <h2 className="my-2 w-full  text-2xl font-bold ">{summary}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className=" text-lg font-semibold underline md:text-base lg:text-lg"
          >
            Demo
          </Link>
          {/* <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />{" "}
          </Link> */}
        </div>
      </div>
    </article>
  );
};

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className=" mb-6  relative w-full flex items-center justify-between  bg-brandBlue hover:bg-brandPurple px-8 py-12 dark:bg-dark dark:border-light  ">
      {/* <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" /> */}

      <div className="h-full flex flex-col items-start justify-between w-1/2 ">
        <span className="text-brand font-medium text-xl dark:text-brandDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-base">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-base">
          {summary}
        </p>
        <div className="mt-2 flex items-center sm:hidden">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4  h-[50px] w-auto  flex items-center  p-2 px-6 text-sm font-semibold dark:bg-dark dark:text-light "
          >
            DEMO <LinkArrow className={"w-6 ml-1 p-4"} />
          </Link>
        </div>
      </div>
      <Link
        href={link}
        target="_blank"
        className="w-1/2 rounded-[10px] cursor-pointer overflow-hidden   "
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
    </article>
  );
};

export default function Home() {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <>
      <Head>
        <title>Hiro Nakae | Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <TransitionEffect />

      <main className="flex items-center min-h-screen ">
        <Layout className="">
          {/* FLEX CONTAINER */}
          <div className=" flex flex-col min-h-screen xs:px-4 sm:px-8 md:px-12 md:py-28 lg:px-40 lg:pt-28 bg-brandBlue2 rounded-md">
            <AnimatedText
              text="Frontend Developer | UI/UX Designer"
              className=" xs:text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-10"
            />
            <AnimatedText
              text="Hello! I'm Hiro Nakae, a front-end software engineer based in Eugene, Oregon."
              className=" xs:text-[36px] sm:text-[44px] md:text-[56px] lg:text-[70px]  mb-28 font-semibold leading-normal"
            />
            <div className="flex justify-center ">
              <Link
                href="/contact"
                className="font-semibold border border-dark flex justify-center w-[180px] items-center py-4 bg-brandWhite hover:bg-brandDark  mb-6 lg:mb-24 "
              >
                <span className="text-lg font-bold ">Let's talk</span>
                <Image
                  src={arrow_right}
                  alt="arrow"
                  className="w-auto h-4 ml-4 "
                />
              </Link>
            </div>
            {/* ARROW INDICATOR */}
            <div className="font-semibold text-xs lg:text-sm flex justify-center mt-6">
              <div className="cursor-pointer">VIEW FEATURED PROJECT</div>
            </div>
            <div className="flex flex-col justify-center items-center p-4 mb-6 md:mb-12 lg:mb-16">
              <Icon
                icon={arrow_down}
                className="cursor-pointer animate-bounce"
              />
            </div>
          </div>
          {/* GRID CONTAINER */}
          <div className="grid grid-cols-12 gap-10  px-12 md:px-12 lg:px-40 lg:py-24  ">
            <div className="col-span-12 md:hidden">
              <FeaturedProject
                title="Fully Stacked ChatGPT Integration"
                summary="A full-stack web application using the latest web development technologies including Nextjs, React, TypeScript, Tailwind, Prisma, PlanetScale, Cypress, and Clerk. (Bring in icons for the technologies)"
                link="https://new-paradigm.vercel.app/"
                type="Featured Project"
                img={project1}
                github="https://github.com/hnakae/NewParadigm"
              />
              {/* ARROW INDICATOR */}
              <div className="font-semibold text-xs flex justify-center pb-4">
                <div className="cursor-pointer">VIEW MORE PROJECTS</div>
              </div>
              <div className="flex flex-col justify-center items-center p-4">
                <Icon
                  icon={arrow_down}
                  className="cursor-pointer animate-bounce"
                />
              </div>
            </div>
            <div className="col-span-6 md:block lg:hidden">
              <Project
                title="Fully Stacked Web Application"
                summary="Tool with ChatGPT Integration"
                link="/"
                type="Project"
                img={project1}
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="UI/UX"
                summary="Pixel Perfect Design"
                link="/"
                type="Project"
                img={project2}
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="My Product"
                summary="Would you buy this?"
                link="/"
                type="Project"
                img={project3}
                github="/"
              />
            </div>
            <div className="col-span-6 bg-brandBlue hover:bg-brandPurple rounded-[10px]">
              {/* empty */}
            </div>
          </div>
          {/* ABOUT SECTION */}
          <div className="bg-brandBlue2 h-[auto] py-16 flex flex-col md:px-12 lg:px-40">
            <div className="flex justify-center md:text-4xl lg:text-5xl font-semibold mb-16">
              About Me
            </div>
            <div className="flex justify-center">
              <div className=" bg-brandPurple w-[150px] h-[150px] rounded-full mb-6">
                <Image src={hero} alt="profile" width={150} height={150} />
              </div>
            </div>
            <div className="flex justify-center ">
              <div className="text-3xl font-normal text-center rounded-[10px] bg-brandWhite w-[auto] h-[auto] px-4 py-6  mx-8">
                Hi there! My name is Hiro Nakae and I'm a Frontend Web Developer
                with a passion for UX/UI.
              </div>
            </div>
          </div>
          {/* Skills section */}
          <div className="flex flex-col md:px-12 lg:px-40 py-16">
            <div className="flex justify-center">
              <AnimatedText
                text="Skills"
                className=" md:text-4xl lg:text-5xl text-center mt-10 mb-16 font-semibold leading-normal"
              />
            </div>
            <div className="grid grid-cols-12 gap-10 mb-12">
              <div className="col-span-3">
                <div className="flex justify-center mb-6">
                  <Image src={skill1} alt="skill" height={100} />
                </div>
                <div className="flex justify-center">
                  <div className="md:text-xl lg:text-2xl font-bold mb-4">
                    Languages
                  </div>
                </div>
                <div className="flex justify-center">
                  <ul className="md:text-lg lg:text-xl font-semibold text-center">
                    <li>JavaScript (ES6)</li>
                    <li>TypeScript</li>
                    <li>HTML</li>
                    <li>CSS/Sass</li>
                  </ul>
                </div>
              </div>
              <div className="col-span-3">
                <div className="flex justify-center mb-6">
                  <Image src={skill2} alt="skill" height={100} />
                </div>
                <div className="flex justify-center">
                  <div className="text-xl font-bold mb-4 lg:text-2xl">
                    Frameworks
                  </div>
                </div>
                <div className="flex justify-center">
                  <ul className="md:text-lg lg:text-xl font-semibold text-center">
                    <li>Next</li>
                    <li>React</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
              </div>
              <div className="col-span-3">
                <div className="flex justify-center mb-6">
                  <Image src={skill3} alt="skill" height={100} />
                </div>
                <div className="flex justify-center">
                  <div className="text-xl font-bold mb-4 lg:text-2xl">
                    Tools
                  </div>
                </div>
                <div className="flex justify-center">
                  <ul className="md:text-lg lg:text-xl font-semibold text-center">
                    <li>Bash</li>
                    <li>Git & Github</li>
                    <li>Chrome DevTools</li>
                  </ul>
                </div>
              </div>
              <div className="col-span-3">
                <div className="flex justify-center mb-6">
                  <Image src={skill4} alt="skill" height={100} />
                </div>
                <div className="flex justify-center">
                  <div className="text-xl font-bold mb-4  lg:text-2xl">
                    Design
                  </div>
                </div>
                <div className="flex justify-center">
                  <ul className="md:text-lg lg:text-xl font-semibold text-center">
                    <li>Figma</li>
                    <li>Wireframing</li>
                    <li>Prototyping</li>
                    <li>Mockup</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Contact section */}
          <div className="flex flex-col bg-brandBlue2 md:h-[400px] py-24 lg:px-40">
            <div className="flex justify-center">
              <AnimatedText
                text="Got a project in mind?"
                className=" md:text-[38px] text-center mt-10 mb-16 font-semibold leading-normal"
              />
            </div>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="font-semibold border z-20 border-dark  hover:bg-[yellow]  flex justify-center w-[180px] items-center py-4   mb-6"
              >
                <div className="text-lg font-bold ">Let's Talk!</div>
              </Link>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
