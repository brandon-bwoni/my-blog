import React from "react";
import image from "@/assets/frontImg.jpg";
import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import LatestPost from "./LatestPost";

const Hero = () => {
  return (
    <>
      <div className="wrap h-[50vh] xl:h-[85vh] overflow-hidden w-full rounded-b-2xl mb-4">
        <LatestPost />
        <div className="w-full">
          <Image
            src={image}
            alt="hero"
            className="w-full sm:h-full lg:h[80%] xl:h-[75%] object-cover rounded-b-3xl"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
