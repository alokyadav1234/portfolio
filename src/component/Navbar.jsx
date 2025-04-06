import React, { useState } from "react";
import logo from "../assets/logo.svg";
import round_arrow from "../assets/round_arrow.svg";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="navlogo" />
      </div>
      <div className="dotline-container">
        <div className="nav-line"></div>
        {/* <span className="nav-arrow"></span> {`>`} */}
        {/* Add horizontal line */}
        <div
          className="nav-menu-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* <div className="nav-dot"></div>  */}
          {/* Dot for toggle */}
          <div className="nav-dot">
            <img src={round_arrow} />
          </div>
          <ul className={`nav-menu ${menuOpen ? "show" : "hide"}`}>
            {/* <li>
            <AnchorLink className="anchor-link">Home</AnchorLink>
          </li> */}
            <li>
              <AnchorLink className="anchor-link" href="#about">
                About Me
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="anchor-link" href="#services">
                Projects
              </AnchorLink>
            </li>
            {/* <li>
            <AnchorLink className="anchor-link" href="mywork">
              Portfolio
            </AnchorLink>
          </li> */}
            <li>
              <AnchorLink className="anchor-link" href="#contact">
                Contact
              </AnchorLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
