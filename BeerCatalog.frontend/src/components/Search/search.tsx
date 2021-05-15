import { KeyboardEventHandler } from "react";
import { ChangeEvent, useState } from "react";
import { BsSearch } from "react-icons/bs";

import "./search.scss";

const ENTER_KEY = "Enter";

interface SearchProps {
  placeholder?: string;
  onSearch: (input: string) => void;
}

const Search = ({ placeholder, onSearch }: SearchProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (event.key === ENTER_KEY) {
      onSearch(inputValue);
    }
  };

  const handleClick = () => {
    onSearch(inputValue);
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="search">
      <input className="search__input" type="input" placeholder={placeholder} value={inputValue} onChange={handleInput} onKeyDown={handleKeyDown} />
      <div className="search__button" onClick={handleClick}>
        <BsSearch />
      </div>
    </div>
  );
};

export default Search;
