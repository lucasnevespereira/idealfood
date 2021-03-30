import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Loader from "../../components/loader/Loader";
import "./Main.css";
import SwipeCards from "../swipecards/SwipeCards";
import axios from "axios";

const Main = () => {
  let places = [];
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position.coords);
        let url = `https://api.foursquare.com/v2/venues/search?client_id=${process.env.REACT_APP_FOURSQUARE_CLIENT_ID}&client_secret=${process.env.REACT_APP_FOURSQUARE_CLIENT_SECRET}&v=20180323&limit=10&ll=${position.coords.latitude},${position.coords.longitude}&limit=50&categoryId=4d4b7105d754a06374d81259`;
        axios
          .get(url)
          .then((res) => {
            console.log("Before => ", places);
            res.data.response.venues.forEach((venue) => {
              places.push(venue);
              // REQUEST TO FETCH VENUE PHOTO
              // axios
              //   .get(
              //     ` https://api.foursquare.com/v2/venues/${venue.id}/photos?client_id=${process.env.REACT_APP_FOURSQUARE_CLIENT_ID}&client_secret=${process.env.REACT_APP_FOURSQUARE_CLIENT_SECRET}&v=20180323`
              //   )
              //   .then((result) => {
              //     result.data.response.photos.items.map((item) => {
              //       let suffix = item.suffix;
              //       let prefix = item.prefix;
              //       const photoUrl = suffix + prefix;
              //       console.log(photoUrl);
              //     });
              //   });
            });

            console.log("After => ", places);
            setData(places);
            setLoading(false);
          })
          .catch((e) => console.log("Error:", e));
      },
      () => null
    );
  };

  return (
    <div className="app">
      <Header></Header>

      <div className="main">
        {/* <button className="locate" onClick={getLocation}>
          Locate me
        </button> */}
        {loading ? (
          <div className="loader-wrapper">
            <Loader />
          </div>
        ) : (
          <SwipeCards places={data} />
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
