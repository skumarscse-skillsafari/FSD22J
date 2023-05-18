import { useState } from "react";
const UseState = () => {
  //   console.log(useState()); // Hooks => return an array of a value and function
  // Syntax
  // const [stateVariable, stateFunction] = useState(intialValue)
  const [num, setNum] = useState(0);
  //   console.log(num);
  //   setNum((prevVal) => console.log(prevVal));
  const increment = function () {
    setNum((prevValue) => prevValue + 1);
  };

  const decrement = function () {
    setNum((prevValue) => prevValue - 1);
  };

  const reset = function () {
    setNum((prevValue) => (prevValue = 0));
  };
  return (
    <div>
      <h2>UseState Component</h2>
      <p>{num}</p>
      <button onClick={increment}>Increment</button> {"       "}
      <button onClick={decrement}>Decrement</button> {"       "}
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default UseState;
