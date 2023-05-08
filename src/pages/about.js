import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
// import goal from "../../public/assets/goal.png";
// import hero from "../../public/images/profil";
import penguin from "../../public/assets/penguin.jpg";
import { useMotionValue, useSpring, useInView } from "framer-motion";
import SkillsPage from "@/components/SkillsPage";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import go from "../../public/assets/go.png";
import icon3 from "../../public/assets/icons/icon-3.png";

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

const about = () => {
  return (
    <>
      <Head>
        <title>Hironobu | About Page</title>
        <meta name="description" content="Hironobu Nakae's Portfolio" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center min-h-screen">
        <Layout className="pt-16 ">
          {/* <Image
            src={icon3}
            alt="icon"
            className="w-20 absolute top-[7%] right-[25%] z-0"
          /> */}
          <AnimatedText
            text="We are friendly and experienced Product Design Agency"
            className="z-10 !text-start !font-semibold mt-36 mb-12 !text-7xl 2xl:!text-5xl lg:!text-4xl md:!text-3xl"
          />
          <AnimatedText
            text="We are a team of multidisciplinary digital product experts consisting of
experienced product managers, designers, developers, and buisiness analysts."
            className="!text-3xl !text-start !font-normal mb-36 lg:!text-2xl "
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi there. I'm Hiro, a web developer based in Eugene with a
                passion for building digital experiences on the web.
              </p>
              <p className="my-4 font-medium">
                If you want to improve, redesign, or build your website from
                scratch, I'm your guy!
              </p>

              <p className="font-medium">
                Take a look at my works to see the latest projects I've worked
                on.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-3xl rounded-br-2xl outline outline-brand bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <Image
                src={penguin}
                alt="Hironobu"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
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
          <SkillsPage />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
