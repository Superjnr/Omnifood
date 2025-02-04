import React, { useEffect } from "react";
import "./Meals.css";
import one from "../../img/one.jpg";
import two from "../../img/two.jpg";
import three from "../../img/three.jpg";
import four from "../../img/four.jpg";
import five from "../../img/five.jpg";
import six from "../../img/six.jpg";
import seven from "../../img/seven.jpg";
import eight from "../../img/eight.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Meals = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, offset: 400 });
  }, []);
  return (
    <div className="section-meals">
      <div data-aos="fade-right">
        <ul className="meals-showcase">
          <li>
            <figure className="meal-photo">
              <img className="meal" src={one} />
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img className="meal" src={two} />
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img className="meal" src={three} />
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img className="meal" src={four} />
            </figure>
          </li>
        </ul>
      </div>
      <div data-aos="fade-left" data-aos-delay="400">
        <ul className="meals-showcase">
          <li>
            <figure className="meal-photo">
              <img className="meal" src={five} />
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img className="meal" src={six} />
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img className="meal" src={seven} />
            </figure>
          </li>
          <li>
            <figure className="meal-photo">
              <img className="meal" src={eight} />
            </figure>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Meals;
