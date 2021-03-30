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

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setData(places);
      setLoading(false);
    }
  }, [data]);

  return (
    <div>
      {loading ? (
        <div>I am loading</div>
      ) : (
        <div className="tinderCards__cardsContainer">
          {data.map((data) => (
            <TinderCard
              className="swipe"
              key={data.id}
              preventSwipe={["up", "down"]}
            >
              <div
                className="card"
                style={{
                  // backgroundImage: `url(${data.url})`,
                  backgroundColor: "black",
                }}
              >
                <p>Test</p>
                <h3>{data.name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default SwipeCards;
