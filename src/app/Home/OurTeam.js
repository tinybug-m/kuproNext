"use client";

import Image from "next/image";
import {motion} from 'framer-motion'
import { ourTeamLines } from "./lineStyles";
import { lineVariants } from "@/utils/animations";


export default function OurTeam() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center relative">


      {/* Text Content */}
      <div className="lg:w-2/3 relative p-8 lg:pr-16  bg-white mt-10">
        {/* Border Lines */}
        {/* {lineStyles.map((style, index) => (
          <div
            key={index}
            className={`absolute bg-red-500`}
            style={style}
          ></div>
        ))} */}
        {ourTeamLines.map((data) => (
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
        <h1 className="text-3xl font-bold mb-4">Our Team</h1>
        <p className="mb-8">
          At Kopru, our team is the driving force behind our success. Comprised of seasoned professionals with a rich background in Swiss majors, our management brings a depth of experience and a proven track record in the industry. Their strategic vision and deep understanding of the global commodity markets are instrumental in steering our company towards sustainable growth and innovation.
        </p>
        <p>
          Complementing this seasoned experience, our team also includes a dynamic group of young and creative traders. With an unwavering willingness to explore and execute new value-added trades, they inject energy and a fresh perspective into our team. This balance ensures that we are not just participating in the market, but we are shaping it, building networks and establishing trades that together forms the cutting-edge trading house that is Kopru.
        </p>
      </div>

      {/* Image and Text Container */}

      <div className="lg:w-1/3">
        {/* Large 'K' with image background */}
        <Image
          src="/ourteam.jpg"
          alt="K Image"
          width={544}
          height={408}
          objectFit="cover"
          className="rounded-lg"
          style={{
            position: "absolute",
            top: "50%",
            bottom: "50%",
            transform: "translateY(-50%)",
            right: "0px",
            zIndex: -1
          }}
        />
      </div>
    </div>
  );
}
