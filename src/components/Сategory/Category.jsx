import React from "react";
import categories from "../../utilits/categoryNav";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../../services/slices/filterSlice";

export const Category = () => {
  const dispatch = useDispatch();

  const categoryId = useSelector((state) => state.filter.categoryId);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={category}
            onClick={(id) => onChangeCategory(id)}
            className={categoryId === index ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};
