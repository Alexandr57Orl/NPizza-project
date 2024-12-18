import React from "react";

import { Category } from "../components/Сategory/Category";
import { Sort } from "../components/sort/sort";
import ListPizza from "../components/listPizza/listPizza";
import Pagination from "../components/Pagination/index";
import { useSelector } from "react-redux";

import qs from "qs";
import { useNavigate } from "react-router-dom";
import { RootState } from "../services/store";

export const Home = () => {
  const navigate = useNavigate();

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
  }, [categoryId, sort.sortPropety, currentPage, searchValue]);

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
