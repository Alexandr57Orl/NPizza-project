export interface IVacancy {
  id: number;
  title: string;
  description: string;
  requirements: string[];
  salary: string;
}

export const vacancies: IVacancy[] = [
  {
    id: 1,
    title: "Повар",
    description: "Учись и делай самые вкусные пиццы",
    requirements: ["Научим всему с нуля", "Большой плюс, если есть опыт"],
    salary: "от 30 000 руб.",
  },
  {
    id: 2,
    title: "Курьер",
    description: "Доставляй пиццу всему миру",
    requirements: [
      "Нужен свой автомобиль",
      "большое желание доставлять людям радость",
    ],
    salary: "От 25 000 руб.",
  },
  {
    id: 3,
    title: "Администратор",
    description: "Контролируй работу сотрудников",
    requirements: [
      "Понимание административных процессов",
      "Большой плюс, если есть опыт",
    ],
    salary: "от 40 000 руб.",
  },
];
