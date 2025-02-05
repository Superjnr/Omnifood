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
  const headerEl = document.querySelector(".list");
  const link = document.querySelector(".nav-link");

  document.querySelectorAll(".list").forEach((link) => {
    link.addEventListener("click", () => {
      headerEl.classList.remove("responsive_nav");
    });
  });

  const allLinks = document.querySelectorAll("a:link");

  allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      // e.preventDefault();
      const href = link.getAttribute("href");

      if (href !== "#" && href.startsWith("#")) {
        const section = document.querySelector(href);
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  return (
    <div className="header">
      <nav className="nav">
        <img className="logo" src={logo} />
        <ul ref={navRef} className="list">
          <li>
            <a href="#FastFood" className="nav-link">
              Food delivery
            </a>
          </li>
          <li>
            <a href="#How" className="nav-link">
              How it works
            </a>
          </li>
          <li>
            <a href="#Cities" className="nav-link">
              Our Cities
            </a>
          </li>
          <li>
            <a href="#Sign" className="nav-link">
              Sign up
            </a>
          </li>
        </ul>
        <button className="nav-btn nav-open" onClick={showNavbar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
      <button className="nav-btn nav-close" onClick={showNavbar}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
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
