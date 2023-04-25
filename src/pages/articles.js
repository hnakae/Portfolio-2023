import React, { useRef } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";
import article1 from "../../public/images/articles/1.png";
import article2 from "../../public/images/articles/2.png";
import article3 from "../../public/images/articles/3.png";
import article4 from "../../public/images/articles/4.png";
import article5 from "../../public/images/articles/5.png";
import article6 from "../../public/images/articles/6.png";
// import article7 from "../../public/images/articles/What is Redux with easy explanation.png";
// import article8 from "../../public/images/articles/What is higher order component in React.jpg";
import TransitionEffect from "@/components/TransitionEffect";

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

const Article = ({ img, title, date, link }) => {
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

const FeaturedArticle = ({ img, title, time, summary, link }) => {
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

const articles = () => {
  return (
    <>
      <Head>
        <title>Hironobu | Articles Page</title>
        <meta name="description" content="Hironobu Nakae's Portfolio" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center over-flow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Get useful insights in our web develepment blog"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16">
            <FeaturedArticle
              title="Fundamentals"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="/"
              img={article1}
            />
            <FeaturedArticle
              title="Alpha Go Zero"
              summary="Learn how to create stunning loading screens in React with 3 different methods. 
Discover how to use React-Loading, React-Lottie & build a custom loading screen. 
Improve the user experience."
              time="10 min read"
              link="/"
              img={article2}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="Modern Joseki"
              img={article1}
              date="March 09, 2023"
              link="/"
            />
            <Article
              title="AI Tactics"
              img={article2}
              date="March 09, 2023"
              link="/"
            />
            <Article
              title="Reduce with double approach attach & aji"
              img={article3}
              date="March 09, 2023"
              link="/"
            />

            <Article
              title="Invade 3 space high"
              img={article4}
              date="March 09, 2023"
              link="/"
            />
            <Article
              title="Enclosure + Extension + Reinforcement"
              img={article5}
              date="March 09, 2023"
              link="/"
            />
            <Article
              title="Center Control"
              img={article6}
              date="March 09, 2023"
              link="/"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
