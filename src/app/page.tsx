import Card from "@/components/Card";
import CountryHeading from "@/components/CountryHeading";
import Image from "next/image";
import React from "react";

export interface CountryItem {
  id: number;
  title: string;
  link: string;
}

export default function page() {
  const countryItems: CountryItem[] = [
    { id: 1, title: "Miami-Dade County", link: "/Miami-Dade-County.jpg" },
    { id: 2, title: "Brickell", link: "/Brickell.jpg" },
    { id: 3, title: "Downtown Miami", link: "/Downtown-Miami.jpg" },
    { id: 4, title: "Wynwood", link: "/Wynwood.jpg" },
    { id: 5, title: "Edgewater", link: "/Edgewater.jpg" },
    { id: 6, title: "Doral Central", link: "/Doral-Central.jpg" },
    { id: 7, title: "Mid Beach", link: "/Mid-Beach.jpg" },
    { id: 8, title: "South Beach", link: "/South-Beach.jpg" },
    { id: 9, title: "Miami", link: "/Miami.jpg" },
    { id: 10, title: "Founders Park", link: "/Founders-Park.jpg" },
    { id: 11, title: "Dorai Central Park", link: "/Dorai-Central-Park.jpg" },
  ];

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
              expertise to guide you in Miami/South Florida's dynamic market.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full mt-5 sm:mt-16">
        <CountryHeading title={"Broward Country"} />
        <Card countryItems={countryItems} />
        <CountryHeading title={"Broward Country"} />
        <CountryHeading title={"Monroe County"} />
      </section>
    </>
  );
}
