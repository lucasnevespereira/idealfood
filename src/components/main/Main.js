import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Main.css";
import SwipeCards from "../swipecards/SwipeCards";

const Main = () => {
  return (
    <div className="app">
      <Header></Header>
      <div className="main">
        <SwipeCards />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
