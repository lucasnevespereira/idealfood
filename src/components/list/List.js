import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Loader from "../loader/Loader";
import "./List.css";
import { db } from "../../firebase";

const List = () => {
  const [loading, setLoading] = useState(true);
  const [places, setPlaces] = useState([]);

  const fetchPlaces = async () => {
    const response = db.collection("places");
    await response
      .get()
      .then((docs) => {
        let fetched = [];
        docs.forEach((item) => {
          fetched.push(item.data());
        });
        setPlaces(fetched);
      })
      .then(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPlaces();
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="main">
        {!loading ? (
          places &&
          places.map((place) => {
            return (
              <div className="list-card" key={place.id}>
                <h3>{place.name}</h3>
                <p>{place.location.address}</p>
                <p>{place.location.city}</p>
                <hr />
                {place.categories.icon && (
                  <img
                    src={
                      place.categories.icon.prefix +
                      place.categories.icon.suffix
                    }
                    alt={place.categories.shortName}
                  />
                )}

                <small>{place.categories.shortName}</small>
              </div>
            );
          })
        ) : (
          <Loader></Loader>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default List;
