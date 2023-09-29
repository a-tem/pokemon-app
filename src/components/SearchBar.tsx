import { Input } from "antd";
import { ReactNode, useState } from "react";

const SearchBar: React.FC<{
  term: string;
  setTerm: (searchTerm: string) => void;
  children: ReactNode;
}> = ({ term, setTerm, children }) => {
  const [inputValue, setInputValue] = useState(term);
  return (
    <Input.Search
      placeholder={children as string}
      onSearch={setTerm}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    ></Input.Search>
  );
};

export default SearchBar;
