export const cartReducer = (state, action) => {
  //   console.log(state); // { products: Array(20), cart: Array(1) }
  //   console.log(action); // { type: "", payload: prod }
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export const productReducer = () => {};
