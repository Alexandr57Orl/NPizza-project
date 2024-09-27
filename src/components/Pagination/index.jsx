import React from "react";
import ReactPaginate from "react-paginate";
import styles from "../Pagination/pagination.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../services/slices/paginationSlice";

const Pagination = () => {
  const dispatch = useDispatch();

  const { currentPage } = useSelector((state) => state.pagination.currentPage);

  const onChangePage = (arg) => {
    dispatch(setCurrentPage(arg));
  };
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=" >"
      onPageChange={(evt) => onChangePage(evt.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={3}
      forcePage={currentPage - 1}
      previousLabel="< "
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
