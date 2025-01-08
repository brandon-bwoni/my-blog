"use client";
import BlogCard from "./BlogCard";
import { useState } from "react";
import { blogData } from "@/assets/assets";

const BlogLists = () => {
  const [menu, setMenu] = useState("All");
  return (
    <div className="h-full mx-2">
      <div className="flex h-12 lg:h-14 justify-center sm:gap-4 md:gap-6 lg:gap-16 mb-6 bg-black min-w-2xl w-[91%] mx-auto rounded-full text-xs lg:text-sm py-[6px] lg:py-2 ">
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All"
              ? `bg-yellow-300 font-semibold text-black py-1 px-4 rounded-full`
              : "text-white"
          }
        >
          All
        </button>
        <button
          onClick={() => setMenu("Development")}
          className={
            menu === "Development"
              ? `bg-yellow-300 font-semibold text-black px-4 rounded-full`
              : "text-white"
          }
        >
          Development
        </button>
        <button
          onClick={() => setMenu("Security")}
          className={
            menu === "Security"
              ? `bg-yellow-300 font-semibold text-black px-4 rounded-full`
              : "text-white"
          }
        >
          Security
        </button>
        <button
          onClick={() => setMenu("AI/ML")}
          className={
            menu === "AI/ML"
              ? `bg-yellow-300 font-semibold text-black px-4 rounded-full`
              : "text-white"
          }
        >
          AI/ML
        </button>
        <button
          onClick={() => setMenu("Web 3.0")}
          className={
            menu === "Web 3.0"
              ? `bg-yellow-300 font-semibold text-black px-4 rounded-full`
              : "text-white"
          }
        >
          Web 3.0
        </button>
      </div>
      <div className="flex flex-wrap justify-around gap-8 gap-y-8 mb-12 xl:mx-16">
        {blogData
          .filter((item) => (menu === "All" ? true : item.category === menu))
          .map((item, index) => {
            return (
              <BlogCard
                key={index}
                id={item.id}
                title={item.title}
                image={item.image}
                description={item.description}
                category={item.category}
                name={item.name}
              />
            );
          })}
      </div>
    </div>
  );
};

export default BlogLists;
