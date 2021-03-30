import "./SwipeCards.css";
import React from "react";
import TinderCard from "react-tinder-card";
import { db, auth } from "../../firebase";

const SwipeCards = ({ places }) => {
  const handleRightSwipe = (data) => {
    console.log("Right Data", data);
    db.collection("places")
      .add({ userId: auth.currentUser.uid, data })
      .then(() => {
        console.log("Data added");
      })
      .catch((error) => console.log(error));
  };

  React.useEffect(() => {
    console.log("USER => ", auth.currentUser.uid);
  }, []);

  return (
    <div>
      <div className="tinderCards__cardsContainer">
        {places.map((data) => (
          <TinderCard
            className="swipe"
            key={data.id}
            preventSwipe={["up", "down"]}
            onSwipe={(direction) => {
              console.log(direction);
              if (direction == "right") {
                handleRightSwipe(data);
              }
            }}
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
