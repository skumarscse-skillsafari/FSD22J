import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <ul className="list">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <hr />
    </div>
  );
}

export default Navbar;
