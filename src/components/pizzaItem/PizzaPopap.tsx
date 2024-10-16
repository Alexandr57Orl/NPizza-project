import React from "react";
import styles from "./PizzaPopup.module.scss";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

interface IPizzaPopupProps {
  title: string;
  price: number;
  imageUrl: string;
  onClose: () => void;
  description: string; // добавить description
  addPizzaInPopap: (id: number) => void;
  id: number;
  isOpen: boolean;
}

const PizzaPopup: React.FC<IPizzaPopupProps> = (props) => {
  const {
    title,
    price,
    imageUrl,
    description,
    isOpen,
    addPizzaInPopap,
    id,
    onClose,
  } = props;
  const handleAddToCart = () => {
    // вызвать функцию добавления пиццы в корзину
    addPizzaInPopap(id);
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={() => onClose()}>
      {isOpen && (
        <motion.div
          className={styles.popupContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            className={styles.popupContent}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
          >
            <button
              className={styles.closeButton}
              onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
              }}
            >
              Закрыть
            </button>
            <img
              src={imageUrl}
              alt={title}
              onClick={(e) => e.stopPropagation()}
            />
            <h2>{title}</h2>
            <p onClick={(e) => e.stopPropagation()}>{description}</p>
            <p>Цена: {price} руб.</p>
            <div className={styles.footerBtn}>
              <button onClick={handleAddToCart}>Добавить в корзину</button>
              <button>
                <Link to="/cart">Перейти в корзину</Link>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PizzaPopup;
