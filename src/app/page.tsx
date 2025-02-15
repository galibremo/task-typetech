import CountryHeading from "@/components/CountryHeading";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <section className="w-full bg-[linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.4)),url('/bg-img.png')] bg-cover bg-center min-h-[558px] xl:min-h-[871px] flex justify-center items-center flex-col text-white">
        <div className="flex flex-col items-center max-w-lg lg:max-w-5xl mx-auto">
          <div className="flex items-center space-x-2 lg:space-x-4">
            <Image
              src="/Icon.svg"
              alt="logo-home"
              width={24}
              height={24}
              className="w-4 h-4 lg:w-6 lg:h-6"
            />
            <span className="text-sm lg:text-lg font-light">
              Real Estate Agency
            </span>
          </div>
          <div className="text-center text-3xl md:text-5xl lg:text-[96px] font-semibold px-5">
            Miami Real Estate
            <br /> Specialists
            <p className="text-center mt-1 lg:mt-4 text-sm lg:text-[15.5px] font-light">
              your specialists in residential and commercial properties. From
              dream homes to prime business spaces, trust our <br /> unique
              expertise to guide you in Miami/South Florida&rsquo;s dynamic
              market.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full mt-5 sm:mt-16 h-[1722px]">
        <CountryHeading title={"Broward Country"} />
        <CountryHeading
          title={"Miami Dade Country"}
          isInitiallyExpanded={true}
        />
        <CountryHeading title={"Broward Country"} />
        <CountryHeading title={"Monroe Country"} />
      </section>
    </>
  );
}
