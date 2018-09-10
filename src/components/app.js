import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

// Components
import SearchBox from './searchBox';
import Results from './results';
class App extends Component {
  render() {
    return (
      <div>
        iPhatty React
        <SearchBox />
        <Results />
      </div>
    );
  }
}

export default hot(module)(App);
