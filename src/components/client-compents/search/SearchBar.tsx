"use strict";

import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import SingleResult from "./SingleResult";

import axios from "axios";

export function SearchBar({ setResults }: any) {
  const [input, setInput] = useState<string>("");
  const [results, setLocalResults] = useState<any[]>([]);

  const fetchData = (query: string) => {
    const trimmedQuery = query.trim().toLowerCase();
    if (!trimmedQuery) {
      setLocalResults([]);
      setResults([]);
      return;
    }

    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      const data = res.data;
      const results = data.filter((item: any) => {
        return (
          trimmedQuery && item && item.name.toLowerCase().includes(trimmedQuery)
        );
      });
      setLocalResults(results);
      setResults(results);
      console.log(results);
    });
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    fetchData(e.target.value);
  };

  return (
    <div className="relative flex flex-col justify-center items-center">
      {/* Search input */}
      <div className="flex justify-center items-center border-[1.5px] rounded-full min-w-40 px-[1.5px] py-[1.5px] border-gray-600">
        <div className="flex justify-start rounded-full px-2 ">
          <MagnifyingGlassIcon className="sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-black" />
        </div>
        <Input
          value={input}
          onChange={changeHandler}
          type="text"
          placeholder="Search..."
          className="rounded-full outline-none border-none placeholder:text-sm placeholder:text-gray-400 active:outline-none active:border-none caret-gray-700 text-black shadow-none"
        />
      </div>

      {/* Results */}
      {input && results.length > 0 && <ResultsList results={results} />}
    </div>
  );
}

const ResultsList = ({ results }: { results: any[] }) => {
  return (
    <div className="flex flex-col relative bg-white mt-1 h-40 w-[130px] lg:w-[200px] overflow-y-scroll no-scrollbar py-2 pb-2 z-20 px-2 rounded-xl shadow-md">
      {results.map((result: any, index: number) => (
        <SingleResult key={index} result={result?.name || "No Name"} />
      ))}
    </div>
  );
};
