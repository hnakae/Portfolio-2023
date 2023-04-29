import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Image from "next/image";
import React from "react";

import bgLines from "../../public/assets/bg-lines.png";

const contact = () => {
  return (
    <>
      <Head>
        <title>Hironobu | Contact Page</title>
        <meta name="description" content="Hironobu Nakae's Portfolio" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <div>Send us an email</div>
              <div>info@my.agency</div>

              <Image
                src={bgLines}
                alt="HiroNakae"
                className="max-w-[500px] h-auto md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col item-center self-center lg:w-full lg:text-center">
              {/* <div className="flex item-center justify-center flex-shrink-0 flex-grow-0 hover:outline ">
                BOX
              </div> */}
              <AnimatedText
                text="Let's Connect!"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                Work | Consulting | Lessons
              </p>
              <form className="animate-pulse caret-brand ">
                <input
                  placeholder="Your name"
                  className="w-[47.5%] p-2 mr-[2.5%] focus:outline-brand "
                />
                <input
                  placeholder="Your email"
                  className="w-[47.5%] p-2 ml-[2.5%] focus:outline-brand"
                />{" "}
                <br />
                <textarea
                  placeholder="Your message"
                  className="w-full p-2 mt-2 focus:outline-brand"
                />
                <br />
                <button className=" my-4 px-10 py-3 bg-brand font-semibold rounded-md">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default contact;
