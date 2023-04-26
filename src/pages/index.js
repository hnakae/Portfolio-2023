import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
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

export default function Home() {
  return (
    <>
      <Head>
        <title>Hiro Nakae | Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <TransitionEffect />

      <main className="flex items-center ">
        <Layout className="pt-0 md:pt-16 sm:pt-8 ">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="HiroNakae"
                className="w-full h-auto md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col item-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Get highly-performing, fully functional and secure web interfaces."
                className="!text-lg font-semibold md:!text-sm sm:!text-xs  !text-start lg:!text-center"
              />
              <AnimatedText
                text="Web Developer"
                className="my-4 !text-7xl !text-left lg:!text-center 2xl:!text-6xl xl:!text-5xl lg:!text-4xl md:!text-3xl"
              />
              {/* <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                Get highly-performing, fully functional and secure web
                experiences that are able to scale as your business grows.
              </p> */}

              <nav className="flex items-center justify-start flex-wrap my-8">
                <motion.a
                  href="https://twitter.com"
                  target={"_blank"}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-6 mr-3"
                >
                  <TwitterIcon />
                </motion.a>
                <motion.a
                  href="https://github.com"
                  target={"_blank"}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-6 mx-3"
                >
                  <GithubIcon />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target={"_blank"}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-6 mx-3"
                >
                  <LinkedInIcon />
                </motion.a>
                <motion.a
                  href="https://pinterest.com"
                  target={"_blank"}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-6 mx-3 bg-light rounded-full"
                >
                  <PinterestIcon />
                </motion.a>
                <motion.a
                  href="https://dribbble.com"
                  target={"_blank"}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-6 ml-3"
                >
                  <DribbbleIcon />
                </motion.a>
              </nav>

              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="h-[50px] w-[150px] flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-solid border-transparent hover:border-dark border-2 dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                {/* <Link
                  href="/contact"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  HIRE ME
                </Link> */}
              </div>
            </div>
          </div>
        </Layout>
      </main>
      {/* <HireMe text="Hire me!" /> */}

      {/* <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={penguin} alt="HiroNakae" className="w-full h-auto" />
        </div> */}
    </>
  );
}
