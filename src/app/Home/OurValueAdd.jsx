"use client";
import Image from "next/image";
import {motion} from 'framer-motion'
import { ourValueLines } from "./lineStyles";
import { lineVariants } from "@/utils/animations";


export default function OurValueAdd() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center relative">
      {/* Image and Text Container */}
      <div className="lg:w-1/3">
        {/* Large 'K' with image background */}
        <Image
          src="/ourvalues12.png"
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
            left: "0px"
          }}
        />
      </div>

      {/* Text Content */}
      <div className="lg:w-2/3 relative p-8 lg:pr-16  bg-white">
        {/* Border Lines */}
        {ourValueLines.map((data) => (
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
        <h1 className="text-3xl font-bold mb-4">Our Value-Add</h1>
        <p className="mb-4">
          We are deeply committed to adding tangible value to every aspect of
          our operations and relationships. Central to this commitment is our
          role to absorb risk for our customers and suppliers. In the dynamic
          and often unpredictable world of commodity trading, Kopru stand as a
          steadfast partner proficient in managing and mitigating risks that our
          partners face. This is the cornerstone of our business model and a key
          aspect our value proposition.
        </p>
        <p>
          We pride ourselves in our expertise in taking long-term positions. We
          invest strategically in the entire supply chain, from production and
          transportation to processing and storage. This integrated approach
          allows us to add value and maintain a competitive edge. By controlling
          these critical stages, we ensure efficiency and reliability for our
          counterparties. In essence, our value-add lies in our ability to
          combine risk management with market foresight to strategically invest
          in supply chains and build sustainable commodity flows.
        </p>
      </div>
    </div>
  );
}
