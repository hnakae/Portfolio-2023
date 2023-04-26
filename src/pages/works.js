import React, { useEffect } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
// import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import project1 from "../../public/images/projects/example.png";
import project2 from "../../public/images/projects/example2.png";
import project3 from "../../public/images/projects/example3.png";

import icon from "../../public/assets/icons/icon.png";
import icon1 from "../../public/assets/icons/icon-1.png";
import icon2 from "../../public/assets/icons/icon-2.png";
import icon4 from "../../public/assets/icons/icon-4.png";
import icon5 from "../../public/assets/icons/icon-5.png";
import icon7 from "../../public/assets/icons/icon-7.png";
import icon8 from "../../public/assets/icons/icon-8.png";
import icon9 from "../../public/assets/icons/icon-9.png";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="p-12 relative rounded-br-2xl w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />

      <Link
        href={link}
        target="_blank"
        className="w-auto cursor-pointer overflow-hidden rounded-lg lg:w-full "
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

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full  flex-col items-center justify-center rounded-2xl rounded-br-2xl border border-solid border-dark bg-light dark:bg-dark dark:border-light p-6 relative xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className=" text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            {" "}
            <GithubIcon />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const works = () => {
  return (
    <>
      <Head>
        <title>Hironobu | Works Page</title>
        <meta name="description" content="Hironobu Nakae's Portfolio" />
        {/* include meta tag with key words for seo */}
      </Head>
      <TransitionEffect />
      <main className="flex items-center ">
        <Layout className="pt-16 relative">
          <Image
            src={icon2}
            alt="icon"
            className="w-20 absolute top-10 left-40"
          />

          <div className="w-full flex lg:flex-col">
            <div className="text-8xl xl:text-7xl lg:text-6xl font-bold my-24 mx-20">
              WE MAKE <br /> SUCCESSFUL <br /> DIGITAL <br /> EXPERIENCES
              <span className="animate-[pulse_1s_ease-in-out_infinite]">.</span>
            </div>
            <div className=" font-semibold text-xl lg:mb-12 flex items-end my-24 pl-8 pb-4 lg:my-0 lg:pl-0">
              A caring partner that provides <br /> innovative Design solutions
              for funded <br /> Startups, technology SMEs, and <br /> Fortune
              500 companies.
            </div>
            {/* <AnimatedText
              text="WE MAKE SUCCESSFUL DIGITAL EXPERIENCES."
              className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl "
            /> */}
          </div>
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="New Paradigm - Fully Stacked TypeScript Web Application"
                summary="A full-stack web application using the latest web development technologies including Nextjs, React, TypeScript, Tailwind, Prisma, PlanetScale, Cypress, and Clerk. (Bring in icons for the technologies)"
                link="https://new-paradigm.vercel.app/"
                type="Featured Project"
                img={project1}
                github="https://github.com/hnakae/NewParadigm"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Media Platform: Curated Lessons for Go Players(Coming Soon)"
                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth 
page transitions, cool background effects, unique design and it is mobile responsive."
                link="/"
                type="Project"
                img={project2}
                github="/"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="AI Dashboard: Algorithmic Data Visualizer(Coming Soon)"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="/"
                type="Project"
                img={project3}
                github="/"
              />
            </div>

            {/* <div className="col-span-12">
              <FeaturedProject
                title="OpenAI GPT4 App using RapidAPI (Coming Soon)"
                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth 
page transitions, cool background effects, unique design and it is mobile responsive."
                link="/"
                type="Featured Project"
                img={project2}
                github="/"
              />
            </div> */}

            {/* <div className="col-span-6 sm:col-span-12">
              <Project
                title="E-commerce App"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="/"
                type="Project"
                img={project5}
                github="/"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Pixel Perfect Design"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="/"
                type="Project"
                img={project6}
                github="/"
              />
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default works;
