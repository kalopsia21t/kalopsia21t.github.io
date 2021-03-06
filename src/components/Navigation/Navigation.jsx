import { Link } from "react-router-dom";

import "./Navigation.css";

function Navigation() {
  return (
    <nav id="nav">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
