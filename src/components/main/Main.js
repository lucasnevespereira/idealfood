import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Main.css";
import SwipeCards from "../swipecards/SwipeCards";
// import axios from "axios";
// import { useLoadScript } from "@react-google-maps/api";

const Main = () => {
  // const libraries = ["places"];
  // // url = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+Poissy&key=";
  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  //   libraries,
  // });

  // if (loadError) return "Error loading maps";
  // if (!isLoaded) return "Loading maps";

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
      },
      () => null
    );
  };

  return (
    <div className="app">
      <Header></Header>
      <div className="main">
        <button className="locate" onClick={getLocation}>
          Locate me
        </button>
        <SwipeCards />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
