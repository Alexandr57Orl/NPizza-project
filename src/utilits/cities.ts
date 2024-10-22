export const cities = {
  "Кромы, ул. Карла Маркса, 1": {
    groupLink: "https://vk.com/nasha_pizza_cool",
  },
  "Орёл, Московское шоссе, 171": {
    groupLink: "https://vk.com/pizzavorle",
  },
  " Болхов, ул. Соловцова, 12В": {
    groupLink: "https://vk.com/nasha_pizza_bolhov",
  },
};
interface GroupUrls {
  [key: string]: string; // add an index signature
}
interface IMobile {
  [key: string]: string;
}
export const groupUrls: GroupUrls = {
  "Кромы, ул. Карла Маркса, 1": "https://vk.com/nasha_pizza_cool",
  "Орёл, Московское шоссе, 171": "https://vk.com/pizzavorle",
  " Болхов, ул. Соловцова, 12В": "https://vk.com/nasha_pizza_bolhov",
};

export const mobile: IMobile = {
  "Кромы, ул. Карла Маркса, 1": "+7 (999) 999-99-99",
  "Орёл, Московское шоссе, 171": "+7 (555) 555-55-55",
  " Болхов, ул. Соловцова, 12В": "+7 (777) 777-77-77",
};
