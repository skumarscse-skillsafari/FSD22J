import UserDetails from "./UserDetails";
import { useState } from "react";

const User = () => {
  const [isLogged, setIslogged] = useState(false);
  let john = {
    name: "John",
    age: 25,
    isAdmin: true,
    designation: "Developer",
    city: "Chennai",
  };
  return (
    <div>
      <h2>User Components</h2>
      <button onClick={() => setIslogged(!isLogged)}>Switch login</button>
      {!isLogged ? <h2>User not loggedin</h2> : <UserDetails user={john} />}
    </div>
  );
};

export default User;
