"use client";
import { useState, useEffect } from "react";

import MainNav from "@/components/client-compents/layout/MainNav";
import BlogLists from "@/components/client-compents/layout/BlogLists";
import SearchFunction from "@/components/client-compents/search/SearchFunction";
import SideNav from "@/components/client-compents/layout/SideNav";
import Footer from "@/components/client-compents/Footer";
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
    <div className="h-full no-scrollbar bg-gray-100 mt-16 ">
      <MainNav />
      <section className="w-full h-full gap-2 flex flex-row mb-8 px-8">
        <div className="w-full flex justify-center xl:w-[80%] h-full overflow-y-scroll no-scrollbar mb-8">
          <BlogLists selectedCategory={selectedCategory} />
        </div>
        <div className="h-full w-[20%] no-scrollbar hidden xl:flex justify-center mr-2  mt-4 mb-6  rounded-2xl pt-4 sticky top-16 px-2">
          <SideNav onCategoryChange={handleCategoryChange} />
        </div>
      </section>
      <Footer />
    </div>
  );
}
