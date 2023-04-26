import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Image from "next/image";
import React from "react";

import profilePic from "../../public/images/profile/developer-pic-1.png";

const contact = () => {
  return (
    <>
      <Head>
        <title>Hironobu | Contact Page</title>
        <meta name="description" content="Hironobu Nakae's Portfolio" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <div>Send us an email</div>
              <div>info@my.agency</div>

              <Image
                src={profilePic}
                alt="HiroNakae"
                className="max-w-[500px] h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col item-center self-center lg:w-full lg:text-center">
              <div className="flex item-center justify-center flex-shrink-0 flex-grow-0 hover:outline ">
                BOX
              </div>
              <AnimatedText
                text="Let's Connect!"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                Work | Consulting | Lessons
              </p>
              <form>
                <input placeholder="Your name" className="w-1/2" />
                <input placeholder="Your email" className="w-1/2" /> <br />
                <input placeholder="Your message" className="w-full" />
                <br />
                <button className="p-4 border">Submit</button>
              </form>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default contact;
