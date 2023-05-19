import { Link } from "react-router-dom";
const Nav = () => {
  const container = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  };
  return (
    <ul style={container}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
    </ul>
  );
};

export default Nav;
