import React from "react";
import categories from "../../utilits/categoryNav";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../../services/slices/filterSlice";
import { RootState } from "../../services/store"; // Import the RootState type

export const Category: React.FC = () => {
  const dispatch = useDispatch();

  const categoryId = useSelector((state: RootState) => state.filter.categoryId);

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={category}
            onClick={() => onChangeCategory(index)}
            className={categoryId === index ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};
