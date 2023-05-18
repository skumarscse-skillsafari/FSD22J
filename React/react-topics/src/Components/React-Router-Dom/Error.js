import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <h2>Page not found</h2>
      <p>
        <Link to="/">Click here to go Home Page</Link>
      </p>
    </div>
  );
};

export default Error;
