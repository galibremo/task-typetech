import React from "react";
import { Separator } from "@/components/ui/separator";
import { ArrowDownRight } from "lucide-react";

const CountryHeading = ({ title }: { title: string }) => {
  return (
    <div className="mb-5 sm:mb-16 max-w-6xl mx-auto px-5">
      <div className="flex items-center justify-between pt-5 px-5 pb-5">
        <div className="text-lg sm:text-2xl font-bold">{title}</div>
        <div className="flex items-center gap-6">
          <span className="bg-[#FF5A3C] block p-3 rounded-lg">
            <ArrowDownRight size={20} className="text-white" />
          </span>
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default CountryHeading;
