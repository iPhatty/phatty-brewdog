import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const BeerCard = props => {
  const foodPairing = props.food_pairing.map(pairing => {
    return <li key={pairing}>{pairing}</li>;
  });

  return (
    <Card>
      <Card.Content>
        <Image size="massive" floated="right" avatar src={props.image_url} />
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>
          <span className="date">{props.tagline}</span>
        </Card.Meta>
        {/* <Card.Description>{props.description}</Card.Description> */}
      </Card.Content>
      <Card.Content extra>
        <p>Goes well with:</p>
        <ul>{foodPairing}</ul>
      </Card.Content>
    </Card>
  );
};

export default BeerCard;
