import React, { useEffect } from "react";
import "./Send.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Send = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 400 });
  }, []);
  return (
    <div className="section-send" data-aos="fade-up">
      <div className="container">
        <h2 className="heading2">We're happy to hear from you</h2>
        <form className="form">
          <div>
            <label>Name</label>
            <input type="text" placeholder="Your Name" />
          </div>
          <div>
            <label>Email</label>
            <input type="Email" placeholder="Your Email" />
          </div>
          <div>
            <label>How did you find us?</label>
            <select>
              <option>Friends</option>
              <option>Family</option>
              <option>Whatsapp</option>
              <option>Twitter</option>
            </select>
          </div>
          <div>
            <label>Newsletter?</label>
            <input type="checkbox" checked />
            Yes, please
          </div>
          <div className="">
            <label>Drop us a line</label>
            <textarea placeholder="Your Message" />
          </div>
          <button className="btn">Send it !</button>
        </form>
      </div>
    </div>
  );
};

export default Send;
