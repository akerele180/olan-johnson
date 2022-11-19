import React from "react";
import { Nav } from "../../utils/constants/Navbar";
import Logo from "../../assets/olan-johnson-logo.png";
import { NavLink, Link } from "react-router-dom";
import { GrClose, GrMenu } from "react-icons/gr";
import "./Navbar.css";

const Navbar = () => {
  const [viewNav, setViewNav] = React.useState(false);

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <nav>
        <ul className="web__nav">
          {Nav.map((item) => (
            <li key={item.name}>
              <NavLink to={`${item.path}`}>{item.name}</NavLink>
            </li>
          ))}
        </ul>

        <ul className="mob__nav">
          <GrMenu
            size={40}
            className={`${!viewNav ? "active" : "inactive"}`}
            onClick={() => setViewNav(!viewNav)}
          />
          <GrClose
            size={40}
            className={`${viewNav ? "active" : "inactive"}`}
            onClick={() => setViewNav(!viewNav)}
          />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
