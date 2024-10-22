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
  Кромы: "https://vk.com/nasha_pizza_cool",
  Орёл: "https://vk.com/pizzavorle",
  Болхов: "https://vk.com/nasha_pizza_bolhov",
};

export const mobile: IMobile = {
  Кромы: "+7 (999) 999-99-99",
  Орёл: "+7 (555) 555-55-55",
  Болхов: "+7 (777) 777-77-77",
};
