import Image from "next/image";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { CountryItem } from "./CountryHeading";

interface CardProps {
  countryItems: CountryItem[];
}

const Card: React.FC<CardProps> = ({ countryItems }) => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
        {countryItems &&
          countryItems.map((item) => (
            <div
              key={item.id}
              className="w-full max-w-[350px] h-[298px] rounded-[20px] bg-[#F3F3F3]/30 flex flex-col items-center justify-center border-[2px] border-[#F3F3F3]  hover:text-[#FF5A3C] hover:bg-[#F3F3F3]/70 transition-colors delay-200"
            >
              <Image
                src={item.link}
                alt={`${item.title}`}
                width={300}
                height={150}
                className="w-[85%] max-w-[302px] h-[177px] rounded-[24px]"
              />
              <div className="flex items-center justify-between w-full px-7 mt-5">
                <span className="text-xl font-bold block">{item.title}</span>
                <span className="bg-[#F3F3F3] block p-3 rounded-lg">
                  <ArrowUpRight size={20} />
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Card;
