import { useState } from "react";
import { SearchBar } from "./SearchBar";

const SearchFunction = () => {
  const [results, setResults] = useState<string[]>([]);

  return (
    <div className="">
      <SearchBar setResults={setResults} />
    </div>
  );
};

export default SearchFunction;
