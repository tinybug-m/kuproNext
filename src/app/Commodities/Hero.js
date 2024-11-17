"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="p-6 lg:p-12">
        <h2 className="text-2xl font-bold mb-4">Soft Commodities</h2>
        <p className="leading-relaxed">Our most recent addition to our offerings, we have successfully found a place for our company in the soft commodities trade...</p>
      </div>
      <div>
        <Image src="/softcm.png" width={517} height={246} alt="Soft Commodities" className="w-full h-full object-cover" />
      </div>
    </>
  );
}
