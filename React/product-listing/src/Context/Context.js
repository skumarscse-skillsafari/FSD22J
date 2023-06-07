import { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer, productReducer } from "./Reducer";

const Cart = createContext();
faker.seed(99);
const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price().split(".")[0],
    image: faker.image.urlLoremFlickr({ category: "abstract" }),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    quickDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));
  console.log(products);

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [
      {
        id: "ab7ddb0b-c39f-4490-98fd-06c4ba6775e9",
        image: "https://loremflickr.com/640/480/abstract?lock=5651399671021568",
        inStock: 0,
        name: "Fantastic Frozen Gloves",
        price: "525",
        quickDelivery: false,
        ratings: 5,
      },
    ],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: "",
    byQuickDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
