import React from "react";

import { Category } from "../components/Сategory/Category";
import { Sort } from "../components/sort/sort";
import ListPizza from "../components/listPizza/listPizza";
import Pagination from "../components/Pagination/index";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchItems } from "../services/slices/itemsSlice";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { RootState } from "../services/store";

export const Home = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch<any>();

  //redux-test
  const { categoryId, sort, currentPage, searchValue } = useSelector(
    (state: RootState) => state.filter
  );
  // get pagination from Redux

  React.useEffect(() => {
    const queryString = qs.stringify({
      sortPropety: sort.sortPropety,
      categoryId,
      currentPage,
    });
    navigate(`?${queryString}`);
  }, [categoryId, sort.sortPropety, currentPage]);

  React.useEffect(() => {
    const getItems = async function getItems() {
      const sortBy = sort.sortPropety.replace("-", "");
      const order = sort.sortPropety.includes("-") ? "asc" : "desc";
      const category = categoryId > 0 ? `category=${categoryId}` : "";
      const search = searchValue.length > 0 ? `&search=${searchValue}` : "";

      dispatch(fetchItems({ sortBy, order, category, search, currentPage }));
    };
    window.scrollTo(0, 0);
    getItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, sort.sortPropety, searchValue, currentPage]);

  return (
    <>
      <div className="content__top">
        <Category />
        <Sort />
      </div>

      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        <ListPizza />
      </div>
      <Pagination />
    </>
  );
};
