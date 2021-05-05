import { ChangeEvent, useState } from "react";
import { BsSearch } from "react-icons/bs";

import "./search.scss";

interface SearchProps {
  placeholder?: string;
  onSearch: (input: string) => void;
}

const Search = ({ placeholder, onSearch }: SearchProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    onSearch(inputValue);
  };

  const handleInput = (event: ChangeEvent) => {
    setInputValue((event.target as HTMLInputElement).value);
  };

  return (
    <div className="search">
      <input className="search__input" type="input" placeholder={placeholder} value={inputValue} onChange={handleInput} />
      <div className="search__button" onClick={handleClick}>
        <BsSearch />
      </div>
    </div>
  );
};

export default Search;
