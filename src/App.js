import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Fast from "./components/FastFood/Fast";
import Meals from "./components/Meals/Meals";
import How from "./components/How/How";
import City from "./components/City/City";
import Customers from "./components/Customers/Customers";
import Sign from "./components/Sign/Sign";
import Send from "./components/Send/Send";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, offset: 200 });
  }, []);
  return (
    <div>
      <Header />
      <Fast />
      <Meals />
      <How />
      <City />
      <Customers />
      <Sign />
      <Send />
      <Footer />
    </div>
  );
};

export default App;
