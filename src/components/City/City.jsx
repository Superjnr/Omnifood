import React, { useEffect } from "react";
import "./City.css";
import lisbon from "../../img/lisbon.jpg";
import london from "../../img/london.jpg";
import san from "../../img/san.jpg";
import berlin from "../../img/berlin.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const City = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 400 });
  }, []);
  return (
    <div id="Cities" className="section-city" data-aos="fade-up">
      <h2 className="heading2">We're currently in these cities</h2>
      <div className="container">
        <div className=" city grid grid--4-cols">
          <div className="" data-aos="fade-right" data-aos-delay="500">
            <img src={lisbon} />
            <h4 className="heading4">Lisbon</h4>
            <p>
              <FontAwesomeIcon className="ic" icon={faUser} /> 1600+ eaters
            </p>
            <p>
              <FontAwesomeIcon className="ic" icon={faKitchenSet} /> 60+ top
              chefs
            </p>
            <p>
              <FontAwesomeIcon className="ic" icon={faHashtag} /> @omnifood_lx
            </p>
          </div>
          <div className="" data-aos="fade-right" data-aos-delay="400">
            <img src={san} />
            <h4 className="heading4">San Francisco</h4>
            <p>
              <FontAwesomeIcon className="ic" icon={faUser} /> 3700+ eaters
            </p>
            <p>
              <FontAwesomeIcon className="ic" icon={faKitchenSet} /> 160+ top
              chefs
            </p>
            <p>
              <FontAwesomeIcon className="ic" icon={faHashtag} /> @omnifood_sf
            </p>
          </div>
          <div className="" data-aos="fade-right" data-aos-delay="300">
            <img src={berlin} />
            <h4 className="heading4">Berlin</h4>
            <p>
              <FontAwesomeIcon className="ic" icon={faUser} /> 2300+ eaters
            </p>
            <p>
              <FontAwesomeIcon className="ic" icon={faKitchenSet} /> 110+ top
              chefs
            </p>
            <p>
              <FontAwesomeIcon className="ic" icon={faHashtag} /> @omnifood_br
            </p>
          </div>
          <div className="" data-aos="fade-right" data-aos-delay="200">
            <img src={london} />
            <h4 className="heading4">London</h4>
            <p>
              <FontAwesomeIcon className="ic" icon={faUser} /> 1200+ eaters
            </p>
            <p>
              <FontAwesomeIcon className="ic" icon={faKitchenSet} /> 50+ top
              chefs
            </p>
            <p>
              <FontAwesomeIcon className="ic" icon={faHashtag} /> @omnifood_ln
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default City;
