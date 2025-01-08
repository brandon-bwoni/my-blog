import { useState } from "react";
import { SearchBar } from "./SearchBar";

const SearchFunction = () => {
  const [results, setResults] = useState<string[]>([]);

  return (
    <div className="top-4 absolute">
      <SearchBar setResults={setResults} />
    </div>
  );
};

export default SearchFunction;
