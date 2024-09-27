import React from "react";
import axios from "axios";

import { Category } from "../components/Сategory/Category";
import { Sort } from "../components/sort/sort";
import ListPizza from "../components/listPizza/listPizza";
import Pagination from "../components/Pagination/index";
import { useSelector } from "react-redux";
import { setIsLoading } from "../services/slices/loadingSlice";
import { useDispatch } from "react-redux";
import { setItems } from "../services/slices/itemsSlice";
import { SearchContext } from "../App";

export const Home = () => {
  const { searchValue } = React.useContext(SearchContext);
  const dispatch = useDispatch();

  const changeLoading = (value) => {
    dispatch(setIsLoading(value));
  };
  //redux-test
  const { categoryId, sort } = useSelector((state) => state.filter);
  // get pagination from Redux
  const { currentPage } = useSelector((state) => state.pagination);

  React.useEffect(() => {
    changeLoading(true);
    const getItems = async function getItems() {
      const sortBy = sort.sortPropety.replace("-", "");
      const order = sort.sortPropety.includes("-") ? "asc" : "desc";
      const category = categoryId > 0 ? `category=${categoryId}` : "";
      const search = searchValue.length > 0 ? `&search=${searchValue}` : "";
      axios
        .get(
          `https://66eb270b55ad32cda47bd76d.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`
        )
        .then((response) => {
          dispatch(setItems(response.data));
          changeLoading(false);
        })
        .catch((error) => {
          console.error("Ошибка:", error);
          dispatch(setItems([]));
          changeLoading(false);
        });
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
