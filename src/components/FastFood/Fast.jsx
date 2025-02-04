import React from "react";
import "./Fast.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfinity } from "@fortawesome/free-solid-svg-icons";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Fast = () => {
  return (
    <div className="section-fast" data-aos="fade-up">
      <div className="container">
        <h2 className="heading2">get food fast &mdash; not fast food</h2>
        <p className="long-copy">
          Hello, we're Omnifood, your new premium food delivery service. We know
          you're always busy.
          <br /> No time for cooking. So let us take care of that, we're really
          good at it, we promise!
        </p>
        <div className="grid grid--4-cols">
          <div className="">
            <div className="icon">
              <FontAwesomeIcon icon={faInfinity} />
            </div>
            <h4 className="heading4">Up to 365 days/year</h4>
            <p className="long-copy">
              Never cook again! We really mean that. Our subscription plans
              include up to 365 days/year coverage. You can also choose to order
              more flexibly if that's your style.
            </p>
          </div>
          <div className="">
            <div className="icon">
              <FontAwesomeIcon icon={faStopwatch} />
            </div>
            <h4 className="heading4">Ready in 20 minutes</h4>
            <p className="long-copy">
              You're only twenty minutes away from your delicious and super
              healthy meals delivered right to your home. We work with the best
              chefs in each town to ensure that you're 100% happy.
            </p>
          </div>
          <div className="">
            <div className="icon">
              <FontAwesomeIcon icon={faCarrot} />
            </div>
            <h4 className="heading4">100% organic</h4>
            <p className="long-copy">
              All our vegetables are fresh, organic and local. Animals are
              raised without added hormones or antibiotics. Good for your
              health, the environment, and it also tastes better!
            </p>
          </div>
          <div className="">
            <div className="icon">
              <FontAwesomeIcon icon={faCartShopping} />
            </div>
            <h4 className="heading4">Order anything</h4>
            <p className="long-copy">
              We don't limit your creativity, which means you can order whatever
              you feel like. You can also choose from our menu containing over
              100 delicious meals. It's up to you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fast;
