import { createContext, useContext, useReducer, useState } from "react";
import { faker } from "@faker-js/faker";

const Context = () => {
  faker.seed(99);
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
};

export default Context;
