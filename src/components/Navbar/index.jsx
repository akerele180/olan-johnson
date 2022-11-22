import React from "react";
import { Nav } from "../../utils/constants/Navbar";
import Logo from "../../assets/olan-johnson-logo.png";
import { NavLink, Link } from "react-router-dom";
import { MdClose, MdMenu } from "react-icons/md";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = React.useState(true);
  const handleMobileMenuToggle = () => setMenu((menu) => !menu);

  return (
    <header className="flex justify-between items-center h-[120px] w-[90vw] mx-auto relative">
      <div className="logo">
        <a href="/">
          <img src={Logo} alt="" className="" />
        </a>
      </div>
      <nav className="flex items-center">
        <ul className="md:flex justify-around flex-1 hidden">
          {Nav.map((item) => (
            <li key={item.name}>
              <NavLink
                to={`${item.path}`}
                className="px-4 md:py-0 hover:text-secondary-dark"
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div
          onClick={handleMobileMenuToggle}
          className={`md:hidden cursor-pointer text-secondary-dark ${
            menu ? "mobile__open" : "mobile__close"
          }`}
        >
          <MdMenu size={40} />
        </div>
      </nav>

      <nav
        className={` px-[5vw] fixed z-20 bg-[#fff] left-0 right-0 top-0 bottom-0 delay-50 transition ease-in duration-300 ${
          !menu ? "opacity-100" : "opacity-100 translate-x-full"
        }`}
      >
        <div className="absolute left-0 top-6 right-0 flex items-center justify-between h-[80px] py-[5px]">
          <div className="logo">
            <img src={Logo} alt="" className="pl-3" />
          </div>
          <MdClose
            size={40}
            onClick={handleMobileMenuToggle}
            className="text-secondary-dark font-bold cursor-pointer pr-2"
          />
        </div>
        <ul className="w-full flex flex-col justify-center">
          <li
            className="leading-20 py-2 text-xl text-center hover:text-secondary-dark hover:translate-x-1 ease-linear duration-150"
            onClick={() => setMenu(true)}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className="leading-20 py-2 text-xl  text-center hover:text-secondary-dark hover:translate-x-1 ease-linear duration-150"
            onClick={() => setMenu(true)}
          >
            <Link to="/projects">Projects</Link>
          </li>
          <li
            className="leading-20 py-2 text-xl  text-center hover:text-secondary-dark hover:translate-x-1 ease-linear duration-150"
            onClick={() => setMenu(true)}
          >
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li
            className="leading-20 py-2 text-xl  text-center hover:text-secondary-dark hover:translate-x-1 ease-linear duration-150"
            onClick={() => setMenu(true)}
          >
            <Link to="/about-us">About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
