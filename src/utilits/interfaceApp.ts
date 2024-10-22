export interface IFetchItems {
  sortBy: string;
  order: string;
  category: string;
  search: string;
  currentPage: number;
}

export interface IItemsSlice {
  items: {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    type: string;
    size: number;
    count: number;
  }[];
  countPizzas: number;
  totalPrice: number;
  status: "loading" | "success" | "error";
}

// interface for Pizza

export interface IFilterSlice {
  searchValue: string;
  categoryId: number;
  currentPage: number;
  sort: {
    name: string;
    sortPropety: string;
  };
}

// interface for cart
export interface ICartSlice {
  items: {
    id: number;
    size: number;
    type: string;
    count: number;
    price: number;
  }[];
  totalPrice: number;
}

// interface for pizzaPopap
export interface IPizzaPopupProps {
  title: string;
  price: number;
  imageUrl: string;
  onClose: () => void;
  description: string; // добавить description
  addPizzaInPopap: (id: number) => void;
  id: number;
  isOpen: boolean;
}

// interface for Pizza

export interface IPizza {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  description: string;
}

// interface for ICartPizzasProps

export interface ICartPizzasProps {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  size: number;
  count: number;
  type: string;
}

// interface for IPizzaProps
export interface IPizzaProps {
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  id: number;
  description: string;
}
