import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  DribbbleIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <>
      <Link href={href} className={`${className} relative group md:hidden`}>
        {title}

        <span
          className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light
          ${router.asPath === href ? "w-full" : "w-0"}`}
        >
          &nbsp;
        </span>
      </Link>
    </>
  );
};
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <>
      <button
        href={href}
        className={`${className} relative group text-light dark:text-dark my-2`}
        onClick={handleClick}
      >
        {title}

        <span
          className={`h-[1px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
          ${router.asPath === href ? "w-full" : "w-0"}`}
        >
          &nbsp;
        </span>
      </button>
    </>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className=" z-4 w-full h-[88px] px-16 py-8 font-medium flex text-dark items-center justify-between dark:text-light relative lg:px-16 md:px-12 sm:px-8">
      {/* desktop */}
      <div className="w-full flex justify-between items-center">
        {/* <div className="absolute left-[50%] top-2 translate-x-[-50%] "> */}
        <Logo />
        {/* </div> */}
        <nav>
          <CustomLink href="/works" title="Works" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/blog" title="Blog" className="mx-4" />
          <CustomLink
            href="/contact"
            title="Contact us"
            className="mx-4 border border-dark p-4 dark:border-light"
          />

          <button
            className="flex-col justify-center items-center ml-4 "
            onClick={handleClick}
          >
            <span
              className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
              }`}
            ></span>
            <span
              className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
              }`}
            ></span>
          </button>
        </nav>

        {/* <nav className="flex items-center justify-center flex-wrap">
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

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 w-6  sm:mx-1 flex items-center justify-center rounded-full p-1 
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav> */}
      </div>
      {/* mobile */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] z-30 flex justify-around items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            {/* <Logo /> */}
            <CustomMobileLink
              href="/works"
              title="Works"
              className=""
              toggle={handleClick}
            />

            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/blog"
              title="Blog"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/contact"
              title="Contact"
              className=""
              toggle={handleClick}
            />
          </nav>

          <nav className="flex flex-col items-center justify-center flex-wrap mt-2">
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`w-6 sm:mx-1 ml-3 flex items-center justify-center rounded-full p-1 mb-8
  ${mode === "dark" ? "bg-dark text-light" : "bg-light text-dark"}`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
            <div className="text-light/50 dark:text-dark/50">Follow us</div>
            <CustomMobileLink
              href="/contact"
              title="Linkedin"
              className=""
              toggle={handleClick}
            />
            <div className="text-light/50 dark:text-dark/50 mt-8">
              Get in touch
            </div>
            <CustomMobileLink
              href="/contact"
              title="Nakae27@gmail.com"
              className=""
              toggle={handleClick}
            />
            <div>
              {/* <motion.a
              href="https://twitter.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3 sm:mx-1"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://github.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1 bg-light rounded-full dark:bg-dark"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://pinterest.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1 bg-light rounded-full"
            >
              <PinterestIcon />
            </motion.a>
            <motion.a
              href="https://dribbble.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 ml-3 sm:mx-1"
            >
              <DribbbleIcon />
            </motion.a>
*/}
            </div>
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
};

export default Navbar;
