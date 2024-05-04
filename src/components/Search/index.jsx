import styles from "./Search.module.scss";
import { useContext } from "react";
import { SearchContext } from "../../App";

function Search() {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  return (
    <div className={styles.root}>
      <div className={styles.inputBox}>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="Поиск пиццы..."
        />
        <span onClick={() => setSearchValue("")} className={searchValue != "" ? styles.clear : ""}>
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
