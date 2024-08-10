import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
function Pagination({ currentPage, onChangePage, length }) {
  const [pizzasData, setPizzasData] = useState([]);

  useEffect(() => {
    const url = `https://66300677c92f351c03d8dd7a.mockapi.io/items`;
    axios
      .get(url)
      .then((res) => {
        setPizzasData(res.data);
      })
      .catch((error) => console.error("Ошибка при загрузке данных:", error));
  }, []);

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={2}
      marginPagesDisplayed={1}
      pageCount={pizzasData.length / 8}
      forcePage={currentPage > 0 ? currentPage - 1 : 0}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;
