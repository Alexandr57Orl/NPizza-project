import ReactPaginate from "react-paginate";
import styles from "../Pagination/pagination.module.scss";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../services/slices/filterSlice";

const Pagination = () => {
  const dispatch = useDispatch();

  const onChangePage = (arg: number) => {
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
      previousLabel="< "
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
