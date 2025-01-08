"use client";
import { useState } from "react";
import { blogData } from "@/assets/assets";
import SkeletonCard from "./SkeletonCard";

const SkeletonList = ({ selectedCategory }) => {
  const [menu, setMenu] = useState("All");

  const filteredBlogs = blogData.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  return (
    <div className="flex justify-center items-center  mx-2">
      <div className="h-screen flex flex-wrap justify-around gap-16 gap-y-8 mb-12 xl:mx-16">
        {filteredBlogs.map((item, index) => {
          return <SkeletonCard key="index" />;
        })}
      </div>
    </div>
  );
};

export default SkeletonList;
