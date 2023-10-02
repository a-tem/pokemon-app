import { Input } from "antd";
import { ReactNode, useState } from "react";

const SearchBar: React.FC<{
  term: string;
  setTerm: (searchTerm: string) => void;
  children?: ReactNode;
}> = ({ term, setTerm, children }) => {
  const [inputValue, setInputValue] = useState(term);
  return (
    <Input.Search
      data-testid="search-box"
      placeholder={children as string}
      onSearch={setTerm}
      value={inputValue}
      // Note: toLowerCase here for prevent API errors caused Capital letters. Could be handled on the interceptor level, but it's too much for such simple app.
      onChange={(e) => setInputValue(e.target.value.toLowerCase())}
    ></Input.Search>
  );
};

export default SearchBar;
