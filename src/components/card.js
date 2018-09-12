import React from 'react';

const BeerCard = props => {
  const foodPairing = props.food_pairing.map(pairing => {
    return <li key={pairing}>{pairing}</li>;
  });

  return (
    <li className="list--item">
      <div className="card">
        <img className="card--img" src={props.image_url} />
        <h2>{props.name}</h2>
        <p>
          <span className="date">{props.tagline}</span>
        </p>
        <p>{props.description}</p>
        <p>Goes well with:</p>
        <ul>{foodPairing}</ul>
      </div>
    </li>
  );
};

export default BeerCard;
