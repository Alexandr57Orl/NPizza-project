import React from "react";
import styles from "./VacancyCard.module.scss";
import { vacancies } from "../../utilits/vacancy";
import { Link } from "react-router-dom";

export const VacancyCard: React.FC = () => {
  return (
    <div className={styles.containerVacancy}>
      {vacancies.map((vacancy, index) => (
        <div key={index} className={styles.card}>
          <h2 className={styles.title}>{vacancy.title}</h2>
          <p className={styles.description}>{vacancy.description}</p>
          <ul className={styles.requirements}>
            {vacancy.requirements.map((requirement, index) => (
              <li key={index} className={styles.requirement}>
                {requirement}
              </li>
            ))}
          </ul>
          <div className={styles.footer}>
            <span className={styles.salary}>{vacancy.salary}</span>
            <button className={styles.applyButton}>Откликнуться</button>
          </div>
        </div>
      ))}
      <Link to="/contacts" className="button button--black">
        <span>Вернуться назад</span>
      </Link>{" "}
      <Link to="/" className="button button--black">
        <span>Главное меню</span>
      </Link>
    </div>
  );
};
