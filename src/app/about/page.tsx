import { Crumb } from "@/components/Crumb";
import React from "react";

const page = () => {
  return (
    <div className="h-screen">
      <div className="h-[20vh] lg:h-[30vh] bg-black flex justify-center items-center pt-8 relative">
        <h1 className="text-3xl lg:text-4xl font-bold text-white">About</h1>
        <span className="absolute left-16">
          <Crumb />
        </span>
      </div>
    </div>
  );
};

export default page;
