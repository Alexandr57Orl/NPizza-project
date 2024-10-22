import Pizza from "../pizzaItem/Pizza";
import Skeleton from "../pizzaItem/Skeleton";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { useFetchItemsQuery } from "../../services/slices/itemsSlice";
import { IPizza } from "../../utilits/interfaceApp";
import { RootState } from "../../services/store";
import { useSelector } from "react-redux";
import { Key } from "react";

export const ListPizza: React.FC = () => {
  const { categoryId, sort, currentPage, searchValue } = useSelector(
    (state: RootState) => state.filter
  );

  const { data, isLoading, error } = useFetchItemsQuery({
    sortBy: sort.sortPropety,
    order: sort.sortPropety.includes("-") ? "asc" : "desc",
    category: categoryId > 0 ? `category=${categoryId}` : "",
    search: searchValue.trim() === "" ? "" : `&search=${searchValue}`,
    currentPage: currentPage,
  });
  const filteredItems =
    data &&
    data.map((pizza: IPizza, index: Key) => <Pizza key={index} {...pizza} />);

  const skeletons = [...new Array(7)].map(() => <Skeleton key={uuidv4()} />);

  return (
    <>
      {isLoading ? (
        skeletons
      ) : error ? (
        <div className="content__error-info">
          <h2>Произошла ошибка</h2>
          <p>
            Попробуйте{" "}
            <Link to="/" replace className="content__error-text">
              {" "}
              перезагрузить{" "}
            </Link>
            страницу
          </p>
        </div>
      ) : (
        <>{filteredItems}</>
      )}
    </>
  );
};
export default ListPizza;
