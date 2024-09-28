import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  const [isActive, setIsActive] = useState(false);
  const handleMenuClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar__logo">
          <h1>Logo</h1>
        </div>
        <div>
          <div className="navbar__hamburger">
            <IoMenu size={35} onClick={handleMenuClick} />
          </div>
          <ul
            className={`navbar__list ${isActive ? "navbar__list_active" : ""}`}
          >
            <div
              className={`navbar__list-close ${
                isActive ? "navbar__list-close_active" : ""
              }`}
            >
              <IoClose size={35} onClick={handleMenuClick} />
            </div>
            <a href="/">
              <li
                className={`navbar__list-item ${
                  pathname === "/" ? "navbar__list-item_active" : ""
                }`}
              >
                Home
              </li>
            </a>
            <a href="/about">
              <li
                className={`navbar__list-item ${
                  pathname === "/about" ? "navbar__list-item_active" : ""
                }`}
              >
                About
              </li>
            </a>
            <a href="/services">
              <li
                className={`navbar__list-item ${
                  pathname === "/services" ? "navbar__list-item_active" : ""
                }`}
              >
                Services
              </li>
            </a>
            <a href="/contact">
              <li
                className={`navbar__list-item ${
                  pathname === "/contact" ? "navbar__list-item_active" : ""
                }`}
              >
                Login
              </li>
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
