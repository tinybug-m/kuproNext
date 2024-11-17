"use client";

import Image from "next/image";
import Card from "../../components/Card"; // Adjust the path if needed
import { officeLocationsLines } from "./lineStyles";
import { lineVariants } from "@/utils/animations";
import { motion } from 'framer-motion'

export default function OfficeLocations() {
  // checkIsThisClean -- not here
  const officeData = [
    {
      title: "Dubai",
      address: "Unit 704, Block B, Al Hudaibah Awards Building, Jumeirah, Dubai, UAE",
      email: "Switzerland@kopru.com"
    },
    {
      title: "Switzerland",
      address: "Unit 704, Block B, Al Hudaibah Awards Building, Jumeirah, Dubai, UAE",
      email: "Switzerland@kopru.com"
    },
    {
      title: "Singapore",
      address: "Unit 704, Block B, Al Hudaibah Awards Building, Jumeirah, Dubai, UAE",
      email: "Switzerland@kopru.com"
    },
    // Add more office data objects as needed
  ];

  // checkIsThisClean - looks like class not module -- every components on this page are same
  return (
    <div className="min-h-screen grid place-items-center ">
      <div className="relative grid justify-items-center p-4">
        {officeLocationsLines.map((data) => (
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
        <h1 className="text-3xl font-bold mb-9">Office Location</h1>
        <div className="w-full">
          <Image
            src="/Vector-Office.png"
            alt="Vector-Office"
            width={975}
            height={270}
            layout="responsive"
          />
        </div>
        <div className="flex justify-between w-full -mt-9 gap-8">
          {officeData.map((office, index) => (
            <Card key={index} title={office.title} address={office.address} email={office.email} />
          ))}
        </div>
      </div>

    </div>
  );
}
