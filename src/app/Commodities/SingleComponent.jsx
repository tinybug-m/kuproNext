// SingleComponent.jsx

"use client";

import Image from "next/image";

export default function SingleComponent({ content }) {
  // Destructure content data to retrieve image, title, and description
  const { image, title, description } = content;

  return (
    <div className={`flex flex-col items-center ${content.header ? 'pt-10': 'pt-28'} pb-20 px-4`}>
      {/* Page title */}
      {content.header && (
        <div className="grid justify-center text-center pb-24">
          <h1 className="text-4xl">{content.header.title}</h1>
          <p className="leading-relaxed">{content.header.subtitle}</p>
        </div>
      )}
      {/* Image and Description Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start ">
        {/* Image */}
        <div className="flex-shrink-0 mb-6 lg:mb-0 lg:pr-10">
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
            className="rounded-md "
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        {/* Description */}
        <div className="text-lg leading-relaxed relative">
          <h1 className="mb-8 text-2xl font-bold mb-2">{title}</h1>
          {description.map((desc) => {
            return <p className="mb-8">{desc}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
