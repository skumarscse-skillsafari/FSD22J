import { useState } from "react";
const UseReducer = () => {
  const [number, setNumber] = useState({ count: 0 });

  const increment = (e) => {
    e.preventDefault();
    setNumber((prevVal) => {
      return {
        count: prevVal.count + 1,
      };
    });
    console.log(number);
  };

  const decrement = (e) => {
    setNumber((prevVal) => {
      return {
        count: prevVal.count - 1,
      };
    });
  };

  const reset = (e) => {
    setNumber((prevVal) => {
      return {
        count: 0,
      };
    });
  };
  return (
    <>
      <h2>UseReducer Component</h2>
      <h3>Counter App</h3>
      <h3>{number.count}</h3>
      <button onClick={increment}>Increment</button>{" "}
      <button onClick={decrement}>Decrement</button>{" "}
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default UseReducer;
