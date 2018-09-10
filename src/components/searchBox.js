import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

class SearchBox extends Component {
  state = {
    searchTerm: ''
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          action={{ icon: 'search' }}
          placeholder="Search..."
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default SearchBox;
