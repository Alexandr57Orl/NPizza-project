import React from "react";
import styles from "./NotFound.module.scss";

export const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <span className={styles.smaile}>🙄</span>
      <br />
      <h1>Ничего не найдено </h1>
      <p className={styles.description}>
        К сожалению данная страница не существует
      </p>
    </div>
  );
};
