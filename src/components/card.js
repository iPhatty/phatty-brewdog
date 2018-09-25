import React, { Component } from 'react';

class BeerCard extends Component {
  state = {
    didMount: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ didMount: true });
    }, 0);
  }

  foodPairing = () => {
    return this.props.food_pairing.map(pairing => {
      return <li key={pairing}>{pairing}</li>;
    });
  };

  render() {
    const { image_url, name, tagline, description } = this.props;
    return (
      <li
        className={`list--item fade-in-bottom ${this.state.didMount &&
          'active'}`}
      >
        <div className="card">
          <img className="card--img" src={image_url} />
          <h2>{name}</h2>
          <p>
            <span className="date">{tagline}</span>
          </p>
          <p>{description}</p>
          <p>Goes well with:</p>
          <ul>{this.foodPairing()}</ul>
        </div>
      </li>
    );
  }
}

export default BeerCard;
