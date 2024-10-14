import Pizza from "../pizzaItem/Pizza";
// import getItems from "../../utilits/pizzaItems";
import Skeleton from "../pizzaItem/Skeleton";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { RootState } from "../../services/store";

export const ListPizza = () => {
  const { items, status } = useSelector((state: RootState) => state.items);

  const filteredItems = items.map((pizza) => (
    <Pizza key={`pizza-${pizza.id}-${uuidv4()}`} {...pizza}></Pizza>
  ));

  const skeletons = [...new Array(7)].map(() => <Skeleton key={uuidv4()} />);

  return (
    <>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>Произошла ошибка</h2>
          <p>
            Попробуйте{" "}
            <Link to="/" replace className="content__error-text">
              {" "}
              перезагрузить{" "}
            </Link>
            страницу
          </p>
        </div>
      ) : (
        <>{status === "loading" ? skeletons : filteredItems}</>
      )}
    </>
  );
};
export default ListPizza;
