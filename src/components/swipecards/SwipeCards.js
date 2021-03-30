import "./SwipeCards.css";
import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";

const SwipeCards = ({ places }) => {
  // const [data, setData] = useState([
  //   {
  //     name: "resto1",
  //     url:
  //       "https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  //   },
  //   {
  //     name: "resto2",
  //     url:
  //       "https://images.pexels.com/photos/735869/pexels-photo-735869.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  //   },
  // ]);

  useEffect(() => {
    console.log(places);
  }, []);

  return (
    <div>
      <div className="tinderCards__cardsContainer">
        {places.map((data) => (
          <TinderCard
            className="swipe"
            key={data.id}
            preventSwipe={["up", "down"]}
          >
            <div
              className="card"
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/735869/pexels-photo-735869.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`,
                backgroundColor: "#eee",
              }}
            >
              <div>
                <h2>{data.name}</h2>
                {data.location && (
                  <p>
                    {data.location.city}, {data.location.state}
                  </p>
                )}
                <p></p>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default SwipeCards;
