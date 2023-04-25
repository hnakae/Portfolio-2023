import Link from "next/link";
import React from "react";
import { CircularText } from "./Icons";
import Image from "next/image";
import black from "../../public/assets/black.png";
import white from "../../public/assets/white.png";

const HireMe = ({ text }) => {
  return (
    <div className="fixed z-5 right-4 bottom-4 flex items-center justify-center overflow-hidden ">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CircularText
          className={"fill-dark animate-spin-slow dark:fill-light"}
        />
        <Image
          src={black}
          alt="black"
          className="absolute dark:hidden md:w-[50%]"
        />
        <Image
          src={white}
          alt="white"
          className="absolute hidden dark:inline-block md:w-[50%]"
        />
        <Link
          href="https://online-go.com/user/view/1119681"
          target="_blank"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent text-light dark:text-dark  w-20 h-20 rounded-full font-semibold md:w-12 md:h-12 md:text-[10px]"
        >
          {text}
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
