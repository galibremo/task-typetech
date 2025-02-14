import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <section className="w-full bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.4)),url('/bg-img.png')] bg-cover bg-center min-h-[558px] xl:min-h-[871px] flex justify-center items-center flex-col absolute top-0 z-0 text-white">
        <div className="flex flex-col items-center max-w-lg lg:max-w-5xl mx-auto">
          <div className="flex items-center space-x-2 lg:space-x-4">
            <Image
              src="/Icon.svg"
              alt="logo-home"
              width={24}
              height={24}
              className="w-4 h-4 lg:w-6 lg:h-6"
            />
            <span className="text-sm lg:text-lg font-medium lg:font-semibold">
              Real Estate Agency
            </span>
          </div>
          <div className="text-center text-3xl md:text-5xl lg:text-8xl font-semibold px-5">
            Miami Real Estate
            <br /> Specialists
            <p className="text-center mt-1 lg:mt-4 text-sm font-light">
              your specialists in residential and commercial properties. From
              dream homes to prime business spaces, trust our unique <br/> expertise
              to guide you in Miami/South Florida's dynamic market.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
