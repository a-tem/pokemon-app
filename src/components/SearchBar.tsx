import { Input } from "antd";
import { useState } from "react";

const SearchBar: React.FC<{
  term: string;
  setTerm: (searchTerm: string) => void;
}> = ({ term, setTerm }) => {
  const [inputValue, setInputValue] = useState(term);
  return (
    <Input.Search
      placeholder="Enter a Pokemon name"
      onSearch={setTerm}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    ></Input.Search>
  );
};

export default SearchBar;
