import React, { useEffect } from "react";
import "./How.css";
import iPhone from "../../img/iPhone.png";
import gplay from "../../img/gplay.png";
import AOS from "aos";
import "aos/dist/aos.css";

const How = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, offset: 400 });
  }, []);
  return (
    <div className="section-how" data-aos="fade-up">
      <div className="container">
        <div className="h">
          <h2 className="heading2">How it works &mdash; simple as 1, 2, 3</h2>
          <div className="grid grid--2-cols">
            <div className="mob" data-aos="fade-left">
              <img src={iPhone} />
            </div>
            <div className="how-text" data-aos="fade-right">
              <div className="step">
                <span>1</span>
                <p>
                  Choose the subscription plan that best fits your needs and
                  sign up today.
                </p>
              </div>
              <div className="step">
                <span>2</span>
                <p>
                  Order your delicious meal using our mobile app or website. Or
                  you can even call us!
                </p>
              </div>
              <div className="step">
                <span>3</span>
                <p>
                  Enjoy your meal after less than 20 minutes. See you the next
                  time!
                </p>
              </div>
              <a href="#" className="btn-app">
                <img src={gplay} />
              </a>
              <a href="#" className="btn-app">
                <img src={gplay} />
              </a>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default How;
