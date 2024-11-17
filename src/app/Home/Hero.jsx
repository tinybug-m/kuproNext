"use client";

import Image from "next/image";
import { heroLines } from "./lineStyles";
import { motion } from "framer-motion";
import { lineVariants } from "@/utils/animations";

export default function HeroTest({changeComponent}) {
  return (
    <div className="min-h-screen flex flex-col items-start justify-center relative">
      <div className="fixed w-full h-full left-0  bg-[#1E1E1E]">
        <Image
          src="/venti-hero.jpg"
          alt="venti-hero"
          className="opacity-45"
          fill={true}
        />
      </div>
      <div className="relative w-full">
        {/* Border Lines */}
        {heroLines.map((data) => (
          <motion.div
            key={data.id}
            initial="hidden"
            animate="visible"
            custom={data.custom}
            variants={lineVariants}
            className="absolute bg-red-500"
            style={data.styles}
          ></motion.div>
        ))}

        {/* Main Heading */}
        <h1 className="text-4xl mb-4 leading-[54px] text-white">
          We connect vital resources to <br /> power and build the world
        </h1>

        {/* Action Button */}
        <div className="p-0.5 rounded-sm bg-gradient-to-r from-[#2D96E5] to-[#30D2C7] inline-block">
          <button className="px-9 py-6 text-[16px] text-white rounded-sm bg-gradient-to-r from-primary to-secondary">
            Discover who we are
          </button>
        </div>

        {/* Top and bottom fadings */}
        <div className="fixed w-full h-10 top-0 left-0 bg-gradient-to-b from-black to-transparent"></div>
        <div className="fixed w-full h-10 bottom-0 left-0 bg-gradient-to-t from-black to-transparent"></div>

        {/* Next page button */}
        <button onClick={()=>changeComponent('next')} className="p-3 rounded-full focus:outline-none fixed bottom-8 left-1/2 transform -translate-x-1/2">
          <Image src="/Scroll.svg" width={19} height={19} />
        </button>

        {/* <div className="h-20 w-20 bg-gradient-r from-primary to-secnodary">test</div> */}
      </div>
    </div>
  );
}
