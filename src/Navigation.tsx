import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <ul className="nav">
      <li>
        <Link className="navLink" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/Register">Register</Link>
      </li>
      <li></li>
    </ul>
  );
};

export default Navigation;
