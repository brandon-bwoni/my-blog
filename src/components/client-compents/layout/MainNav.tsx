"use client";
import React, { useState, useEffect } from "react";
import { PaperAirplaneIcon, Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import BlogsNav from "../BlogsNav";
import SearchFunction from "../search/SearchFunction";
import { usePathname } from "next/navigation";
import BlogsNavDropdown from "../BlogsNavDropdown";

interface BlogNavProps {
  onCategoryChange?: (category: string) => void;
}

const MainNav: React.FC = ({ onCategoryChange }: BlogNavProps) => {
  const [navSize, setNavSize] = useState("16");
  const [toggleMenu, setToggleMenu] = useState(false);
  const [navColor, setNavColor] = useState("transparent");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const pathname = usePathname();

  // Listen to scroll event

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onCategoryChange && onCategoryChange(category);
  };

  return (
    <div className="flex justify-center">
      <nav className="h-16 fixed top-0 w-full z-50 bg-black mx-auto py-1 px-2">
        <div className="h-16 flex mx-auto w-full lg:w-[95%]">
          {/* Primary menu and logo */}
          <div className="w-1/3 flex items-center justify-start gap-40">
            <div>
              <Link
                href="/"
                className="flex gap-1 font-bold text-white items-center "
              >
                <PaperAirplaneIcon className="h-6 w-6 text-white" />
                <span>Logo.io</span>
              </Link>
            </div>
          </div>
          {/* secondary */}
          <div className="w-2/3  justify-end  items-center gap-8 xl:gap-16 px-1 lg:flex">
            <div className="hidden justify-end  items-center gap-8 xl:gap-16 px-6 lg:flex">
              <Link href="#">
                <p className="text-white hover:text-yellow-300 text-sm">Home</p>
              </Link>
              <Link href="/about">
                <p className="text-white hover:text-yellow-300 text-sm">
                  About
                </p>
              </Link>
            </div>
            {/* <div className="hidden text-white lg:flex gap-8 xl:gap-16 font-medium text-sm">
              {pathname === "/" && (
                <BlogsNav onCategoryChange={onCategoryChange} />
              )}
            </div> */}
            <div className="flex lg:hidden pb-1">
              <SearchFunction />
            </div>
            {/* Mobile navigation toggle */}
            <div className="lg:hidden flex justify-end items-center mt-4">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                <Bars3Icon className="h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed  z-40 w-full  bg-black overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8 py-4">
            <div className="text-white tracking-wider">
              <ul className="flex flex-col gap-8">
                <li className="border-b border-gray-200 pb-2 ">
                  <Link href="/" onClick={() => setToggleMenu(!toggleMenu)}>
                    <p className="px-5 py-2 text-sm">Home</p>
                  </Link>
                </li>
                <li className="border-b border-gray-200 pb-2 ">
                  <Link
                    href="/about"
                    onClick={() => setToggleMenu(!toggleMenu)}
                  >
                    <p className="px-5 py-2 text-sm">About</p>
                  </Link>
                </li>
                <li className="border-b border-gray-200">
                  <BlogsNavDropdown
                    onCategoryChange={handleCategoryChange}
                    closeMenu={() => setToggleMenu(false)}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainNav;

/* <Link href="/" className="hover:text-yellow-300">
                Home
              </Link>
              <Link href="/about" className="hover:text-yellow-300">
                About
              </Link>
              <Link href="/contact" className="hover:text-yellow-300">
                Contact
              </Link> */
