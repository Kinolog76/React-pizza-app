import styles from "./Search.module.scss";
import { useContext, useCallback, useState, useRef, useEffect } from "react";
import { SearchContext } from "../../App";
import debounce from "lodash.debounce";
import { useLocation } from "react-router-dom"; 
function Search() {
  const [value, setValue] = useState("");
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const searchRef = useRef(null);
  const location = useLocation(); 

  useEffect(() => {
    setValue(searchValue);
  }, [searchValue]);

  const inputDebounce = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 400),
    [],
  );

  const onChangeInput = (e) => {
    setValue(e.target.value);
    inputDebounce(e.target.value);
  };

  if (location.pathname === "/cart") {
    return null;
  }

  return (
    <div className={styles.root}>
      <div className={styles.inputBox}>
        <input
          ref={searchRef}
          value={value}
          onChange={onChangeInput}
          type="text"
          placeholder="Поиск пиццы..."
        />
        <span
          onClick={() => {
            setSearchValue("");
            setValue("");
            searchRef.current.value = "";
          }}
          className={searchValue != "" ? styles.clear : ""}>
          ✕
        </span>
      </div>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-search">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <span>Поиск</span>
      </button>
    </div>
  );
}

export default Search;
