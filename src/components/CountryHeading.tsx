"use client";

import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import {
  ArrowDownWideNarrow,
  ArrowUpDown,
  ArrowUpRight,
  Search,
} from "lucide-react";
import Card from "./Card";
import { ArrowDownRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface CountryItem {
  id: number;
  title: string;
  link: string;
}

const CountryHeading = ({ title }: { title: string }) => {
  const [activeAcordeon, setActiveAcordeon] = useState(false);

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
    <div className="mb-5 sm:mb-10 max-w-6xl mx-auto px-5">
      <div className="mb-5">
        <div className="flex items-center justify-between pt-5 px-5 pb-5">
          <div className="text-lg sm:text-2xl font-bold">{title}</div>
          <div className="flex items-center gap-6">
            <AnimatePresence>
              {activeAcordeon && (
                <motion.div
                  className="flex items-center gap-6"
                  initial={{ opacity: 0, x: 130 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{
                    opacity: 0,
                    x: [0, -20, 130],
                    transition: {
                      duration: 0.4,
                      times: [0, 0.3, 1],
                      ease: "easeIn",
                    },
                  }}
                  transition={{
                    type: "spring",
                    damping: 12,
                    stiffness: 100,
                    opacity: { duration: 0.4 },
                  }}
                >
                  <span className="hidden sm:block">
                    <Search size={20} />
                  </span>
                  <span className="hidden sm:block">
                    <ArrowUpDown size={20} />
                  </span>
                  <span className="hidden sm:block">
                    <ArrowDownWideNarrow size={20} />
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
            <span
              className={`${
                activeAcordeon
                  ? "bg-[#F3F3F3]"
                  : "bg-[#FF5A3C] hover:bg-[#d84a31]"
              } block p-3 rounded-lg cursor-pointer`}
              onClick={() => setActiveAcordeon(!activeAcordeon)}
            >
              {activeAcordeon ? (
                <ArrowUpRight size={20} />
              ) : (
                <ArrowDownRight size={20} className="text-white" />
              )}
            </span>
          </div>
        </div>
        <AnimatePresence>
          {activeAcordeon && (
            <motion.div
              className="flex items-center gap-6 px-5 pb-4 pt-1 sm:hidden"
              initial={{ opacity: 0, x: 130 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: [0, -20, 130],
                transition: {
                  duration: 0.4,
                  times: [0, 0.3, 1],
                  ease: "easeIn",
                },
              }}
              transition={{
                type: "spring",
                damping: 12,
                stiffness: 100,
                opacity: { duration: 0.4 },
              }}
            >
              <span>
                <Search size={20} />
              </span>
              <span>
                <ArrowUpDown size={20} />
              </span>
              <span>
                <ArrowDownWideNarrow size={20} />
              </span>
            </motion.div>
          )}
        </AnimatePresence>
        <Separator />
      </div>
      <AnimatePresence>
        {activeAcordeon && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              type: "tween",
              damping: 15,
              stiffness: 100,
              opacity: { duration: 0.3 },
            }}
          >
            <Card countryItems={countryItems} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CountryHeading;
