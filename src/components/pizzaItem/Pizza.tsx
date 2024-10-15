import React from "react";
import { v4 as uuidv4 } from "uuid";

import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../services/slices/cartSlice";
import { selectCartItemById } from "../../services/slices/cartSlice";
import PizzaPopup from "./PizzaPopap";

const variableTesto = ["Тонкое", "Традиционное"];
interface IPizzaProps {
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  id: number;
  description: string;
}

const Pizza: React.FC<IPizzaProps> = (props: IPizzaProps) => {
  const { title, price, imageUrl, sizes, types, id, description } = props;
  //Логика попапа
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const dispatch = useDispatch();

  const cartItem = useSelector(selectCartItemById(id));
  const addedCount = cartItem ? cartItem.count : 0;

  const [activeType, setActiveType] = React.useState(0);

  const [activeSize, setActiveSize] = React.useState(0);

  const addPizzaToCart = () => {
    const item = {
      Itemid: uuidv4(),
      ...props,
      size: sizes[activeSize],
      type: variableTesto[activeType],
      sizes: props.sizes,
      types: props.types,
    };

    dispatch(addItem(item));
  };

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <img
          className="pizza-block__image"
          src={imageUrl}
          alt="Pizza"
          onClick={handlePopupOpen}
        />
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((type) => (
              <li
                key={uuidv4()}
                onClick={() => setActiveType(type)}
                className={activeType === type ? "active" : ""}
              >
                {variableTesto[type]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, index) => (
              <li
                key={uuidv4()}
                onClick={() => setActiveSize(index)}
                className={activeSize === index ? "active" : ""}
              >
                {size} см.
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <div
            className="button button--outline button--add"
            onClick={addPizzaToCart}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>

            {addedCount > 0 && <i>{addedCount}</i>}
          </div>
        </div>
      </div>
      {isPopupOpen && (
        <PizzaPopup
          title={props.title}
          price={props.price}
          imageUrl={props.imageUrl}
          sizes={props.sizes}
          types={props.types}
          onClose={handlePopupClose}
          description={description}
          addPizzaInPopap={addPizzaToCart}
          id={id}
        />
      )}
    </div>
  );
};

export default Pizza;
