import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import React, { useRef, useState } from "react";

const algo = () => {
  const input = useRef();
  const [output, setOutput] = useState("");

  const getLongestNonRepeatingChar = (e) => {
    e.preventDefault();
    let str = input.current.value;
    let arr = [];
    let substr = ""; // *hint*

    for (let i = 0; i < str.length; i++) {
      // for each letter in 'ABCDDDEFGHI'
      // create an array of non repeating strings *hint* chunk the input string into substrings
      let currentChar = str[i]; //*hint* strings are arrays of characters so you don't necessarily need to split into array
      // console.log({ currentChar, substr }); // starting with 'A' Now 'B' Now 'C' Now 'D' Now 'D'Again... Now 'D'AGAIN... *well placed console log*
      if (substr.includes(currentChar) || i === str.length - 1) {
        //since 'ABCD' already includes 'D'... //since substr'D' already includes curr'D'...
        arr.push(substr); // print arr = ['ABCD'] // print arr = ['ABCD', 'D']
        substr = currentChar; // substr = 'D' // substr = 'D'
      } else {
        substr += currentChar; // set substring to 'ABCD'
      }
    }
    // console.log(arr);
    //return the longest string... after you have chunked the input string into substrings the rest is easy.
    let longest = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > longest.length) {
        longest = arr[i];
      } else if (arr[i].length === longest.length) {
      }
    }
    setOutput(longest);
  };
  // getLongestNonRepeatingChar("ABCDDDEFGHI");

  return (
    <>
      <Head>
        <title>Hironobu | Contact Page</title>
        <meta name="description" content="Hironobu Nakae's Portfolio" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center min-h-screen">
        <Layout className="pt-0">
          <div className="p-12">
            <div className="grid grid-cols-12 gap-24">
              <div className="flex justify-center col-span-3">
                <div className="w-[300px]  flex flex-col outline p-4">
                  <h1 className="text-2xl mb-4">Longest Non Repeating Char</h1>
                  <form
                    className="flex flex-col "
                    onSubmit={getLongestNonRepeatingChar}
                  >
                    <label className="p-4 outline mb-4">
                      Sample Input: ABCDDDEFGHI
                    </label>
                    <input
                      className="outline mb-4 p-4"
                      type="text"
                      ref={input}
                      placeholder="Enter string"
                    />
                    <button
                      className="p-4 mb-6 rounded-full outline cursor-pointer"
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                  <div className="p-4 outline ">Output(DEFGH) : {output}</div>
                </div>
              </div>
              <div className="flex justify-center col-span-3">
                <div className="w-[300px]  flex flex-col outline p-4">
                  <h1 className="text-2xl mb-4">Longest Non Repeating Char</h1>
                  <form
                    className="flex flex-col "
                    onSubmit={getLongestNonRepeatingChar}
                  >
                    <label className="p-4 outline mb-4">
                      Sample Input: ABCDDDEFGHI
                    </label>
                    <input
                      className="outline mb-4 p-4"
                      type="text"
                      ref={input}
                      placeholder="Enter string"
                    />
                    <button
                      className="p-4 mb-6 rounded-full outline cursor-pointer"
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                  <div className="p-4 outline ">Output(DEFGH) : {output}</div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default algo;
