import React from "react";
import styles from "../../App.module.css";
import { PaginationProps } from "./interfaces";

const Pagination: React.FC<PaginationProps> = ({ page, setPage }) => {
  return (
    <div className={styles.pagination}>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <span>Page {page}</span>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default Pagination;
