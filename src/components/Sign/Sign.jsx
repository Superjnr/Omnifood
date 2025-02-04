import React, { useEffect } from "react";
import "./Sign.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const Sign = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, offset: 400 });
  }, []);
  return (
    <div className="section-sign" data-aos="fade-up">
      <div className="container">
        <div className="s">
          <h2 className="heading2">Start eating healthy today</h2>
          <div className="grid grid--3-cols">
            <div
              className="plan-box"
              data-aos="flip-right"
              data-aos-delay="400"
            >
              <div>
                <h4 className="heading4">Premium</h4>
                <p class="plan-price">$399 / month</p>
                <p class="plan-price-meal">That's only 13.30$ per meal</p>
              </div>
              <div>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="i" /> 1 meal
                    every day
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="i" /> Order 24/7
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="i" /> Access to
                    newest creations
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="i" /> Free
                    delivery
                  </li>
                </ul>
                <div>
                  <button className="btn">Sign Up Now</button>
                </div>
              </div>
            </div>
            <div
              className="plan-box"
              data-aos="flip-right"
              data-aos-delay="300"
            >
              <div>
                <h4 className="heading4">Pro</h4>
                <p class="plan-price">$149 / month</p>
                <p class="plan-price-meal">That's only 14.90$ per meal</p>
              </div>
              <div>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="i" /> 1 meal 10
                    days/month
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="i" /> Order 24/7
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="i" /> Access to
                    newest creations
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="i" /> Free
                    delivery
                  </li>
                </ul>
                <div>
                  <button className="btn-show">Sign Up Now</button>
                </div>
              </div>
            </div>
            <div
              className="plan-box"
              data-aos="flip-right"
              data-aos-delay="100"
            >
              <div>
                <h4 className="heading4">Starter</h4>
                <p class="plan-price">19$ / meal</p>
                <p class="plan-price-meal">&nbsp;</p>
              </div>
              <div>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="i" /> 1 meal
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="i" /> Order from
                    8 am to 12 pm
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faXmark} className="i" />
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="i" /> Free
                    delivery
                  </li>
                </ul>
                <div>
                  <button className="btn-show">Sign Up Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
