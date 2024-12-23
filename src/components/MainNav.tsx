"use client";
import { useState, useEffect } from "react";
import {
  PaperAirplaneIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Search } from "./Search";

const MainNav = () => {
  const [navSize, setNavSize] = useState("16");
  const [toggleMenu, setToggleMenu] = useState(false);
  const [navColor, setNavColor] = useState("transparent");

  const listenScrollEvent = () => {
    window.scrollY > 14 ? setNavColor("black") : setNavColor("transparent");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div className="flex justify-center">
      <nav
        className={`h-${navSize} fixed top-0 lg:top-2 w-full lg:w-[90%] z-50 bg-${navColor} lg:rounded-full mx-auto py-1 px-2 `}
      >
        <div className="h-14 flex mx-auto w-[90%]">
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
          <div className="w-2/3 flex justify-end items-center gap-10 xl:gap-16">
            <div className="hidden text-white lg:flex gap-8 xl:gap-16 font-medium text-sm">
              <Link href="/" className="">
                Home
              </Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className="">
              <Search />
            </div>
            {/* Mobile navigation toggle */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                <Bars3Icon className="h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full  bg-black overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8  py-4">
            <div className="text-white font-semibold tracking-wider">
              <ul className="flex flex-col gap-8">
                <li className="border-b border-gray-200 pb-2 ">
                  <Link href="/" onClick={() => setToggleMenu(!toggleMenu)}>
                    <p className="ml-2 text-lg">Home</p>
                  </Link>
                </li>
                <li className="border-b border-gray-200 pb-2 ">
                  <Link
                    href="/about"
                    onClick={() => setToggleMenu(!toggleMenu)}
                  >
                    <p className="ml-2 text-lg">About</p>
                  </Link>
                </li>
                <li className="border-b border-gray-200 pb-2 ">
                  <Link
                    href="/contact"
                    onClick={() => setToggleMenu(!toggleMenu)}
                  >
                    <p className="ml-2 text-lg">Contact</p>
                  </Link>
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
