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
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
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
import { useEffect, useRef } from "react";
// import { useRef, useState } from "react";

const FramerImage = motion(Image);

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(2) <= value) {
        ref.current.textContent = latest.toFixed(2);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const Project = ({ title, summary, type, img, link, github }) => {
  return (
    <article className="w-full  flex-col items-center justify-center rounded-2xl rounded-br-2xl bg-brandBlue py-4 dark:bg-dark dark:border-light relative xs:p-4  ">
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
        <div className="w-full mt-2 flex items-center justify-start">
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
    <article className=" mb-6 relative w- flex items-center bg-brandBlue px-8 py-12 dark:bg-dark dark:border-light  ">
      {/* <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" /> */}
      <div className="absolute right-10 translate-x-28  rounded-full h-[690px] w-[690px] lg:z-0 bg-brand"></div>
      <div className="h-full z-3 flex py-12 flex-col items-start justify-between w-1/3 pr-8 ">
        <span className="text-brand font-medium text-xl dark:text-brandDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 my-6"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-base">
            {title}
          </h2>
        </Link>
        <p className="mb-6 font-medium text-dark dark:text-light sm:text-base lg:text-2xl ">
          {summary}
        </p>
        <div className="mt-2 flex items-center sm:hidden">
          <Link
            href={link}
            target="_blank"
            className="mr-6 h-[50px] w-auto  flex items-center  text-2xl font-bold dark:bg-dark dark:text-light "
          >
            VIEW PROJECT
          </Link>
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
        </div>
      </div>
      <Link
        href={link}
        target="_blank"
        className="w-[60%] translate-x-10 md:rounded-[10px] cursor-pointer overflow-hidden  z-10 "
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
          <div className=" flex flex-col  xs:px-4 sm:px-8 md:px-12 lg:px-36 landscape:lg:pt-56 md:pt-64 bg-brandWhite ">
            <AnimatedText
              text="Frontend Developer | UI/UX Designer"
              className=" xs:text-base sm:text-lg md:text-xl lg:text-2xl font-normal mb-10"
            />
            <AnimatedText
              text="Hello! I'm Hiro Nakae, a Front-End Software Engineer based in Eugene, Oregon."
              className=" xs:text-2xl sm:text-3xl md:text-5xl lg:text-6xl  md:pr-56 lg:pr-44 font-semibold lg:leading-normal md:leading-normal mb-10"
            />

            {/* Button */}
            <div className="flex justify-center mb-10">
              <Link
                href="/algo"
                className="font-semibold border sm:rounded-full border-dark flex justify-center w-[180px] items-center py-4  bg-brandWhite hover:bg-brandDark  md:mb-6 md:mt-12 "
              >
                <span className="text-lg font-bold ">Let's Code</span>
                <Image
                  src={arrow_right}
                  alt="arrow"
                  className="w-auto h-4 ml-4 "
                />
              </Link>
            </div>
            {/* ARROW INDICATOR */}
            <div className="font-semibold text-xs lg:text-sm flex justify-center md:mt-6 ">
              <div className="cursor-pointer">VIEW FEATURED PROJECT</div>
            </div>
            <div className="flex flex-col justify-center items-center p-4 md:mb-16 lg:mb-20">
              <Icon
                icon={arrow_down}
                className="cursor-pointer animate-bounce"
              />
            </div>
          </div>
          {/* GRID CONTAINER */}
          <div className="grid grid-cols-12  px-12 md:px-12 lg:px-20 gap-10 ">
            <div className="col-span-12 md:hidden">
              <FeaturedProject
                title="Fully Stacked ChatGPT Integration"
                summary="A full-stack web application using the latest web development technologies including Nextjs, React, TypeScript, Tailwind, tRPC, Prisma, PlanetScale, Cypress, and Clerk."
                link="https://new-paradigm.vercel.app/"
                type="Featured Project"
                img={project1}
                github="https://github.com/hnakae/NewParadigm"
              />
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
          {/* Skills section */}
          <div className="flex flex-col md:px-12 lg:px-40 py-16">
            <div className="flex justify-center">
              <AnimatedText
                text="This is the technology stack that I use on a daily basis."
                className=" md:text-4xl lg:text-5xl text-center mt-10 mb-32 font-semibold md:leading-normal lg:leading-normal lg:px-44"
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
                  <ul className="text-xl font-semibold text-left ">
                    <li className="mb-4">JavaScript&nbsp;(ES6)</li>
                    <li className="mb-4">TypeScript</li>
                    <li className="mb-4">HTML</li>
                    <li>CSS/Sass</li>
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
                  <ul className="text-xl font-semibold text-left">
                    <li className="mb-4">Next</li>
                    <li className="mb-4">React</li>
                    <li>Tailwind&nbsp;CSS</li>
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
                  <ul className="text-xl font-semibold text-left">
                    <li className="mb-4">React&nbsp;Query</li>
                    <li className="mb-4">tRPC</li>
                    <li className="mb-4">MSSMS</li>
                    <li>AWS&nbsp;S3 </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-3">
                <div className="flex justify-center mb-6">
                  <Image src={skill4} alt="skill" height={65} />
                </div>
                <div className="flex justify-center">
                  <div className="text-2xl font-bold mb-6">Design</div>
                </div>
                <div className="flex justify-center">
                  <ul className="text-xl font-semibold text-left">
                    <li className="mb-4">Figma</li>
                    <li className="mb-4">Wireframing</li>
                    <li className="mb-4">Prototyping</li>
                    <li>Mockup</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* ABOUT SECTION */}
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
                <div className="text-xl font-medium text-center rounded-[10px] w-[auto] h-[auto] px-4 py-6  mx-8">
                  "Hi there! My name is Hiro Nakae and I'm currently looking
                  into some interesting topics such as: API development with
                  tRPC, and React State Management with tools like React Query.
                  State management frameworks and API access libraries are
                  something new to me and I'm excited to learn more about
                  them.""
                </div>
              </div>
            </div>
          </div>
          {/* AWARDS SECTION */}
          <div className="h-screen bg-brandGray">
            <div className=" flex items-center justify-center ">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={57} />%
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Win Percentage
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={3.83} />
                  :1
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  KDA
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={292} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Games Played
                </h2>
              </div>
            </div>
          </div>
          {/* FAQ */}
          <div className="h-screen bg-brandWhite">
            <div>Frequently asked questions</div>
          </div>
          {/* Blogs */}
          <div className="h-screen bg-brandWhite">
            <div>Continue reading</div>
          </div>
          {/* Contact section */}
          <div className="flex flex-col bg-neutral-100 md:h-[400px] py-24 lg:px-40">
            <div className="flex justify-center">
              <AnimatedText
                text="Got a project in mind?"
                className=" md:text-[38px] text-center mb-16 font-semibold leading-normal"
              />
            </div>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="font-semibold z-20 text-white bg-red-400  hover:bg-black hover:text-brandWhite  flex justify-center w-[180px] items-center py-4   mb-24 sm:rounded-full"
              >
                <div className="text-lg font-bold ">Let's Talk!</div>
              </Link>
            </div>
          </div>
          {/* footer nav */}
          <div className="h-[455px] bg-brandWhite"></div>
        </Layout>
      </main>
    </>
  );
}
