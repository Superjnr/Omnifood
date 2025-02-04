import React, { useEffect } from "react";
import "./Customers.css";
import cus1 from "../../img/cus1.jpg";
import cus2 from "../../img/cus2.jpg";
import cus3 from "../../img/cus3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Customers = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, offset: 400 });
  }, []);
  return (
    <div className="section-cus" data-aos="fade-up">
      <div className="container">
        <h2 className="heading2">Our customers can't live without us</h2>
        <div className="grid grid--3-cols">
          <div className="" data-aos="fade-right" data-aos-delay="400">
            <blockquote>
              Omnifood is just awesome! I just launched a startup which leaves
              me with no time for cooking, so Omnifood is a life-saver. Now that
              I got used to it, I couldn't live without my daily meals!
              <cite>
                <img src={cus1} />
                Alberto Duncan
              </cite>
            </blockquote>
          </div>
          <div className="" data-aos="fade-right" data-aos-delay="300">
            <blockquote>
              Inexpensive, healthy and great-tasting meals, delivered right to
              my home. We have lots of food delivery here in Lisbon, but no one
              comes even close to Omifood. Me and my family are so in love!
              <cite>
                <img src={cus2} />
                Joana Silva
              </cite>
            </blockquote>
          </div>
          <div className="" data-aos="fade-right" data-aos-delay="100">
            <blockquote>
              I was looking for a quick and easy food delivery service in San
              Franciso. I tried a lot of them and ended up with Omnifood. Best
              food delivery service in the Bay Area. Keep up the great work!
              <cite>
                <img src={cus3} />
                Milton Chapman
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
