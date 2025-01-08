import React, { ReactNode } from "react";
import SearchFunction from "../search/SearchFunction";
import BlogsNav from "../BlogsNav";

interface BlogNavProps {
  onCategoryChange?: (category: string) => void;
}

const SideNav = ({ onCategoryChange }: BlogNavProps) => {
  return (
    <div className="px-2">
      <div className="flex flex-col gap-1 ">
        <SearchFunction />
      </div>
      <div className="w-full mt-14 py-3 px-2 ml-2 rounded-2xl bg-gray-200 ">
        <h1 className="px-2 py-1 text-xl ">Categories</h1>
        <BlogsNav onCategoryChange={onCategoryChange} />
      </div>
      <div className="w-full mt-4 py-3 px-2 ml-3 rounded-2xl bg-gray-200 ">
        <h1 className="py-1 px-2 text-xl ">Top articles</h1>
        <ol className="flex flex-col gap-3 text-sm  py-1 px-3 ">
          <li>Article 1</li>
          <li>Article 2</li>
          <li>Article 3</li>
          <li>Article 4</li>
          <li>Article 5</li>
        </ol>
      </div>
      {/* <div className="mt-4 py-2 px-2 rounded-2xl bg-gray-200 "></div> */}
    </div>
  );
};

export default SideNav;
