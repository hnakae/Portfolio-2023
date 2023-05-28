import React from "react";
import project1 from "../../public/images/wordpress.jpg";
import project2 from "../../public/images/mintyswap.jpg";
import project3 from "../../public/images/qtalent.jpg";
import project4 from "../../public/images/sage-mobile.jpg";
import project5 from "../../public/images/klasha-mobile.jpg";
import project6 from "../../public/images/hugo-blog.PNG";

import Link from "next/link";
import { GithubIcon } from "./Icons";
import { motion } from "framer-motion";
import Image from "next/image";

const FramerImage = motion(Image);

const Project = ({ title, summary, type, img, link, github, priority }) => {
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
          className="w-full h-auto rounded-[10px] px-4"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          loading="lazy"
          // as="image"
          // width={500}
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
            href="https://github.com/Eugene-Go-Club/Eugene-Go-Club.github.io"
            target="_blank"
            className=" text-lg font-bold  md:text-base lg:text-lg cursor:pointer hover:-translate-y-0.5"
          >
            VIEW PROJECT
          </Link>
          {/* <Link href={github} target="_blank" className="w-8 md:w-6">
              <GithubIcon />{" "}
            </Link> */}
        </div>
      </div>
    </article>
  );
};

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  priority,
}) => {
  return (
    <article className=" mb-6 relative w- flex items-center bg-brandBlue px-8 py-12 dark:bg-dark dark:border-light  ">
      {/* <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" /> */}
      <div className="absolute right-10 translate-x-28  rounded-full h-[620px] w-[620px] lg:z-0 bg-brand" />
      <div className="h-full z-3 flex py-12 flex-col items-start justify-between w-[45%] pr-8 ">
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
        className="w-[55%] md:rounded-[10px] cursor-pointer overflow-hidden  z-10 "
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          // priority={priority}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
    </article>
  );
};

const Projects = () => {
  return (
    <div className="grid grid-cols-12  px-12 md:px-12 lg:px-20 gap-10 ">
      <div className="col-span-12 md:hidden">
        <FeaturedProject
          title="Full Stack App w/ ChatGPT Integration"
          summary="A dynamic app with Clerk Auth, database-driven content(MySQLforEcom) or (MongoDBforCMS), E-commerce functionality(Stripe), Form processing(ReactHookForm/ZOD), and content management(GraphQL/GraphCMS)."
          link="https://new-paradigm.vercel.app/"
          type="Featured Project"
          img={project1}
          priority={true}
          github="https://github.com/hnakae/NewParadigm"
        />
      </div>
      {/* <div className="col-span-6 md:block lg:hidden">
        <Project
          title="Fully Stacked Web Application"
          summary="Tool with ChatGPT Integration"
          link="/"
          type="Project"
          img={project1}
          priority={true}
          github="/"
        />
      </div> */}
      {/* <div className="col-span-6">
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
      <div className="col-span-6">
        <Project
          title="To Do List"
          summary="Next.js + PostgreSQL + React Hook Form + CRUD"
          link="/"
          type="Project"
          img={project4}
          github="/"
        />
      </div>
      <div className="col-span-6">
        <Project
          title="E-Commerce App"
          summary="GraphQL + Redux + Typescript + Cypress"
          link="/"
          type="Project"
          img={project5}
          github="/"
        />
      </div> */}
      <div className="col-span-6">
        <Project
          title="Static Hugo Website"
          summary="Hugo + Tailwindcss"
          link="https://github.eugenego.club/"
          type="Project"
          img={project1}
          github="/"
        />
      </div>
      <div className="col-span-6 bg-brandBlue hover:bg-brandPurple rounded-[10px]">
        {/* empty */}
      </div>
    </div>
  );
};

export default Projects;
