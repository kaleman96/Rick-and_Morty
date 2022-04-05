import React from "react";
import "../Card/style-card.css";

const Card = ({ rickAndMorty }) => {
  return (
    <div className="row">
      {rickAndMorty.map((item, index) => (
        <div key={index} className="col">
          <div
            className="card borde overflow-hidden"
            style={{ minwidth: "200px" }}
          >
            <img src={item.image} alt="" />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <hr />
              <p>Species: {item.species}</p>
              <p>Location: {item.location.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
