import React, { useState } from "react";
import styles from "./contact.module.scss";
import { cities, groupUrls, mobile } from "../../utilits/cities";
export const ContactForm = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCityUrl, setSelectedCityUrl] = useState("");
  const [selectedMobile, setSelectedMobile] = useState("");

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
    setSelectedCityUrl(groupUrls[event.target.value]);
    setSelectedMobile(mobile[event.target.value]);
  };

  return (
    <div className={styles.contactInfo}>
      <div className={styles.info}>
        <ul>
          <h2>Контакты</h2>
          <li>
            <i className="fas fa-map-marker-alt"></i>
            <span>Адрес:</span>
            <select value={selectedCity} onChange={handleCityChange}>
              <option value="">Выберите город</option>
              {Object.keys(cities).map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </li>
          <li>
            <i className="fas fa-phone"></i>
            <span>Телефон:</span>
            <a href={`tel:${selectedMobile}`}>Позвони нам для заказа!</a>
          </li>
          <li>
            <i className="fas fa-users"></i>
            <span>Группа в ВК:</span>
            <a href={selectedCityUrl} target="_blank" rel="noreferrer">
              Группа в ВК
            </a>
          </li>

          <li>
            <i className="fas fa-clock"></i>
            <span>Время работы:</span>
            <span>C 10:00 до 22:00, без выходных!</span>
          </li>
        </ul>

        <div className={styles.moreInfo}>
          <p>
            Заказ еды всегда под рукой! Устанавливайте наше мобильное приложение
          </p>
          <ul className={styles.apps}>
            <li>
              <a href="https://play.google.com/store/apps/details?id=studio.balalaika.ourpizza&hl=ru">
                <img
                  src="https://нпицца.рф/assets/google-ab8ed5f2.png"
                  alt="google play"
                />
                <img
                  src="https://нпицца.рф/assets/googleplay-3d1df04a.jpg"
                  width={130}
                  alt="qr code"
                />
              </a>
            </li>
            <li>
              <a href="https://apps.apple.com/ru/app/нпицца-сеть-пиццерий/id1499485957">
                <img
                  src="https://нпицца.рф/assets/app-ffa5f867.svg"
                  alt="appstore"
                />
                <img
                  src="https://нпицца.рф/assets/googleplay-3d1df04a.jpg"
                  width={130}
                  alt="qr code"
                />
              </a>
            </li>
            <li>
              <a href="https://нпицца.рф">
                <img
                  src="https://нпицца.рф/assets/android-4570643b.svg"
                  alt="android"
                />
                <img
                  src="https://нпицца.рф/assets/googleplay-3d1df04a.jpg"
                  width={130}
                  alt="qr code"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};