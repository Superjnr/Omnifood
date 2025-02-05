import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfinity } from "@fortawesome/free-solid-svg-icons";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="grid grid--2-cols">
          <div>
            <ul>
              <li>About Us</li>
              <li>Blog</li>
              <li>Press</li>
              <li>iOS App</li>
              <li>Android App</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCartShopping} />
              </li>
              <li>
                <FontAwesomeIcon icon={faInfinity} />
              </li>
              <li>
                <FontAwesomeIcon icon={faStopwatch} />
              </li>
              <li>
                <FontAwesomeIcon icon={faCarrot} />
              </li>
            </ul>
          </div>
        </div>
        <div className="foot">
          <p>Copyright &copy; 2024 by Omnifood. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
