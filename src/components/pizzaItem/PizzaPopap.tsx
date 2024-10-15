// src/components/pizzaItem/PizzaPopup.tsx
import React from "react";
import styles from "./PizzaPopup.module.scss";
import { Link } from "react-router-dom";

interface IPizzaPopupProps {
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  onClose: () => void;
  description: string; // добавить description
  addPizzaInPopap(id: number): void;
  id: number;
}

const PizzaPopup: React.FC<IPizzaPopupProps> = (props) => {
  const handleAddToCart = () => {
    // вызвать функцию добавления пиццы в корзину
    props.addPizzaInPopap(props.id);
  };
  return (
    <div className={styles.popupContainer} onClick={props.onClose}>
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={props.onClose}>
          Закрыть
        </button>
        <img src={props.imageUrl} alt={props.title} />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>Цена: {props.price} руб.</p>
        <div className={styles.footerBtn}>
          <button onClick={handleAddToCart}>Добавить в корзину</button>
          <button>
            <Link to="/cart">Перейти в корзину</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaPopup;
