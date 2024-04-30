import React from "react";
import "./starsrate.css";

const StarsRate = () => {
  const values = [1, 2, 3, 4, 5];

  return (
    <div className="d-flex  align-items-center gap-1">
      {values.map((value, index) => (
        <button
          key={`star-${index}`}
          className={`btn p-0  star-rate ${index < rate ? "fill" : ""}`}
        >
          <ion-icon name="star"></ion-icon>
        </button>
      ))}
      <span className="text-secondary ms-1 align-self-start d-none d-lg-block small">
        0/5
      </span>
    </div>
  );
};

export default StarsRate;