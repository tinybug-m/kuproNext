"use client";
import Image from "next/image";
import {motion} from "framer-motion"
import { ourStoryLines } from "./lineStyles";
import { lineVariants } from "@/utils/animations";


export default function OurStory() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center">
      {/* Image and Text Container */}
      <div className="lg:w-1/3">
        {/* Large 'K' with image background */}
        <Image
          src="/ourstory.png"
          alt="K Image"
          width={400}
          height={400}
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Text Content */}
      <div className="lg:w-2/3 lg:pr-16 relative">
        {/* Border Lines */}
        {ourStoryLines.map((data) => (
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
        <h1 className="text-3xl font-bold mb-4">Our Story</h1>
        <p className="mb-4">
          Founded by a team of experienced professionals from leading Swiss
          trading firms, Kopru has established itself as a reliable and
          innovative player in the international commodity market. Specializing
          in the trade of aluminum, alumina, petcoke, copper concentrates, and
          refined copper, we have steadily expanded our portfolio to include a
          variety of base metals, energy products, and agricultural commodities.
        </p>
        <p>
          Our company is built on a foundation of in-depth market knowledge,
          risk management, and a forward outlook on the commodities that are
          foundational to the energy transformation. This approach has enabled
          us to develop robust and sustainable trading strategies that cater to
          the diverse needs of our clients and suppliers.
        </p>
      </div>
    </div>
  );
}
