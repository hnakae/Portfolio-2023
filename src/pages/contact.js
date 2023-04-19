import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const contact = () => {
  return (
    <>
      <Head>
        <title>Hironobu | Articles Page</title>
        <meta name="description" content="Hironobu Nakae's Portfolio" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light ">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <AnimatedText
                text="Let's Connect!"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                Work | Consulting | Lessons
              </p>
              {/* <Image
                src={profilePic}
                alt="HiroNakae"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              /> */}
            </div>
            <div className="w-1/2 flex flex-col item-center self-center lg:w-full lg:text-center">
              <form>
                <label for="name">email</label>
                <input />
              </form>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default contact;
