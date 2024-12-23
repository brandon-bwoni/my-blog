import React from "react";
import SearchFunction from "../search/SearchFunction";

const SideNav = () => {
  return (
    <div className="px-2">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-center text-2xl text-gray-800 font-semibold">
          Search
        </h1>
        <SearchFunction />
      </div>
    </div>
  );
};

export default SideNav;
