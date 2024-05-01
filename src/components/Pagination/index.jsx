import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

function Pagination({ onChangePage }) {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={2}
      marginPagesDisplayed={1}
      pageCount={8}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;
