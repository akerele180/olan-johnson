import React from "react";
import { Nav } from "../../utils/constants/Navbar";
import Logo from "../../assets/olan-johnson-logo.png";
import { NavLink, Link } from "react-router-dom";
import { GrClose, GrMenu } from "react-icons/gr";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <nav>
        <ul>
          {Nav.map((item) => (
            <li key={item.name}>
              <NavLink
                to={`${item.path}`}
                // className={(isActive) => (isActive ? "active" : "")}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <ul>
          <GrMenu size={40} />
          <GrClose size={40} />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
