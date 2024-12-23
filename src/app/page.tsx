"use client";
import { useState, useEffect } from "react";

import MainNav from "@/components/layout/MainNav";
import BlogLists from "@/components/layout/BlogLists";
import SearchFunction from "@/components/search/SearchFunction";
import SideNav from "@/components/layout/SideNav";
// import SkeletonList from "@/components/SkeletonList";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="no-scrollbar mt-16">
      <MainNav onCategoryChange={handleCategoryChange} />
      <section className="w-full h-screen  flex flex-row  ">
        <div className="w-full lg:w-[80%] h-full overflow-y-scroll no-scrollbar mb-8">
          <BlogLists selectedCategory={selectedCategory} />
        </div>
        <div className="w-[20%] hidden xl:flex justify-center mr-2 bg-gray-200 mt-3 mb-6  rounded-2xl pt-8 sticky top-16 px-2">
          <SideNav />
        </div>
      </section>
    </div>
  );
}
