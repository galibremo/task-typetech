"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

const NavBar = () => {
  const [language, setLanguage] = useState("ES");
  const navItems = [
    { title: "Home", link: "#" },
    { title: "About", link: "#" },
    { title: "Properties", link: "#" },
    { title: "Neighborhood", link: "#" },
    { title: "Blogs", link: "#" },
    { title: "Contact", link: "#" },
  ];
  return (
    <header className="p-4 absolute top-0 left-0 right-0">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <Avatar className="h-14 w-14 bg-white rounded-none" />
        <div className="flex items-center space-x-4 md:space-x-8 lg:space-x-14">
          <ul className="hidden md:flex space-x-8 lg:space-x-14">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className="text-white hover:text-blue-600 font-medium"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="md:hidden flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger className="focus:ring-0 focus:outline-none focus:ring-offset-0 text-white">
                <Menu size={34} />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {navItems.map((item, index) => (
                  <DropdownMenuItem key={index}>{item.title}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="md:hidden border border-orange-600 text-white text-xl font-medium py-1 px-2">
            {language}
          </div>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-[65px] bg-orange-600 text-white text-base font-medium focus:ring-0 focus:outline-none focus:ring-offset-0 hidden md:flex">
              <SelectValue placeholder="Select a Language">
                {language}
              </SelectValue>
            </SelectTrigger>
            <SelectContent align="end">
              <SelectGroup>
                <SelectItem value="ES">English</SelectItem>
                <SelectItem value="BN">Bangla</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
