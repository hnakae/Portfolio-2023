import React, { useRef } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";
import blog1 from "../../public/images/blogs/1.png";
import blog2 from "../../public/images/blogs/2.png";
import blog3 from "../../public/images/blogs/3.png";
import blog4 from "../../public/images/blogs/4.png";
import blog5 from "../../public/images/blogs/5.png";
import blog6 from "../../public/images/blogs/6.png";
// import Blog7 from "../../public/images/Blogs/What is Redux with easy explanation.png";
// import Blog8 from "../../public/images/Blogs/What is higher order component in React.jpg";
import TransitionEffect from "@/components/TransitionEffect";
import icon6 from "../../public/assets/icons/icon-6.png";

const FramerImage = motion(Image);

// use separate component for moving image we don't want to re-render the whole component multiple times
const MovingImg = ({ img, title, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);
  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX - 295);
    y.set(-300);
  }
  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const Blog = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light dark:bg-dark text-dark dark:text-light first:mt--0 border border-solid border-dark dark:border-light border-r-4 border-b-4 sm:flex-col "
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedBlog = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
        <p className="text-sm mb-2">{summary}</p>
        <span className="text-primary dark:text-primaryDark font-semibold">
          {time}
        </span>
      </Link>
    </li>
  );
};

const blog = () => {
  return (
    <>
      <Head>
        <title>Hironobu | Blog Page</title>
        <meta name="description" content="Hironobu Nakae's Portfolio" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center min-h-screen">
        <Layout className="pt-16 ">
          {/* <Image
            src={icon6}
            alt="icon"
            className="w-20 absolute top-[7%] right-40"
          /> */}
          <AnimatedText
            text="Get useful insights in our web develepment blog"
            className="my-24 !text-7xl !text-start !font-semibold 2xl:!text-5xl lg:!text-4xl md:!text-3xl"
          />
          <ul className="grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16">
            <FeaturedBlog
              title="Fundamentals"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="/"
              img={blog1}
            />
            <FeaturedBlog
              title="Alpha Go Zero"
              summary="Learn how to create stunning loading screens in React with 3 different methods. 
Discover how to use React-Loading, React-Lottie & build a custom loading screen. 
Improve the user experience."
              time="10 min read"
              link="/"
              img={blog2}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Blogs
          </h2>
          <ul>
            <Blog
              title="Modern Joseki"
              img={blog1}
              date="March 09, 2023"
              link="/"
            />
            <Blog
              title="AI Tactics"
              img={blog2}
              date="March 09, 2023"
              link="/"
            />
            <Blog
              title="Reduce with double approach attach & aji"
              img={blog3}
              date="March 09, 2023"
              link="/"
            />

            <Blog
              title="Invade 3 space high"
              img={blog4}
              date="March 09, 2023"
              link="/"
            />
            <Blog
              title="Enclosure + Extension + Reinforcement"
              img={blog5}
              date="March 09, 2023"
              link="/"
            />
            <Blog
              title="Center Control"
              img={blog6}
              date="March 09, 2023"
              link="/"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default blog;
