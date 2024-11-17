// SingleComponent.jsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { lineVariants } from "../../utils/animations";
import { useMediaQuery } from "react-responsive";

export default function SingleComponent({ content, lines }) {
  // Destructure the content object
  const { reverseOrder, image, typo } = content;

  // Define the media query for tablets and smaller devices
  const isTabletOrSmaller = useMediaQuery({ query: "(max-width: 768px)" });

  // Create an array of the keys to render
  const keys = ["image", "typo"];

  console.log({isTabletOrSmaller})

  // Reverse the order of keys if the screen is tablet or smaller and reverseOrder is true
  if (reverseOrder && !isTabletOrSmaller) {
    console.log('reverse beshe ')
    keys.reverse();
  }

  return (
    <div className={`${content.header && 'pb-56'} min-h-full content-center`}>
      {/* Page title */}
      {content.header && (
        <div className="grid justify-center text-center lg:py-16 lg:pb-32 py-6">
          <h1 className="text-4xl">{content.header.title}</h1>
          <p className="leading-relaxed">{content.header.subtitle}</p>
        </div>
      )}

      {/* Hero section */}
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 relative lg:static ${
          content.header ? "py-16" : "py-20"
        }`}
      >
        {keys.map((key) => {
          if (key === "image") {
            return (
              <div
                key="image"
                className={`lg:px-10 ${
                  reverseOrder && isTabletOrSmaller ? "pl-10" : "pr-10"
                }`}
              >
                <Image
                  src={image.src}
                  style={{ width: "100%", height: "auto" }}
                  width={image.width}
                  height={image.height}
                  className="rounded-md "
                  alt={image.alt}
                />
              </div>
            );
          }

          if (key === "typo") {
            return (
              <div
                key="typo"
                className={`lg:relative lg:px-10 ${
                  reverseOrder && isTabletOrSmaller ? "pl-10" : "pr-10"
                }`}
              >
                {/* Lines element */}
                {/* {JSON.stringify(lines)} */}
                {lines.map((data) => (
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
                {/* Typo data */}
                <h2 className="text-2xl font-bold mb-4">{typo.sectionTitle}</h2>
                <p className="leading-relaxed">{typo.description}</p>
              </div>
            );
          }

          return null; // Return null for other keys
        })}
      </div>
    </div>
  );
}
