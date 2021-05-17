import { KeyboardEventHandler, useCallback } from "react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

import { ENTER_KEY } from "../../constants/keyboardKeys";

import "./search.scss";

interface SearchProps {
  placeholder?: string;
  onSearch: (input: string) => void;
}

const Search = ({ placeholder, onSearch }: SearchProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown: KeyboardEventHandler = useCallback(
    (event) => {
      if (event.key === ENTER_KEY) {
        onSearch(inputValue);
      }
    },
    [inputValue, onSearch]
  );

  const handleClick = useCallback(() => {
    onSearch(inputValue);
  }, [inputValue, onSearch]);

  const handleInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }, []);

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
