import React from "react";
import Pizza from "../pizzaItem/Pizza";
// import getItems from "../../utilits/pizzaItems";
import Skeleton from "../pizzaItem/Skeleton";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";

export const ListPizza = () => {
  const isLoading = useSelector((state) => state.loading.isLoading);
  const items = useSelector((state) => state.items.items);

  const filteredItems = items.map((pizza) => (
    <Pizza key={`pizza-${pizza.id}-${uuidv4()}`} {...pizza}></Pizza>
  ));
  const skeletons = [...new Array(7)].map(() => <Skeleton key={uuidv4()} />);
  return <>{isLoading ? skeletons : filteredItems}</>;
};
export default ListPizza;
