import React from "react";
import { useRef } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "../../img/logo-white.png";

const Header = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const closeNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  return (
    <div className="header">
      <nav className="nav">
        <img className="logo" src={logo} />
        <ul ref={navRef} className="list">
          <li>
            <a href="#FastFood" className="nav-link" onClick={closeNavbar}>
              Food delivery
            </a>
          </li>
          <li>
            <a href="#How" className="nav-link" onClick={closeNavbar}>
              How it works
            </a>
          </li>
          <li>
            <a href="#Cities" className="nav-link" onClick={closeNavbar}>
              Our Cities
            </a>
          </li>
          <li>
            <a href="#Sign" className="nav-link" onClick={closeNavbar}>
              Sign up
            </a>
          </li>
        </ul>
        <button className="nav-btn nav-open" onClick={showNavbar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
      <div className="hero">
        <div className="hero-text">
          <h1>
            Goodbye junk food. <br /> Hello super healthy meals.
          </h1>
          <button className="btn">I'm Hungry</button>
          <button className="btn-show">Show me more</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
