import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Loader from "../loader/Loader";
import "./List.css";
import { db, auth } from "../../firebase";

const List = () => {
  const [loading, setLoading] = useState(true);
  const [places, setPlaces] = useState([]);

  const fetchPlaces = async () => {
    const response = db
      .collection("places")
      .where("userId", "==", `${auth.currentUser.uid}`);
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
              <div className="list-card" key={place.data.id}>
                <h3>{place.data.name}</h3>
                <p>{place.data.location.address}</p>
                <p>{place.data.location.city}</p>
                <hr />
                {place.data.categories.icon && (
                  <img
                    src={
                      place.data.categories.icon.prefix +
                      place.data.categories.icon.suffix
                    }
                    alt={place.data.categories.shortName}
                  />
                )}

                <hr />
                <div
                  className="action"
                  onClick={() => {
                    setLoading(true);
                    db.collection("places")
                      .doc(place.data.id)
                      .delete()
                      .then(() => {
                        console.log("Document successfully deleted!");
                      })
                      .then(() => {
                        fetchPlaces();
                        setLoading(false);
                      })
                      .catch((error) => {
                        console.error("Error removing document: ", error);
                      });
                  }}
                >
                  <span>Remove</span>
                </div>
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
