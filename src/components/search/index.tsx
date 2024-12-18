import React from "react";
import styles from "./search.module.scss";
import { useRef } from "react";
import debounce from "lodash.debounce";
import { setSearchValue } from "../../services/slices/filterSlice";
import { useDispatch } from "react-redux";

interface SearchProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Search: React.FC<SearchProps> = (props) => {
  const { value, setValue } = props;
  const dispatch = useDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const svgClearRef = useRef<SVGSVGElement>(null);
  const handleSvgClick = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current?.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 500),
    []
  );

  const oneChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 50 50"
        onClick={handleSvgClick}
      >
        <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
      </svg>
      <input
        placeholder="Поиск желаемого..."
        className={styles.input_search}
        value={value}
        onChange={(evt) => oneChangeInput(evt)}
        ref={inputRef}
      ></input>
      {value && (
        <svg
          ref={svgClearRef}
          onClick={handleSvgClick}
          className={styles.icon_clear}
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 50 50"
        >
          <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
        </svg>
      )}
    </div>
  );
};

export default Search;
