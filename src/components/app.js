import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

// Components
import SearchBox from './searchBox';
class App extends Component {
  state = {
    data: null
  };

  getData = searchTerm => {
    const url = `https://api.punkapi.com/v2/beers?food=${searchTerm}`;
    fetch(url)
      .then(response => {
        if (response.status !== 200) {
          console.log(
            'Looks like there was a problem. Status Code: ' + response.status
          );
          return;
        }
        // Examine the text in the response
        response.json().then(data => {
          this.setState({ data });
        });
      })
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
  };

  render() {
    return (
      <div>
        iPhatty React
        <SearchBox getData={this.getData} />
      </div>
    );
  }
}

export default hot(module)(App);
