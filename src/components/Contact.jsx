import React from "react";
import AnimatedText from "./AnimatedText";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex flex-col bg-neutral-100 md:h-[400px] py-24 lg:px-40">
      <div className="flex justify-center">
        <AnimatedText
          text="Got a project in mind?"
          className=" md:text-[38px] text-center mb-16 font-semibold leading-normal"
        />
      </div>
      <div className="flex justify-center">
        <Link
          href="/contact"
          className="font-semibold z-20 text-white bg-red-400  hover:bg-black hover:text-brandWhite  flex justify-center w-[180px] items-center py-4   mb-24 sm:rounded-full"
        >
          <div className="text-lg font-bold ">Let's Talk!</div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
