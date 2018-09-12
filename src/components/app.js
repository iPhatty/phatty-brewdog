import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

// Components
import SearchBox from './searchBox';
import Results from './results';
class App extends Component {
  state = {
    data: []
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
          this.setState({ data }, () => console.log('data updated: ', data));
        });
      })
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="row">
          <SearchBox getData={this.getData} />
        </div>
        <div className="row">
          <Results beers={this.state.data} />
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
