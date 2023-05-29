import { useReducer } from "react";

const UseReducer1 = () => {
  /*
    const [state, dispatchFunction] = useReducer(reducerFun, initialState);

    reducerFun(state, actionObj)
    actionObj = {
        type: ...,
        payload: ... (optional)
    }
*/

  const reducerFun = (number, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: number.count + 1 };
      case "DECREMENT":
        return { count: number.count - 1 };
      case "RESET":
        return { count: 0 };
      default:
        return number.count;
    }
  };

  let initialState = { count: 0 };
  const [number, dispatch] = useReducer(reducerFun, initialState);

  const increment = (e) => {
    e.preventDefault();
    dispatch({ type: "INCREMENT" });
  };

  const decrement = (e) => {
    e.preventDefault();
    dispatch({ type: "DECREMENT" });
  };

  const reset = (e) => {
    e.preventDefault();
    dispatch({ type: "RESET" });
  };
  return (
    <>
      <h2>UseReducer1 Component</h2>
      <h3>Counter App</h3>
      <h3>{number.count}</h3>
      <button onClick={increment}>Increment</button>{" "}
      <button onClick={decrement}>Decrement</button>{" "}
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default UseReducer1;
