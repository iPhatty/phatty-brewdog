import React from 'react';

import BeerCard from './card';

const Results = props => {
  const cards = props.beers.map(beer => {
    return (
      <BeerCard
        key={beer.id}
        image_url={beer.image_url}
        name={beer.name}
        tagline={beer.tagline}
        // description={beer.description}
        food_pairing={beer.food_pairing}
      />
    );
  });
  return <ul className="list">{cards}</ul>;
};

export default Results;
