import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

// Components
import SearchBox from './searchBox';
class App extends Component {
  render() {
    return (
      <div>
        iPhatty React
        <SearchBox />
      </div>
    );
  }
}

export default hot(module)(App);
